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
            <div className="row alineacionImagenes"> 
                {
                galeriaImagenesVerticales.map((imagenVertical)=>{
                                return (
                                        <>
                                        <div className="col-3 mx-2 mb-4 imagenDescriopcion">
                                            <li key = {imagenVertical.id}>
                                                <img src={imagenVertical.imgenUrl} alt={imagenVertical.descripcion} className="imgenesDecorado"/>
                                            </li>
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