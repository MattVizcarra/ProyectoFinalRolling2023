import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import "./Tarjetas.css";
import { useLocation } from "react-router-dom";

const Tarjetas = () => {
  const location = useLocation();

  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [agregandoAlCarritoId, setAgregandoAlCarritoId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(
    location.state?.selectedCategory || null
  );

  const filterByCategory = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    fetch("https://restaurantedb.onrender.com/api/menus")
      .then((response) => response.json())
      .then((data) => {
        setMenuItems(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching menu items:", error);
        alert("Error al cargar el menú. Inténtalo de nuevo más tarde.");
        setLoading(false);
      });
  }, []);

  const obtenerUsuarioId = () => {
    const cookies = document.cookie.split(";");

    for (const cookie of cookies) {
      const [nombre, valor] = cookie.trim().split("=");

      if (nombre === "_id") {
        return valor;
      }
    }

    return null;
  };

  const agregarAlCarrito = async (menuId) => {
    try {
      const usuarioId = obtenerUsuarioId();
      if (!usuarioId) {
        console.error("No se puede obtener el ID del usuario");
        alert(
          "Debe crear una cuenta. Si ya está registrado, acceda con sus credenciales."
        );
        return;
      }

      setAgregandoAlCarritoId(menuId);

      const response = await fetch(
        "https://restaurantedb.onrender.com/api/carrito/agregar",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ usuarioId, menuId }),
        }
      );

      if (response.ok) {
        alert("Producto agregado al carrito con éxito");
      } else {
        console.error("Error al agregar al carrito:", response.statusText);
        alert(
          "Error al agregar el producto al carrito. Inténtalo de nuevo más tarde."
        );
      }
    } catch (error) {
      console.error("Error en la solicitud al agregar al carrito:", error);
      alert(
        "Error en la solicitud al agregar el producto al carrito. Inténtalo de nuevo más tarde."
      );
    } finally {
      setAgregandoAlCarritoId(null);
    }
  };

  return (
    <>
      <div className="Body">
        <div className="LetraMenu">
          <h1>Nuestro Menú</h1>
          <h3>¡Hacé tu pedido!</h3>
        </div>

        {loading ? (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <Container>
            <div className="category-buttons">
              <Row className="justify-content-center">
                {["Bebidas", "Entradas", "Plato Principal", "Postres"].map(
                  (category) => (
                    <Col key={category} xs="auto">
                      <button
                        className={` m-1 btn btn-light ${
                          selectedCategory === category ? "active" : ""
                        }`}
                        onClick={() => filterByCategory(category)}
                      >
                        {category}
                      </button>
                    </Col>
                  )
                )}
                <Col xs="auto">
                  <button
                    className="m-1 btn btn-light"
                    onClick={() => filterByCategory(null)}
                  >
                    Todos
                  </button>
                </Col>
              </Row>
            </div>
            <Row className="d-flex-container justify-content-center">
              {menuItems
                .filter(
                  (item) =>
                    (!selectedCategory || item.category === selectedCategory) &&
                    item.isAvailable
                )
                .map((item) => (
                  <Col
                    key={item._id}
                    xl={4}
                    lg={4}
                    md={6}
                    sm={12}
                    className="my-4 d-flex justify-content-center"
                  >
                    <div style={{ margin: "1rem", height: "100%" }}>
                      <Card style={{ width: "18rem", height: "100%" }}>
                        <Card.Img
                          variant="top"
                          src={item.url}
                          alt={item.name}
                          style={{ height: "15rem" }}
                        />
                        <Card.Body
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "100%",
                          }}
                        >
                          <div>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>{item.detail}</Card.Text>
                            <Card.Text style={{ textAlign: "center" }}>
                              <strong>{`$${item.price}`}</strong>
                            </Card.Text>
                          </div>
                          <button
                            className="BotonTarjeta"
                            onClick={() => agregarAlCarrito(item._id)}
                            disabled={agregandoAlCarritoId === item._id}
                          >
                            {agregandoAlCarritoId === item._id ? (
                              <Spinner animation="border" size="sm" />
                            ) : (
                              "Agregar al carrito"
                            )}
                          </button>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
                ))}
            </Row>
          </Container>
        )}

        <div className="d-flex-container justify-content-center "></div>
      </div>
    </>
  );
};

export default Tarjetas;
