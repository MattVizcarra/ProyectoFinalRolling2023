import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../Tarjetas/Tarjetas.css';

function Tarjetas() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Fetch menu items from your API
    fetch('https://restaurantedb.onrender.com/api/menus') // Adjust the API endpoint as needed
      .then(response => response.json())
      .then(data => setMenuItems(data))
      .catch(error => console.error('Error fetching menu items:', error));
  }, []);

  return (
    <>
      <div className='Body'>
        <h1 className="LetraMenu">Nuestro Menú</h1>
        <h3 className="LetraMenu">hace tu pedido</h3>
        <Container>
          <Row className='d-flex-container justify-content-center'>
            <Col className='Tarjetas d-flex justify-content-center col-xl-3 col-lg-10 col-md-10 col-sm-12'>
              {menuItems.map(item =>
                <div style={{ margin: '1rem' }} key={item._id}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.url} alt={item.name} style={{ height: '15rem' }} />
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
              )}
            </Col>
          </Row>
        </Container>
        <div className='d-flex-container justify-content-center '>

        </div>
      </div>
    </>
  );
}

export default Tarjetas;
