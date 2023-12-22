import React from "react";
import "./BotonWhatsapp.css";
import WhatsappImagen from "../../assets/ImagenesWhatsapp/logoWhatsapp.png";

const BotonWhatsapp = () => {
  const whatsappLink = "https://wa.me/";
  return (
    <>
      <div className="whatsappBotonEstilo">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <img src={WhatsappImagen} alt="logo de WhatsApp" />
        </a>
      </div>
    </>
  );
};

export default BotonWhatsapp;
