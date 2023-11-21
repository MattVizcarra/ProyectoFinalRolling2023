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
            <td>{user._id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.isActive ? 'Sí' : 'No'}</td>
            <td>*****</td>
            <td>{user.isAdmin ? 'Sí' : 'No'}</td>
            <td>
              <button className="btn btn-warning m-1" onClick={() => handleEdit(user._id)}>
                Editar
              </button>
              <button className="btn btn-danger m-1" onClick={() => handleDelete(user._id)}>
                Deshabilitar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserTable;
