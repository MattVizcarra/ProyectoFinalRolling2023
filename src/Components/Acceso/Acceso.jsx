import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageProfile from "../../assets/Login/profile1.jpg";
import Imagen from "../../assets/Login/loginvector.png";
import "../Acceso/Acceso.css";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const functAutenticacion = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;

    try {
      setLoading(true);

      const response = await fetch(
        "https://restaurantedb.onrender.com/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: correo, password: contraseña }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        alert("Inicio de sesión exitoso");

        // cookies
        document.cookie = `token=${data.token}; max-age=${3600}; path=/`;
        document.cookie = `isAdmin=${data.isAdmin}; max-age=${3600}; path=/`;
        document.cookie = `_id=${data._id}; max-age=${3600}; path=/`;

        navigate("/");
      } else if (response.status === 401) {
        alert("Correo o contraseña incorrectos");
      } else {
        alert("Error in API request. Please try again.");
      }
    } catch (error) {
      console.error("Error in API request:", error);
      alert("Error in API request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="padre">
            <div className="card card-body shadow-lg">
              <img src={ImageProfile} alt="" className="estilo-profile" />
              <form onSubmit={functAutenticacion}>
                <input
                  type="text"
                  placeholder="Ingresar Email"
                  className="cajatexto"
                  id="email"
                />
                <input
                  type="password"
                  placeholder="Ingresar Contraseña"
                  className="cajatexto"
                  id="password"
                />
                <button className="btnform" type="submit">
                  {loading ? (
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  ) : (
                    "Iniciar Sesión"
                  )}
                </button>
              </form>

              <h4 className="texto">
                ¿No tenés cuenta?
                <button className="btnswicth">
                  <Link to="/Registro" style={{ color: "inherit" }}>
                    Registrate
                  </Link>
                </button>
              </h4>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <img src={Imagen} alt="" className="tamaño-imagen" />
        </div>
      </div>
    </div>
  );
};

export default Login;
