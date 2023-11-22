import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormMenu from './Menu/FormMenu';
import FormUsuariosContainer from './Usuarios/FormUsuarios';
import FormPedidosContainer from './Pedidos/FormPedidosContainer';
import './ButtonPanel.css';

const ButtonPanel = () => {
  const [showFormUsuarios, setShowFormUsuarios] = useState(true);
  const [showFormMenu, setShowFormMenu] = useState(false);
  const [showFormPedidos, setShowFormPedidos] = useState(false);

  const handleUsuariosClick = () => {
    setShowFormUsuarios(true);
    setShowFormMenu(false);
    setShowFormPedidos(false);
  };

  const handleMenuClick = () => {
    setShowFormMenu(true);
    setShowFormUsuarios(false);
    setShowFormPedidos(false);
  };

  const handlePedidosClick = () => {
    setShowFormPedidos(true);
    setShowFormUsuarios(false);
    setShowFormMenu(false);
  };

  return (
    <div className="button-panel">
      <div className="container-buttons">
        <button onClick={handleUsuariosClick} type="button" className="btn btn-warning mx-3 buttons btn-lg">
          Usuarios
        </button>
        <button onClick={handleMenuClick} type="button" className="btn btn-warning mx-3 buttons btn-lg">
          Menús
        </button>
        <button onClick={handlePedidosClick} type="button" className="btn btn-warning mx-3 buttons btn-lg">
          Pedidos
        </button>
      </div>

      <div className="container-form">
        <div className="form-col">
          {showFormUsuarios && <FormUsuariosContainer />}
          {showFormMenu && <FormMenu />}
          {showFormPedidos && <FormPedidosContainer />}
        </div>
      </div>
    </div>
  );
};

export default ButtonPanel;
