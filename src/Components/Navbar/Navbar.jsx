import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";

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

    {/* <Routes>
      <Route path='/'/>
      <Route path='/Tarjetas' Component={Tarjetas}/> 
    </Routes> */}


</header>
    
    </>
  );
}

export default Navbar;