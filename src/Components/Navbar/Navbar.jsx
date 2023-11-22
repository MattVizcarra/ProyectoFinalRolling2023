import React from "react";
import "../Navbar/Navbar.css";
import Tarjetas from "../Tarjetas/Tarjetas";
import { Route, Routes } from 'react-router-dom';

import { Link } from "react-router-dom";
import Login from "../Acceso/Acceso";

function Navbar() {
return (
<>
<header>
<nav className="Navbar">
  <div>
    <ul className="PaginasNav">
      <Link to='/'><li>INICIO</li></Link>
      <Link to='/'><li>CONTACTO</li></Link>
      <Link to='/Tarjetas'><li>MENÚ</li></Link>
    </ul>
  </div>
  <Link to='/Acceso'><button className="BotonNav">Iniciar sesión</button></Link>
</nav>

  <Routes>
      <Route path='/'/>
      <Route path='/Tarjetas' Component={Tarjetas}/> 
      <Route path='/Acceso' Component={Login} />
    </Routes>


</header>
    
    </>
  );
}

export default Navbar;