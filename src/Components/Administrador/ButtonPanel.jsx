import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormMenu from './Menu/FormMenu';
import FormUsuariosContainer from './Usuarios/FormUsuarios';
import FormPedidosContainer from './Pedidos/FormPedidosContainer';

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
    <div className="mt-4">
      <div className="container d-flex align-items-center justify-content-center">
        <button onClick={handleUsuariosClick} type="button" className="btn btn-primary mx-2">
          Usuarios
        </button>
        <button onClick={handleMenuClick} type="button" className="btn btn-secondary mx-2">
          Menús
        </button>
        <button onClick={handlePedidosClick} type="button" className="btn btn-success mx-2">
          Pedidos
        </button>
      </div>

      <div className=" container d-flex align-items-center justify-content-center">
        <div className="col">
          {showFormUsuarios && <FormUsuariosContainer />}
          {showFormMenu && <FormMenu />}
          {showFormPedidos && <FormPedidosContainer />}
        </div>
      </div>
    </div>
  );
};

export default ButtonPanel;
