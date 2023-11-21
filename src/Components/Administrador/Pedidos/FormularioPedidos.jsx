import React from 'react';
import { Form,Col,Row, Button } from 'react-bootstrap';
import { FaSave } from "react-icons/fa";

function FormularioPedidos({ formDataPedidos, handleChange, handleSubmit }) {
  return (
    <div className="m-5">
      <Row className="justify-content-center">
      <Col style={{backgroundColor:"white", margin:40, padding:20, borderRadius:20}} xs={10} sm={10} md={6} lg={6}>
      <Form >
        <Form.Group controlId="formServido">
          <Form.Label>Estado del pedido:</Form.Label>
          <Form.Check
            type="checkbox"
            label="Servido"
            name="servido"
            checked={formDataPedidos.servido}
            onChange={handleChange}
            className="form-check"
          />
        </Form.Group>
        <Button variant="success" onClick={handleSubmit} className="m-1">
        <FaSave style={{fontSize: '25px'}} />
        </Button>
      </Form>
      </Col>
      </Row>
      
      
    </div>
  );
}

export default FormularioPedidos;
