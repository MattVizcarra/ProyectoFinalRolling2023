// UserTable.jsx
import React from 'react';
import { Table } from 'react-bootstrap';

const UserTable = ({ users, handleEdit, handleDelete }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Activo</th>
          <th>Contraseña</th>
          <th>Administrador</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.isActive ? 'Sí' : 'No'}</td>
            <td>{user.password}</td>
            <td>{user.isAdmin ? 'Sí' : 'No'}</td>
            <td>
              <button className="btn btn-primary m-1" onClick={() => handleEdit(user.id)}>
                Editar
              </button>
              <button className="btn btn-danger m-1" onClick={() => handleDelete(user.id)}>
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserTable;
