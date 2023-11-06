import Slider from "./sliderCarrusel/slider";
import ElijaSuMenu from "./elijaSuMenu/ElijaSuMenu";
// import GaleriaImagenes from "./galeriaDeImagenes/galeriaDeImagenesVertical.jsx"
import GaleriaImagenes from "./galeriaDeImagenes/GaleriaDeImagenesVerticales";

function PaginaPrincipal(){

    return(
        <>
            <Slider/>
            <ElijaSuMenu/>
            <GaleriaImagenes/>
        </>
    );
}

export default PaginaPrincipal;