import React from "react";
import "../Navbar/Navbar.css";
import Tarjetas from "../Tarjetas/Tarjetas";
import { Route, Routes } from 'react-router-dom'
import { Link } from "react-router-dom";

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
  <button className="BotonNav">Iniciar sesión</button>
</nav>

    <Routes>
      <Route path='/'/>
      <Route path='/Tarjetas' Component={Tarjetas}/> 
    </Routes>


</header>
    
    </>
  );
}

export default Navbar;