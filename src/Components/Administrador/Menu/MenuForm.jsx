import React from 'react';
import { Form, Button } from 'react-bootstrap';

const MenuForm = ({
  formDataMenu,
  showForm,
  editingMenuId,
  categoriesOptions,
  handleChange,
  handleSubmit,
  handleCancelEdit,
  handleCancelAddMenu,
}) => (
  <div className='m-5'>
    <Form>
      <Form.Group>
        <Form.Label>Nombre:</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Nombre"
          value={formDataMenu.name}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Check
          type="checkbox"
          name="isAvailable"
          checked={formDataMenu.isAvailable}
          onChange={handleChange}
          label="Disponible"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Precio:</Form.Label>
        <Form.Control
          type="number"
          name="price"
          placeholder="Precio"
          value={formDataMenu.price}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Detalle:</Form.Label>
        <Form.Control
          type="text"
          name="detail"
          placeholder="Detalle"
          value={formDataMenu.detail}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Categoría:</Form.Label>
        <Form.Control
          as="select"
          name="category"
          value={formDataMenu.category}
          onChange={handleChange}
        >
          <option value="">Seleccione una categoría</option>
          {categoriesOptions.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Button variant="success" onClick={handleSubmit}>
        {editingMenuId !== null ? 'Guardar' : 'Enviar'}
      </Button>
      {editingMenuId !== null && (
        <Button variant="secondary m-1" onClick={handleCancelEdit}>Cancelar</Button>
      )}
      {editingMenuId === null && (
        <Button variant="secondary m-1" onClick={handleCancelAddMenu}>Cancelar</Button>
      )}
    </Form>
  </div>
);

export default MenuForm;