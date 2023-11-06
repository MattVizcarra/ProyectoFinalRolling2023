import React from 'react';
import { Form, Button } from 'react-bootstrap';

function FormularioPedidos({ formDataPedidos, handleChange, handleSubmit }) {
  return (
    <div className="m-5">
      <Form>
        <Form.Group controlId="formServido">
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
          Guardar
        </Button>
      </Form>
    </div>
  );
}

export default FormularioPedidos;
