import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";

function TablaPedidos({ pedidos, handleEdit, handleDelete }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Usuario</th>
          <th>Fecha</th>
          <th>Menu</th>
          <th>Servido</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {pedidos.map((pedido) => (
          <tr key={pedido._id}>
            <td>{pedido._id}</td>
            <td>{pedido.usuario}</td>
            <td>{pedido.fecha}</td>
            <td>{pedido.menu}</td>
            <td>{pedido.servido ? 'Sí' : 'No'}</td>
            <td>
              <Button variant="warning m-1" onClick={() => handleEdit(pedido._id)}>
              <FaEdit style={{fontSize: '25px'}} />
              </Button>
              <Button variant="danger m-1" onClick={() => handleDelete(pedido._id)}>
              <FaDeleteLeft style={{fontSize: '25px'}} />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TablaPedidos;
