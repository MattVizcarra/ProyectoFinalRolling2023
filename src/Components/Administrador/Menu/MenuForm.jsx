import React, { useState } from 'react';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import handleChange from "./FormMenu";

const MenuForm = ({
  formDataMenu,
  showForm,
  editingMenuId,
  categoriesOptions,
  handleChange,
  handleSubmit,
  handleCancelEdit,
  handleCancelAddMenu,
}) => {
  const [formErrors, setFormErrors] = useState({
    name: '',
    price: '',
    detail: '',
    category: '',
    url: '', // Agregamos el campo URL en formErrors
  });

  const validateForm = () => {
    const errors = {
      name: (formDataMenu.name.length >= 6 && formDataMenu.name.length <= 50) ? '' : 'El nombre debe tener entre 6 y 50 caracteres',
      price: formDataMenu.price ? '' : 'El precio es obligatorio',
      category: formDataMenu.category ? '' : 'Seleccione una categoría',
      detail: (formDataMenu.detail.length >= 10 && formDataMenu.detail.length <= 200) ? '' : 'debe tener entre 10 y 200 caracteres',
      url: (formDataMenu.url && isValidUrl(formDataMenu.url)) ? '' : 'Ingrese una URL válida', // Validación de URL
    };

    setFormErrors(errors);

    return Object.values(errors).every((error) => error === '');
  };

  const isValidUrl = (url) => {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
  };

  const handleFormSubmit = () => {
    if (validateForm()) {
      handleSubmit();
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={10} sm={10} md={6} lg={6}>
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
              <small className="text-danger">{formErrors.name}</small>
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
                type="Number"
                name="price"
                placeholder="Precio"
                value={formDataMenu.price}
                onChange={handleChange}
              />
              <small className="text-danger">{formErrors.price}</small>
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
              <small className="text-danger">{formErrors.detail}</small>
            </Form.Group>
            <Form.Group>
              <Form.Label>URL:</Form.Label>
              <Form.Control
                type="text"
                name="url"
                placeholder="URL"
                value={formDataMenu.url}
                onChange={handleChange}
              />
              <small className="text-danger">{formErrors.url}</small>
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
              <small className="text-danger">{formErrors.category}</small>
            </Form.Group>
            <Button variant="success" onClick={handleFormSubmit}>
              {editingMenuId !== null ? 'Guardar' : 'Enviar'}
            </Button>
            {editingMenuId !== null && (
              <Button variant="secondary m-1" onClick={handleCancelEdit}>Cancelar</Button>
            )}
            {editingMenuId === null && (
              <Button variant="secondary m-1" onClick={handleCancelAddMenu}>Cancelar</Button>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default MenuForm;