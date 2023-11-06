import React, { useState } from 'react';
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

  const [users, setUsers] = useState([
    {
      id: 991,
      name: 'Lucas Gonzalo',
      email: 'luqita@gmail.com',
      isActive: true,
      password: '*****',
      isAdmin: false,
    },
    {
      id: 884,
      name: 'Ernesto',
      email: 'ernesto@gmail.com',
      isActive: true,
      password: '*****',
      isAdmin: false,
    },
  ]);

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.password) {
      if (formData.editingUserId !== null) {
        const updatedUsers = users.map((user) =>
          user.id === formData.editingUserId ? { ...user, ...formData } : user
        );
        setUsers(updatedUsers);
        setFormData({ ...formData, editingUserId: null });
      } else {
        const newUser = { ...formData, id: Date.now() };
        setUsers([...users, newUser]);
      }
      setFormData({
        name: '',
        email: '',
        isActive: false,
        password: '',
        isAdmin: false,
        editingUserId: null,
      });
      setIsFormVisible(false);
    }
  };

  const handleEdit = (userId) => {
    setFormData({ ...formData, editingUserId: userId });
    const userToEdit = users.find((user) => user.id === userId);
    setFormData({
      name: userToEdit.name,
      email: userToEdit.email,
      isActive: userToEdit.isActive,
      password: userToEdit.password,
      isAdmin: userToEdit.isAdmin,
    });
    setIsFormVisible(true);
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
  };

  const handleDelete = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  const handleAddUser = () => {
    setIsFormVisible(true);
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