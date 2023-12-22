import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import "./galeriaDeImagenes.css";

import { galeriaImagenesVerticales } from "./galeriaDeImagenesData.js";

function GaleriaImagenes() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleImageClick = (category) => {
    setSelectedCategory(category);
    navigate("/Tarjetas", { state: { selectedCategory: category } });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <>
        <h1 className="titulosGaleriaVertical">
          Tambien podes elegir por categoria:
        </h1>
        <div className="row alineacionImagenes">
          {galeriaImagenesVerticales.map((imagenVertical) => {
            return (
              <div
                className="col col-3 mx-1 mb-4"
                key={imagenVertical.id}
                onClick={() => handleImageClick(imagenVertical.descripcion)}
              >
                <img
                  src={imagenVertical.imgenUrl}
                  alt={imagenVertical.descripcion}
                  className="imgenesDecorado"
                />
              </div>
            );
          })}
        </div>
      </>
    </Container>
  );
}

export default GaleriaImagenes;
