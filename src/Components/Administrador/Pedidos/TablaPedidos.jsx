import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import moment from "moment-timezone";
import "moment/locale/es";

function TablaPedidos({ pedidos, handleEdit, handleDelete }) {
  const [userEmails, setUserEmails] = useState({});
  const [menuNames, setMenuNames] = useState({});

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const fetchUserDetails = async (userId) => {
    try {
      const response = await fetch(
        `https://restaurantedb.onrender.com/api/usuarios/${userId}`
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch user details for user ID ${userId}`);
      }

      const userData = await response.json();
      return userData.email;
    } catch (error) {
      console.error(error);
      return "Error fetching email";
    }
  };

  const fetchMenuDetails = async (menuId) => {
    try {
      const response = await fetch(
        `https://restaurantedb.onrender.com/api/menus/${menuId}`
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch menu details for menu ID ${menuId}`);
      }

      const menuData = await response.json();
      return menuData.name;
    } catch (error) {
      console.error(error);
      return "Error fetching menu name";
    }
  };

  useEffect(() => {
    pedidos.forEach((pedido) => {
      if (!userEmails[pedido.usuario]) {
        fetchUserDetails(pedido.usuario).then((email) => {
          setUserEmails((prevEmails) => ({
            ...prevEmails,
            [pedido.usuario]: email,
          }));
        });
      }
    });

    pedidos.forEach((pedido) => {
      pedido.productos.forEach((producto) => {
        const { menu } = producto;
        if (!menuNames[menu]) {
          fetchMenuDetails(menu).then((menuName) => {
            setMenuNames((prevMenuNames) => ({
              ...prevMenuNames,
              [menu]: menuName,
            }));
          });
        }
      });
    });
  }, [pedidos, userEmails, menuNames]);

  const formatFecha = (fecha) => {
    return moment(fecha)
      .tz("America/Argentina/Buenos_Aires")
      .locale("es")
      .format("lll");
  };

  return (
    <Table striped bordered hover className="table-light">
      <thead>
        <tr>
          <th>ID Pedido</th>
          <th>Email Usuario</th>
          <th>Fecha y Hora</th>
          <th>Productos</th>
          <th>Servido</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {pedidos.map((pedido) => (
          <tr key={pedido._id}>
            <td>{pedido._id}</td>
            <td>{userEmails[pedido.usuario] || "Loading..."}</td>
            <td>{formatFecha(pedido.fecha)}</td>
            <td>
              <ul>
                {pedido.productos.map((producto) => (
                  <li key={producto.menu._id} style={{ color: "black" }}>
                    {menuNames[producto.menu] || "Loading..."} - Cantidad:{" "}
                    {producto.cantidad}
                  </li>
                ))}
              </ul>
            </td>
            <td>{pedido.servido ? "Si" : "No"}</td>
            <td>
              <Button
                variant="warning m-1"
                onClick={() => {
                  handleEdit(pedido._id);
                  scrollToTop();
                }}
              >
                <FaEdit style={{ fontSize: "20px" }} />
              </Button>
              <Button
                variant="danger m-1"
                onClick={() => handleDelete(pedido._id)}
              >
                <FaDeleteLeft style={{ fontSize: "20px" }} />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TablaPedidos;
