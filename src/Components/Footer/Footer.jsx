import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "../Footer/Footer.css";

function Footer() {
  const imageUrl =
    "https://th.bing.com/th/id/R.fbd95cf106ab3bcd3acb48263703790d?rik=xbEXpTHKreYWQQ&pid=ImgRaw&r=0";

  return (
    <>
      <div className="Footer">
        <Container fluid className="p-0">
          <Row
            style={{ backgroundColor: "#FFDEEA" }}
            className="Footer1 d-flex-container justify-content-center y-md-5"
          >
            {/* Caja 1 */}
            <div className="col1-Footer col-xl-3 col-lg-4 col-md-12 col-sm-12">
              <div className="container text-center">
                <Link to="/">
                  <img
                    src={imageUrl}
                    className="ImgFoter"
                    alt="Logo de la pagina"
                  />
                </Link>
                <h3 className="LetraFooter">ABRIMOS:</h3>
                <p className="LetraFooter">Lunes - Sabado</p>
                <p className="LetraFooter">12 - 21 hs.</p>
              </div>
            </div>

            {/* Caja 2 */}
            <div className="col1-Footer col-xl-3 col-lg-4 col-md-12 col-sm-12">
              <div className="container text-center">
                <h3 className="LetraFooterTitulo">¿Tienes Hambre?</h3>
                <br />
                <p className="LetraFooter">Te invitamos a hacer tu pedido</p>
                <p className="LetraFooter">Av. Buenos Aires 534</p>
                <p className="LetraFooter">Tucumán, Argentina</p>
              </div>
            </div>

            {/* Caja 3 */}
            <div className="col1-Footer col-xl-3 col-lg-4 col-md-12 col-sm-12">
              <div className="container text-center">
                <p className="LetraFooter">Tel: 3817697678</p>
                <p className="LetraFooter">Email: dscsk@gmail.com</p>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Footer;
