import React, { useState , useEffect} from 'react'

import './MiCarritoTabla.css'


const carrito = [
    { id: 1, nombre: "Papas Gratinada",detalle:"Papas trozadas con queso",precio:900,cantidad:1},
    { id: 2, nombre: "Milanesa con papas",detalle:"Milanesa al plato con papas fritas",precio:2900,cantidad:1},
    { id: 3, nombre: "Salteado vegano",detalle:"Ensaladas con queso",precio:1500,cantidad:1},
  ];


const MiCarritoTabla = () => {
  // const [carritos,setCarritos] = useState([]);
  // const [carritos, setCarrito] = useState (carrito);
  // function disminuirPlato(id){
  //   console.log(id);
  //  setCarrito(carritos.filter((producto) => producto.id !== id)); 
  //   // carrito=carrito.filter((producto) => producto.id !== id)
  // }
  
  // const [carro, setCarro] = useState([]);

  // useEffect(() => {
  //   setplan(carrito.find((carro) => carro.id == carro.id));
  // }, []);

  function disminuirPlato(id){
    // console.log(producto);
    for (const producto of carrito) {
          // console.log(product.name);
          if(producto.id == id){
              if (producto.cantidad>1) {
                  producto.cantidad=producto-1;
              }else{
                  carrito.filter((producto)=> producto.id !== id);
                  console.log(carrito);
                  }
          }
    }
  
  }
  return carrito.length>0? (
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
          {carrito.map((producto) => (
            <tr key={producto.id}>
              <th>{producto.nombre}</th>
              <td>{producto.detalle}</td>
              <td>{producto.precio}</td>
              <td>
              <button className='botonDisminuir'>-</button>
                {producto.cantidad}
                <button className='botonAgregar'>+</button>
              </td>
              <td>
                  <button className='botonEliminar'>Eliminar</button>
              </td>
              <td>{producto.cantidad * producto.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
   </>
  ) : (<h2 className='tituloCarrito'>El carrito esta vacio</h2>);
}; 

export default MiCarritoTabla