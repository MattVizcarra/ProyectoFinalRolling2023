import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import MenuForm from './MenuForm';
import MenuTable from './MenuTable';

const categoriesOptions = [
  'Entradas',
  'Plato Principal',
  'Guarniciones',
  'Sopas y Cremas',
  'Pizzas',
  'Postres',
  'Bebidas',
  'Especiales de la Casa',
];

const FormMenu = () => {
  const [formDataMenu, setFormDataMenu] = useState({
    name: '',
    isAvailable: false,
    price: '',
    detail: '',
    category: '',
  });
  const [menus, setMenus] = useState([
    { id: 1234, name: 'Pastel de Papas', isAvailable: true, price: '1500', detail: 'Delicioso pastel con papas', category: 'Plato Principal' },
    { id: 154, name: '12 empanadas', isAvailable: true, price: '200', detail: 'Docena de empanadas variadas', category: 'Entradas' },
  ]);
  const [editingMenuId, setEditingMenuId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormDataMenu({ ...formDataMenu, [name]: newValue });
  };

  const handleSubmit = () => {
    if (formDataMenu.name && formDataMenu.price) {
      if (editingMenuId !== null) {
        const updatedMenus = menus.map((menu) =>
          menu.id === editingMenuId ? { ...menu, ...formDataMenu } : menu
        );
        setMenus(updatedMenus);
        setEditingMenuId(null);
      } else {
        const newMenu = { ...formDataMenu, id: Date.now() };
        setMenus([...menus, newMenu]);
      }
      setFormDataMenu({
        name: '',
        isAvailable: false,
        price: '',
        detail: '',
        category: '',
      });
      setShowForm(false);
    }
  };

  const handleEdit = (menuId) => {
    setEditingMenuId(menuId);
    const menuToEdit = menus.find((menu) => menu.id === menuId);
    setFormDataMenu({
      name: menuToEdit.name,
      isAvailable: menuToEdit.isAvailable,
      price: menuToEdit.price,
      detail: menuToEdit.detail,
      category: menuToEdit.category,
    });
    setShowForm(true);
  };

  const handleDelete = (menuId) => {
    const updatedMenus = menus.filter((menu) => menu.id !== menuId);
    setMenus(updatedMenus);
  };

  const handleAddMenu = () => {
    setShowForm(true);
  };

  const handleCancelEdit = () => {
    setEditingMenuId(null);
    setFormDataMenu({
      name: '',
      isAvailable: false,
      price: '',
      detail: '',
      category: '',
    });
    setShowForm(false);
  };

  const handleCancelAddMenu = () => {
    setShowForm(false);
  };

  return (
    <div>
      <h1>Formulario de Menús</h1>
      <div>
        {!showForm && (
          <Button variant="primary m-1" onClick={handleAddMenu}>Agregar Menú</Button>
        )}
      </div>
      {showForm && (
        <MenuForm
          formDataMenu={formDataMenu}
          showForm={showForm}
          editingMenuId={editingMenuId}
          categoriesOptions={categoriesOptions}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleCancelEdit={handleCancelEdit}
          handleCancelAddMenu={handleCancelAddMenu}
        />
      )}
      <MenuTable menus={menus} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  );
}

export default FormMenu;
