import Slider from "./sliderCarrusel/slider";
import ElijaSuMenu from "./elijaSuMenu/ElijaSuMenu";
import GaleriaImagenes from "./galeriaDeImagenes/GaleriaDeImagenesVerticales";
import BotonWhatsapp from "../BotonWhatsapp/BotonWhatsapp.jsx";
function PaginaPrincipal() {
  return (
    <>
      <Slider />
      <ElijaSuMenu />
      <GaleriaImagenes />
      <BotonWhatsapp />
    </>
  );
}

export default PaginaPrincipal;
