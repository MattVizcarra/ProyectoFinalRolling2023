import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import '../Tarjetas/Tarjetas.css';

function Tarjetas() {
  const [tarjetas, setTarjetas] = useState([]);

  useEffect(() => {
    // Hacer la solicitud a la API para obtener datos del menú
    fetch('https://restaurantedb.onrender.com/api/menus')
      .then(response => response.json())
      .then(data => setTarjetas(data))
      .catch(error => console.error('Error al obtener datos del menú', error));
  }, []);

  return (
    <>
      <div className='Body'>
        <h1 className="LetraMenu">Nuestro Menú</h1>
        <h3 className="LetraMenu">Hace tu pedido</h3>
        <div className='d-flex-container justify-content-center row'>
          <div className='Tarjetas d-flex justify-content-center col-xl-3 col-lg-10 col-md-10 col-sm-12'>
            {tarjetas.map(item => (
              <div style={{ margin: '1rem' }} key={item._id}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.url} style={{ height: '15rem' }} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      {item.detail}
                    </Card.Text>
                    <Card.Text>
                      {`$${item.price}`}
                    </Card.Text>
                    <button className='BotonTarjeta' >Hacer Pedido</button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Tarjetas;
