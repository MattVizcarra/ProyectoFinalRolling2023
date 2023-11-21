import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";

const MenuTable = ({ menus, handleEdit, handleDelete }) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Disponible</th>
        <th>Precio</th>
        <th>Detalle</th>
        <th>Categoría</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {menus.map((menu) => (
        <tr key={menu._id}>
          <td>{menu._id}</td>
          <td>{menu.name}</td>
          <td>{menu.isAvailable ? 'Sí' : 'No'}</td>
          <td>{menu.price}</td>
          <td>{menu.detail}</td>
          <td>{menu.category}</td>
          <td>
            <Button variant="warning m-1" onClick={() => handleEdit(menu._id)}>
            <FaEdit style={{fontSize: '25px'}} />
              </Button>
            <Button variant="danger m-1" onClick={() => handleDelete(menu._id)}>
            <FaDeleteLeft style={{fontSize: '25px'}} />
              </Button>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default MenuTable;