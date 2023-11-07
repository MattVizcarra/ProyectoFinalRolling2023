import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import FormularioPedidos from './FormularioPedidos';
import TablaPedidos from './TablaPedidos';

function FormPedidosContainer() {
  const [formDataPedidos, setFormDataPedidos] = useState({
    id: '',
    usuario: '',
    fecha: '',
    menu: '',
    servido: false,
  });

  const [pedidos, setPedidos] = useState([
    { id: 556, usuario: 'Lucas Gonzalo', fecha: '2023-10-23', menu: 'Papitas', servido: true },
    { id: 446, usuario: 'Ernesto', fecha: '2023-10-22', menu: 'Asado', servido: false },
  ]);

  const [editingPedidoId, setEditingPedidoId] = useState(null);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setFormDataPedidos({ ...formDataPedidos, [name]: checked });
  };

  const handleSubmit = () => {
    if (formDataPedidos.usuario && formDataPedidos.fecha && formDataPedidos.menu) {
      if (editingPedidoId !== null) {
        const updatedPedidos = pedidos.map((pedido) =>
          pedido.id === editingPedidoId ? { ...pedido, servido: formDataPedidos.servido } : pedido
        );
        setPedidos(updatedPedidos);
        setEditingPedidoId(null);
      } else {
        const newPedido = { ...formDataPedidos, id: Date.now() };
        setPedidos([...pedidos, newPedido]);
      }
      setFormDataPedidos({ id: '', usuario: '', fecha: '', menu: '', servido: false });
    }
  };

  const handleEdit = (pedidoId) => {
    setEditingPedidoId(pedidoId);
    const pedidoToEdit = pedidos.find((pedido) => pedido.id === pedidoId);
    setFormDataPedidos({
      id: pedidoToEdit.id,
      usuario: pedidoToEdit.usuario,
      fecha: pedidoToEdit.fecha,
      menu: pedidoToEdit.menu,
      servido: pedidoToEdit.servido,
    });
  };

  const handleDelete = (pedidoId) => {
    const updatedPedidos = pedidos.filter((pedido) => pedido.id !== pedidoId);
    setPedidos(updatedPedidos);
  };

  return (
    <div>
      <div>
        <h1>Formulario de Pedidos</h1>
      </div>
      {editingPedidoId !== null && (
        <FormularioPedidos
          formDataPedidos={formDataPedidos}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
      <TablaPedidos
        pedidos={pedidos}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default FormPedidosContainer;
