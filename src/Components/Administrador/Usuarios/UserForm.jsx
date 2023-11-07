import React from 'react';
import { Form, Button } from 'react-bootstrap';

const UserForm = ({ formData, handleChange, handleSubmit, handleCancel }) => {
  return (
    <div className='m-5'>
      <Form>
        <Form.Group>
          <Form.Label>Nombre:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
          />
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="checkbox"
            name="isActive"
            checked={formData.isActive}
            onChange={handleChange}
            label="Activo"
            className="form-check"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Contraseña:</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
          />
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="checkbox"
            name="isAdmin"
            checked={formData.isAdmin}
            onChange={handleChange}
            label="Administrador"
            className="form-check"
          />
        </Form.Group>
        <Button className='btn btn-success m-1' onClick={handleSubmit}>
          {formData.editingUserId !== null ? 'Guardar' : 'Enviar'}
        </Button>
        <Button className='btn btn-secondary m-1' onClick={handleCancel}>
          Cancelar
        </Button>
      </Form>
    </div>
  );
};

export default UserForm;
