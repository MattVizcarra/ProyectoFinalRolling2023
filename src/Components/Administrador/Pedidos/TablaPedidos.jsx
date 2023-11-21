import React from 'react';
import { Table, Button } from 'react-bootstrap';

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
          <tr key={pedido.id}>
            <td>{pedido.id}</td>
            <td>{pedido.usuario}</td>
            <td>{pedido.fecha}</td>
            <td>{pedido.menu}</td>
            <td>{pedido.servido ? 'Sí' : 'No'}</td>
            <td>
              <Button variant="warning m-1" onClick={() => handleEdit(pedido.id)}>
                Editar
              </Button>
              <Button variant="danger m-1" onClick={() => handleDelete(pedido.id)}>
                Eliminar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TablaPedidos;
