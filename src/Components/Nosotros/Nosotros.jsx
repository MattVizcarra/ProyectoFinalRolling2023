import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import icono from '../../assets/Nosotros/icon.png'
import './nosotros.css'; 

const miembrosDelEquipo = [
  {
    nombre: 'Matias Vizcarra',
    descripcion: 'Gerente del local.',
    imagen: 'URL de la imagen 1',
  },
  {
    nombre: "Lucas D'Mayo",
    descripcion: 'Encargado de salón.',
    imagen: 'URL de la imagen 2',
  },
  {
    nombre: 'Franco Maidana',
    descripcion: 'Encargado de Cocina.',
    imagen: 'URL de la imagen 3',
  },
  {
    nombre: 'Juan Burgos',
    descripcion: 'Ayudante de cocina.',
    imagen: 'URL de la imagen 4',
  },
];

const Nosotros = () => {
  return (
    <Container className=''>
      <h1 className="titulosEquipo">Nuestro Equipo</h1>
      <Row className='team-row'>
        {miembrosDelEquipo.map((miembro, indice) => (
          <Col key={indice} lg={4} md={6} sm={12}>
            <Card className="tarjetaEquipo">
              <Card.Img variant="top" src={icono} alt={miembro.nombre} />
              <Card.Body>
                <Card.Title>{miembro.nombre}</Card.Title>
                <Card.Text>{miembro.descripcion}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Nosotros;