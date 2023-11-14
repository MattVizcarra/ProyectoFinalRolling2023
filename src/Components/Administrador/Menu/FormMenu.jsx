import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import MenuForm from './MenuForm';
import MenuTable from './MenuTable';

const apiUrl = 'https://restaurantedb.onrender.com/api/menus'; // Reemplaza con la URL real de tu API

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
    url: '',
  });
  const [menus, setMenus] = useState([]);
  const [editingMenuId, setEditingMenuId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Obtener la lista de menús al cargar el componente
    fetchMenus();
  }, []);

  const fetchMenus = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setMenus(data);
    } catch (error) {
      console.error('Error al obtener menús:', error);
    }
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormDataMenu({ ...formDataMenu, [name]: newValue });
    fetchMenus();
  };

  const createOrUpdateMenu = async () => {
    try {
      const method = editingMenuId !== null ? 'PUT' : 'POST';
      const url = editingMenuId !== null ? `${apiUrl}/${editingMenuId}` : apiUrl;

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataMenu),
      });

      const data = await response.json();

      if (editingMenuId !== null) {
        // Actualización exitosa
        const updatedMenus = menus.map((menu) =>
          menu.id === editingMenuId ? { ...menu, ...data.menu } : menu
        );
        setMenus(updatedMenus);
        setEditingMenuId(null);
        fetchMenus();
      } else {
        // Creación exitosa
        setMenus([...menus, data.menu]);
        fetchMenus();
      }

      // Limpiar el formulario
      setFormDataMenu({
        name: '',
        isAvailable: false,
        price: '',
        detail: '',
        category: '',
        url: '',
      });

      setShowForm(false);
    } catch (error) {
      console.error('Error al guardar menú:', error);
    }
  };

  const handleEdit = (menuId) => {
    setEditingMenuId(menuId);
    const menuToEdit = menus.find((menu) => menu._id === menuId);
  
    if (menuToEdit) {
      setFormDataMenu({
        name: menuToEdit.name,
        isAvailable: menuToEdit.isAvailable,
        price: menuToEdit.price,
        detail: menuToEdit.detail,
        category: menuToEdit.category,
        url: menuToEdit.url || '',
      });
      setShowForm(true);
    } else {
      console.error('Menú no encontrado:', menuId);
    }
  };

  const handleDelete = async (menuId) => {
    try {
      const response = await fetch(`${apiUrl}/${menuId}`, {
        method: 'DELETE',
      });

      if (response.status === 200) {
        // Eliminación exitosa
        const updatedMenus = menus.filter((menu) => menu.id !== menuId);
        setMenus(updatedMenus);
        fetchMenus();
      } else {
        console.error('Error al eliminar menú:', response.statusText);
      }
    } catch (error) {
      console.error('Error al eliminar menú:', error);
    }
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
      url: '',
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
          <Button variant="primary m-1" onClick={handleAddMenu}>
            Agregar Menú
          </Button>
        )}
      </div>
      {showForm && (
        <MenuForm
          formDataMenu={formDataMenu}
          showForm={showForm}
          editingMenuId={editingMenuId}
          categoriesOptions={categoriesOptions}
          handleChange={(e) => handleChange(e)}
          handleSubmit={() => createOrUpdateMenu()}
          handleCancelEdit={handleCancelEdit}
          handleCancelAddMenu={handleCancelAddMenu}
        />
      )}
      <MenuTable menus={menus} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  );
};

export default FormMenu;
