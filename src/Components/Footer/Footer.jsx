import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Footer/Footer.css';


function Footer() {

  return (
<>
<div className='Footer'>
    <Container>
      <Row className='Footer1 d-flex-container justify-content-center  y-md-5'>
        <Col className='col1-Footer  col-xl-3 col-lg-10 col-md-10 col-sm-12'>
            <div className="container text-center">
            <h3 className="LetraFooter">ABRIMOS:</h3>
            <p className="LetraFooter">Lunes - Sabado</p>
            <p className="LetraFooter">12 - 21 hs.</p></div>
            </Col>
        <Col className='col1-Footer  col-xl-3 col-lg-10 col-md-10 col-sm-12'>
            <div className="container text-center">
            <h3 className="LetraFooterTitulo">¿Tienes Hambre?</h3><br />
            <p className="LetraFooter">Te invitamos a hacer tu pedido</p>
            <p className="LetraFooter">Av. Buenos Aires 534</p>
            <p className="LetraFooter">Tucumán, Argentina</p></div>
        </Col>
        <Col className='col1-Footer  col-xl-3 col-lg-10 col-md-10 col-sm-12'>
            <div className="container text-center">
            <p className="LetraFooter">Tel: 3817697678</p>
            <p className="LetraFooter">Email:dscsk@gmail.com</p></div>
        </Col>
        
      </Row>
    </Container>
</div>
</>
  );
}

export default Footer