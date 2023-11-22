import React, { useState , useEffect} from 'react'

import './MiCarritoTabla.css'


const carrito = [
    { id: 1, nombre: "Papas Gratinada",detalle:"Papas trozadas con queso",precio:900,cantidad:1},
    { id: 2, nombre: "Milanesa con papas",detalle:"Milanesa al plato con papas fritas",precio:2900,cantidad:1},
    { id: 3, nombre: "Salteado vegano",detalle:"Ensaladas con queso",precio:1500,cantidad:1},
  ];


  const MiCarritoTabla = () => {
    const [pedidoMiCarrito, setPedidoMiCarrito] = useState(carrito);
  
    const disminuirProducto = (idProducto) => {
        setPedidoMiCarrito((menu) => menu.map((plato) =>
        plato.id === idProducto ? { ...plato, cantidad: Math.max(plato.cantidad - 1, 0) } : plato
        )
      );
    };
  
    const agregarProducto = (idProducto) => {
        setPedidoMiCarrito((menu) => menu.map((plato) => 
        (plato.id === idProducto ? { ...plato, cantidad: plato.cantidad + 1 } : plato))
        );
    };
  
    const EliminarMenu = (idProducto) => {
        setPedidoMiCarrito((menu) => menu.filter((plato) => plato.id !== idProducto));
      };
    const precioTotal = pedidoMiCarrito.reduce((total,menu)=> total + menu.precio * menu.cantidad, 0);
    return pedidoMiCarrito.length>0? (
      <>
      <div>
          <h1 className='tituloCarrito'>Mi Carrito</h1>
          
      </div>
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
              <tr key={producto.id}>
                <th>{producto.nombre}</th>
                <td>{producto.detalle}</td>
                <td>{producto.precio}</td>
                <td>
                <button className='botonDisminuir' onClick={() => disminuirProducto(producto.id)}>-  </button>
                  {producto.cantidad}
                  <button className='botonAgregar'onClick={() => agregarProducto(producto.id)}>  +</button>
                </td>
                <td>
                    <button className='botonEliminar' onClick={() => EliminarMenu(producto.id)}>Eliminar</button>
                </td>
                <td>{producto.cantidad * producto.precio}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Total a pagar: $ {precioTotal}</h2>
     </>
    ) : (
      <>
      <h2 className='tituloCarrito'>El carrito esta vacio</h2>
      <button className='btn btn-success'>Ir a elegir menu</button>
      </>
      );
  }; 
  
  export default MiCarritoTabla