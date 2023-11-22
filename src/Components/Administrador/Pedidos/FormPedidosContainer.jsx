import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import FormularioPedidos from './FormularioPedidos';
import TablaPedidos from './TablaPedidos';

const apiUrl = 'https://restaurantedb.onrender.com/api/pedidos';

const FormPedidosContainer = () => {
  const [formDataPedidos, setFormDataPedidos] = useState({
    id: '',
    usuario: '',
    fecha: '',
    menu: '',
    servido: false,
  });
  const [pedidos, setPedidos] = useState([]);
  const [editingPedidoId, setEditingPedidoId] = useState(null);

  useEffect(() => {
    // Obtener la lista de pedidos al cargar el componente
    fetchPedidos();
  }, []);

  const fetchPedidos = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setPedidos(data);
    } catch (error) {
      console.error('Error al obtener pedidos:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormDataPedidos({ ...formDataPedidos, [name]: newValue });
  };

  const handleSubmit = async () => {
    try {
      const method = editingPedidoId !== null ? 'PUT' : 'POST';
      const url = editingPedidoId !== null ? `${apiUrl}/${editingPedidoId}` : apiUrl;

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataPedidos),
      });

      const data = await response.json();

      if (editingPedidoId !== null) {
        // Actualización exitosa
        const updatedPedidos = pedidos.map((pedido) =>
          pedido._id === editingPedidoId ? { ...pedido, ...data.pedido } : pedido
        );
        setPedidos(updatedPedidos);
        setEditingPedidoId(null);
        fetchPedidos();
      } else {
        // Creación exitosa
        setPedidos([...pedidos, data.pedido]);
        fetchPedidos();
      }

      // Limpiar el formulario
      setFormDataPedidos({
        id: '',
        usuario: '',
        fecha: '',
        menu: '',
        servido: false,
      });
    } catch (error) {
      console.error('Error al guardar pedido:', error);
    }
  };

  const handleEdit = (pedidoId) => {
    console.log('Editando pedido con ID:', pedidoId);
    setEditingPedidoId(pedidoId);
  
    // Llamada a la API para obtener los detalles del pedido
    fetch(`${apiUrl}/${pedidoId}`)
      
      .then((pedidoToEdit) => {
        const { id, usuario, fecha, menu, servido } = pedidoToEdit;
        setFormDataPedidos({
          id: id,
          usuario,
          fecha,
          menu,
          servido,
        });
      })
      .catch((error) => console.error('Error al obtener los detalles del pedido2:', error));
  };

  const handleDelete = async (pedidoId) => {
    try {
      const response = await fetch(`${apiUrl}/${pedidoId}`, {
        method: 'DELETE',
      });

      if (response.status === 200) {
        // Eliminación exitosa
        const updatedPedidos = pedidos.filter((pedido) => pedido._id !== pedidoId);
        setPedidos(updatedPedidos);
        //fetchPedidos();
      } else {
        console.error('Error al eliminar pedido:', response.statusText);
      }
    } catch (error) {
      console.error('Error al eliminar pedido:', error);
    }
  };

  return (
    <div>
      <div>
        <h1 className="tituloform">Formulario de Pedidos</h1>
      </div>
      {editingPedidoId !== null && (
        <FormularioPedidos
          formDataPedidos={formDataPedidos}
          handleChange={(e) => handleChange(e)}
          handleSubmit={() => handleSubmit()}
        />
      )}
      <TablaPedidos
        pedidos={pedidos}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default FormPedidosContainer;
