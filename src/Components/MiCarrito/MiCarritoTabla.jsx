import React, { useState, useEffect } from "react";
import "./MiCarritoTabla.css";
import Tarjetas from "../Tarjetas/Tarjetas";
import { Link, useNavigate } from "react-router-dom";

const obtenerIdUsuarioDesdeCookies = () => {
  const cookies = document.cookie.split("; ");
  const cookieId = cookies.find((cookie) => cookie.startsWith("_id"));
  return cookieId ? cookieId.split("=")[1] : null;
};

const MiCarritoTabla = () => {
  const [pedidoMiCarrito, setPedidoMiCarrito] = useState([]);
  const [precioTotal, setPrecioTotal] = useState(0);
  const [eliminandoProductoId, setEliminandoProductoId] = useState(null);
  const [obteniendoCarrito, setObteniendoCarrito] = useState(true);
  const [realizandoCompra, setRealizandoCompra] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const userId = obtenerIdUsuarioDesdeCookies();

    if (!userId) {
      console.error("ID de usuario no encontrado en las cookies.");
      navigate("/acceso");
      return;
    }

    setObteniendoCarrito(true);

    fetch(`https://restaurantedb.onrender.com/api/carrito/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPedidoMiCarrito(data.carrito.productos);
        setPrecioTotal(data.carrito.total);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      })
      .finally(() => {
        setObteniendoCarrito(false);
      });
  }, []);

  const actualizarCantidadEnServidor = async (idProducto, nuevaCantidad) => {
    const userId = obtenerIdUsuarioDesdeCookies();

    if (!userId) {
      console.error("ID de usuario no encontrado en las cookies.");
      return;
    }

    fetch(
      `https://restaurantedb.onrender.com/api/carrito/actualizar-cantidad/${userId}/${idProducto}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nuevaCantidad }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setPedidoMiCarrito(data.carrito.productos);
        setPrecioTotal(data.carrito.total);
      })
      .catch((error) => {
        console.error("Error updating item quantity:", error);
      });
  };

  const disminuirProducto = (idProducto) => {
    const producto = pedidoMiCarrito.find(
      (producto) => producto.menu === idProducto
    );
    if (producto) {
      actualizarCantidadEnServidor(
        idProducto,
        Math.max(producto.cantidad - 1, 0)
      );
    }
  };

  const agregarProducto = (idProducto) => {
    const producto = pedidoMiCarrito.find(
      (producto) => producto.menu === idProducto
    );
    if (producto) {
      actualizarCantidadEnServidor(idProducto, producto.cantidad + 1);
    }
  };

  const eliminarMenu = (idProducto) => {
    const userId = obtenerIdUsuarioDesdeCookies();

    if (!userId) {
      console.error("ID de usuario no encontrado en las cookies.");
      return;
    }

    setEliminandoProductoId(idProducto);

    fetch(
      `https://restaurantedb.onrender.com/api/carrito/eliminar/${userId}/${idProducto}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setPedidoMiCarrito(data.carrito.productos);
        setPrecioTotal(data.carrito.total);
      })
      .catch((error) => {
        console.error("Error deleting cart item:", error);
      })
      .finally(() => {
        setEliminandoProductoId(null);
      });
  };

  const realizarCompra = async () => {
    try {
      setRealizandoCompra(true);

      const userId = obtenerIdUsuarioDesdeCookies();

      if (!userId) {
        console.error("ID de usuario no encontrado en las cookies.");
        return;
      }

      const fechaActual = new Date();
      const pedido = {
        usuario: userId,
        fecha: fechaActual,
        productos: pedidoMiCarrito.map((producto) => ({
          menu: producto.menu,
          nombre: producto.nombre,
          cantidad: producto.cantidad,
        })),
      };

      // Enviar los datos al servidor
      const response = await fetch(
        "https://restaurantedb.onrender.com/api/pedidos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(pedido),
        }
      );

      if (response.ok) {
        // Limpiar el carrito después de la compra exitosa
        setPedidoMiCarrito([]);
        setPrecioTotal(0);
        alert("Compra realizada con éxito");
      } else {
        console.error("Error al realizar la compra:", response.statusText);
        alert("Error al realizar la compra. Inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error al realizar la compra:", error);
      alert("Error al realizar la compra. Inténtalo de nuevo.");
    } finally {
      setRealizandoCompra(false);
    }
  };

  return obteniendoCarrito ? (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  ) : pedidoMiCarrito.length > 0 ? (
    <>
      <div>
        <h1 className="tituloCarrito">Mi Carrito</h1>
      </div>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">NOMBRE</th>
              <th scope="col">DETALLE</th>
              <th scope="col">PRECIO UNITARIO</th>
              <th scope="col">CANTIDAD</th>
              <th scope="col">ELIMINAR</th>
              <th scope="col">SUBTOTAL</th>
            </tr>
          </thead>
          <tbody>
            {pedidoMiCarrito.map((producto) => (
              <tr key={producto.menu}>
                <th>{producto.nombre}</th>
                <td>{producto.detalle}</td>
                <td>{`$${producto.precio}`}</td>
                <td>
                  <button
                    className="botonDisminuir"
                    onClick={() => disminuirProducto(producto.menu)}
                  >
                    -
                  </button>
                  {producto.cantidad}
                  <button
                    className="botonAgregar"
                    onClick={() => agregarProducto(producto.menu)}
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    className="botonEliminar"
                    onClick={() => eliminarMenu(producto.menu)}
                    disabled={eliminandoProductoId === producto.menu}
                  >
                    {eliminandoProductoId === producto.menu ? (
                      <div
                        className="spinner-border spinner-border-sm"
                        role="status"
                      >
                        <span className="sr-only"></span>
                      </div>
                    ) : (
                      "Eliminar"
                    )}
                  </button>
                </td>
                <td>{`$${producto.cantidad * producto.precio}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="tituloCarrito">
        Total a pagar: $ {precioTotal.toLocaleString()}
      </h2>
      <div className="text-center mb-4">
        <button
          className="btn btn-warning"
          onClick={realizarCompra}
          disabled={realizandoCompra}
        >
          {realizandoCompra ? "Realizando compra..." : "Comprar"}
        </button>
      </div>
    </>
  ) : (
    <>
      <h2 className="tituloCarrito">El carrito está vacío</h2>
      <div className="text-center mb-4">
        <Link to="/tarjetas" className="btn btn-success">
          Ir a elegir menú
        </Link>
      </div>
    </>
  );
};

export default MiCarritoTabla;
