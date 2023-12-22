import React, { useState, useEffect, useRef } from "react";
import "./ElijaSuMenu.css";
import { Route, Routes } from "react-router-dom";
import Error404 from "../../Error404/Error404";
import { Link, useNavigate } from "react-router-dom";

const ElijaSuMenu = () => {
  const navigate = useNavigate();

  const handleMenuButtonClick = () => {
    navigate("/Tarjetas");

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="bg-warning tarjetaSeccion02 row mt-5 mb-5">
        <div className="col-xl-9 col-md-12 col-sm-12 alineacionBoton">
          <h1>Aqui podés elegir tu menu!</h1>
        </div>
        <div className="col-xl-3 col-md-12 col-sm-12 alineacionBoton mt-2 mb-2 ">
          <button
            className="btn btn-success px-5"
            onClick={handleMenuButtonClick}
          >
            Menú
          </button>
        </div>
      </div>
    </>
  );
};

export default ElijaSuMenu;
