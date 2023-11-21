import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import '../Tarjetas/Tarjetas.css';

function Tarjetas() {

  const tarjetas = [{
    id: '12rwe',
    Titulo: 'Hamburguesa',
    url: 'https://yt3.googleusercontent.com/q1wUscR6Fq0sOhGX_b29O3LBO_iOuFedJg9XQXMQuXNvFGdtWnOzJzVDtQlJ7yP2Fg-JD1DBCg=s900-c-k-c0x00ffffff-no-rj',
    detalle: 'Hace tu pedido',
    precio:'$1100'
  },
  {
    id: '12r',
    Titulo: 'Milanesa Napolitana',
    url: 'https://www.gastrolabweb.com/u/fotografias/m/2021/4/13/f1280x720-11652_143327_5050.png',
    detalle: 'Hace tu pedido',
    precio:'$1300'
  }]


  return (
    <>
    <div className='Body'>
    <h1 className="LetraMenu">Nuestro Menú</h1>
        <h3 className="LetraMenu">hace tu pedido</h3>
    <div className='d-flex-container justify-content-center row'>
    <div className='Tarjetas d-flex justify-content-center col-xl-3 col-lg-10 col-md-10 col-sm-12' > {tarjetas.map(item =>
    <div style={{ margin: '1rem' }} key={item.id}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.url} style={{ height: '15rem' }} />
        <Card.Body>
        <Card.Title>{item.Titulo}</Card.Title>
        <Card.Text>
            {item.detalle}
        </Card.Text>
        <Card.Text>
            {item.precio}
        </Card.Text>
        <button className='BotonTarjeta' >Hacer Pedido</button>
        </Card.Body>
    </Card>
    </div>
    )} 
    </div>
    </div>
    </div>
    </>
    
    );
}

export default Tarjetas;