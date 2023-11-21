import React from "react";
import '../Footer/Footer.css';

function Footer(){
return(


<>
    <div className="Footer  d-flex-container justify-content-center y-md-5 row">
        <div className="col1-Footer d-flex align-items-center col-xl-3 col-lg-10 col-md-10 col-sm-12">
            <div className="container text-center ">
            <h3 className="LetraFooter">ABRIMOS:</h3>
            <p className="LetraFooter">Lunes - Sabado</p>
            <p className="LetraFooter">12 - 21 hs.</p>
            </div>
        </div>
        <div className="col2-Footer d-flex align-items-center col-xl-3 col-lg-10 col-md-10 col-sm-12">
            <div className="container text-center">
            <h3 className="LetraFooterTitulo">¿Tienes Hambre?</h3>
            <p className="LetraFooter">Te invitamos a hacer tu pedido</p>
            <p className="LetraFooter">Av. Buenos Aires 534</p>
            <p className="LetraFooter">Tucumán, Argentina</p>
            </div>
        </div>
        <div className="col3-Footer d-flex align-items-center col-xl-3 col-lg-10 col-md-10 col-sm-12">
            <div className="container text-center">
            <p className="LetraFooter">Tel: 3817697678</p>
            <p className="LetraFooter">Email:dscsk@gmail.com</p>
            </div>
        </div>
    </div>
</>
)
}
export default Footer