import React, { useState, useEffect, useCallback } from "react";
import { Navbar, Nav, Button, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../Navbar/Navbar.css";

function NavigationBar() {
  const imageUrl =
    "https://th.bing.com/th/id/R.fbd95cf106ab3bcd3acb48263703790d?rik=xbEXpTHKreYWQQ&pid=ImgRaw&r=0";

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      const decodedValue = decodeURIComponent(parts.pop().split(";").shift());
      return decodedValue === "undefined" ? null : decodedValue;
    }
    return null;
  };

  const [isLoggedIn, setIsLoggedIn] = useState(!!getCookie("token"));
  const [isAdmin, setIsAdmin] = useState(JSON.parse(getCookie("isAdmin")));
  const [renderKey, setRenderKey] = useState(0);

  const navigate = useNavigate();

  const handleButtonClick = useCallback(() => {
    setRenderKey((prevKey) => prevKey + 1);
  }, []);

  const handleLogout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
      "isAdmin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    setIsLoggedIn(false);
    setIsAdmin(false);

    handleButtonClick();

    navigate("/");
  };

  useEffect(() => {
    setIsLoggedIn(!!getCookie("token"));
    setIsAdmin(JSON.parse(getCookie("isAdmin")));
  }, [renderKey, getCookie]);

  return (
    <>
      <Navbar className="px-3 text-white" expand="sm">
        <Navbar.Brand as={Link} to="/">
          <Image src={imageUrl} className="ImgNavbar" alt="Logo de la pagina" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto flex-grow-1 letrasnav">
            <Nav.Item>
              <Nav.Link
                className="nav-link-hover text-white"
                as={Link}
                to="/"
                onClick={handleButtonClick}
              >
                INICIO
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="nav-link-hover text-white"
                as={Link}
                to="/Nosotros"
                onClick={handleButtonClick}
              >
                NOSOTROS
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="nav-link-hover text-white"
                as={Link}
                to="/Tarjetas"
                onClick={handleButtonClick}
              >
                MENÚ
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="ml-auto">
            {isLoggedIn ? (
              <>
                <Nav.Item>
                  <Nav.Link
                    className="nav-link-hover text-white"
                    as={Link}
                    to="/Carrito"
                    onClick={handleButtonClick}
                  >
                    Carrito
                  </Nav.Link>
                </Nav.Item>
                {isAdmin && (
                  <Nav.Item>
                    <Nav.Link
                      className="nav-link-hover text-white"
                      as={Link}
                      to="/Abm"
                      onClick={handleButtonClick}
                    >
                      CRUD
                    </Nav.Link>
                  </Nav.Item>
                )}
                <Nav.Item>
                  <Nav.Link
                    className="nav-link-hover text-white"
                    onClick={handleLogout}
                  >
                    Desloguearse
                  </Nav.Link>
                </Nav.Item>
              </>
            ) : (
              <Nav.Item>
                <Nav.Link
                  className="nav-link-hover text-white"
                  as={Link}
                  to="/Acceso"
                  onClick={handleButtonClick}
                >
                  INICIAR SESIÓN
                </Nav.Link>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavigationBar;
