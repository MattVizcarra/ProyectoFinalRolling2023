import React, {useState, useEffect, useRef } from "react";
import './ElijaSuMenu.css';
import { Route, Routes } from 'react-router-dom';
import { Link } from "react-router-dom";
import Error404 from "../../Error404/Error404";


// import { Container } from "react-bootstrap";

const ElijaSuMenu = () =>{
return(
    <>
    {/* <Container> */}
    <div className="bg-warning tarjetaSeccion02 row mt-5 mb-5">
        <div className='col-xl-9 col-md-12 col-sm-12 alineacionBoton'>
            <h1>Aqui podés elegir tu menu!</h1>
        </div>
        <div className='col-xl-3 col-md-12 col-sm-12 alineacionBoton mt-2 mb-2 '>
            <Link to='/Error404'><button className="btn btn-success px-5">Menú</button></Link>
        </div>
    </div>
    <Routes>
        <Route path='/'/>
        <Route path='/Error404' Component={Error404}/>
    </Routes>
    {/* <Container/> */}
    </>
)

}

export default ElijaSuMenu;