import React, { useState, useEffect } from 'react';
import UserForm from './UserForm';
import UserTable from './UserTable';

const FormUsuariosContainer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    isActive: false,
    password: '',
    isAdmin: false,
    editingUserId: null,
  });

  const [users, setUsers] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('https://restaurantedb.onrender.com/api/usuarios');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async () => {
    try {
      const method = formData.editingUserId ? 'PUT' : 'POST';
      const url = formData.editingUserId
        ? `https://restaurantedb.onrender.com/api/usuarios/${formData.editingUserId}`
        : 'https://restaurantedb.onrender.com/api/usuarios';

      const emailExists = users.some(user => user.email === formData.email && user._id !== formData.editingUserId);

      if (emailExists) {
        setError('El correo electrónico ya está en uso. Por favor, utiliza otro.');
        return;
      }

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        fetchData();
        setFormData({
          name: '',
          email: '',
          isActive: false,
          password: '',
          isAdmin: false,
          editingUserId: null,
        });
        setIsFormVisible(false);
        setError('');
      } else {
        console.error('Error al enviar formulario:', response.statusText);
      }
    } catch (error) {
      console.error('Error al enviar formulario:', error);
    }
  };

  const handleEdit = (userId) => {
    const userToEdit = users.find((user) => user._id === userId);
    if (userToEdit) {
      setFormData({
        ...formData,
        editingUserId: userId,
        name: userToEdit.name,
        email: userToEdit.email,
        isActive: userToEdit.isActive,
        password: userToEdit.password,
        isAdmin: userToEdit.isAdmin,
      });
      setIsFormVisible(true);
      setError('');
    } else {
      console.error('Usuario no encontrado para editar');
    }
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      email: '',
      isActive: false,
      password: '',
      isAdmin: false,
      editingUserId: null,
    });
    setIsFormVisible(false);
    setError('');
  };

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`https://restaurantedb.onrender.com/api/usuarios/${userId}`, {
        method: 'PUT',  // Cambiar a un método PUT para actualizar
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isActive: false }),  // Enviar solo el cambio a isActive
      });
  
      if (response.ok) {
        fetchData();
        setError('');
      } else {
        console.error('Error al deshabilitar usuario:', response.statusText);
      }
    } catch (error) {
      console.error('Error al deshabilitar usuario:', error);
    }
  };

  const handleAddUser = () => {
    setIsFormVisible(true);
    setError('');
  };

  return (
    <div>
      <h1>Formulario de Usuarios</h1>
      {isFormVisible ? (
        <UserForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
          error={error}
        />
      ) : (
        <button className='btn btn-primary m-1' onClick={handleAddUser}>
          Agregar Usuario
        </button>
      )}
      <UserTable users={users} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  );
};

export default FormUsuariosContainer;
