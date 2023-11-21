import React from "react"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './galeriaDeImagenes.css'

import  { galeriaImagenesVerticales } from "./galeriaDeImagenesData.js"

function GaleriaImagenes(){

    return(
        <Container>
        <>
            <h1 className="titulosGaleriaVertical">Nuestros servicios siempre llevados a su mesa.</h1>
            <div className="row alineacionImagenes"> 
                {
                galeriaImagenesVerticales.map((imagenVertical)=>{
                                return (
                                        <>
                                        <div className="col col-3 mx-1 mb-4 " key = {imagenVertical.id}>
                                            <img src={imagenVertical.imgenUrl} alt={imagenVertical.descripcion} className="imgenesDecorado"/>
                                        </div>
                                        </>
                                        )
                             })
                }
            </div>
        </>
        </Container>
        )
}

export default GaleriaImagenes;