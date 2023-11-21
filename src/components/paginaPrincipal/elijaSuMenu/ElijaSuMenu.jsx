import React, {useState, useEffect, useRef } from "react";

import './ElijaSuMenu.css';
import { Container } from "react-bootstrap";

const ElijaSuMenu = () =>{
return(
    <>
    {/* <Container> */}
    <div className="bg-warning tarjetaSeccion02 row mt-5 mb-5">
        <div className='col-xl-9 col-md-12 col-sm-12 alineacionBoton'>
            <h1>Aqui podés elegir tu menu!</h1>
        </div>
        <div className='col-xl-3 col-md-12 col-sm-12 alineacionBoton mt-2 mb-2 '>
            <button className="btn btn-success px-5">Menú</button>
        </div>
    </div>
    {/* <Container/> */}
    </>
)

}

export default ElijaSuMenu;