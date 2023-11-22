import React from "react";
import "../Navbar/Navbar.css";
import Tarjetas from "../Tarjetas/Tarjetas";
 import Login from "../Acceso/Acceso";
import Nosotros from "../Nosotros/Nosotros";
import { Route, Routes } from 'react-router-dom';

import { Link } from "react-router-dom";


function Navbar() {
  const imageUrl = 'https://th.bing.com/th/id/R.fbd95cf106ab3bcd3acb48263703790d?rik=xbEXpTHKreYWQQ&pid=ImgRaw&r=0'
return (
<>
<header>
<nav className="Navbar">
  <div>
    <ul className="PaginasNav">
    <Link to='/'><img src={imageUrl} className='ImgNavbar' alt="Logo de la pagina" /></Link>
      <Link to='/'><li>INICIO</li></Link>
      <Link to='/Nosotros'><li>NOSOTROS</li></Link>
      <Link to='/Tarjetas'><li>MENÚ</li></Link>
    </ul>
  </div>
  <Link to='/Acceso'><button className="BotonNav">Iniciar sesión</button></Link>
</nav>

  <Routes>
      <Route path='/'/>
      <Route path='/Tarjetas' Component={Tarjetas}/> 
      <Route path='/Acceso' Component={Login} />
      <Route path='/Nosotros' Component={Nosotros}/>
    </Routes>


</header>
    
    </>
  );
}

export default Navbar;