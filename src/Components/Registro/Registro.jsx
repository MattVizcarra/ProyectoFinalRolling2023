import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Imagen from "../../assets/Login/loginvector.png";
import ImageProfile from "../../assets/Login/profile1.jpg";
import { Spinner } from "react-bootstrap";
import "../../Components/Registro/Registro.css";

const Registro = () => {
  const navigate = useNavigate();

  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");

  const [errors, setErrors] = useState({
    nombres: "",
    apellidos: "",
    email: "",
    contraseña: "",
  });

  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      nombres: "",
      apellidos: "",
      email: "",
      contraseña: "",
    };

    if (!nombres) {
      newErrors.nombres = "Ingrese su nombre";
      isValid = false;
    }

    if (!apellidos) {
      newErrors.apellidos = "Ingrese su apellido";
      isValid = false;
    }

    if (!email) {
      newErrors.email = "Ingrese su correo electrónico";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Ingrese un correo electrónico válido";
      isValid = false;
    }

    if (!contraseña) {
      newErrors.contraseña = "Ingrese su contraseña";
      isValid = false;
    } else if (contraseña.length < 6) {
      newErrors.contraseña = "La contraseña debe tener al menos 6 caracteres";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const functAutenticacion = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);

      try {
        const response = await fetch(
          "https://restaurantedb.onrender.com/api/registro",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: `${nombres} ${apellidos}`,
              email,
              password: contraseña,
              isActive: true,
              isAdmin: false,
            }),
          }
        );

        if (response.ok) {
          const data = await response.json();

          // Set cookies
          document.cookie = `token=${data.token}; max-age=${3600}; path=/`;
          document.cookie = `isAdmin=${data.isAdmin}; max-age=${3600}; path=/`;
          document.cookie = `_id=${data._id}; max-age=${3600}; path=/`;

          alert("Usuario registrado correctamente");
          const nuevoUsuario = {
            name: `${nombres} ${apellidos}`,
            email,
            isAdmin: data.isAdmin,
          };
          console.log("Nuevo Usuario:", nuevoUsuario);

          navigate("/");
        } else {
          if (response.status === 409) {
            setServerError(
              "El correo electrónico ya está en uso. Por favor, utiliza otro."
            );
          } else {
            setServerError("Error al registrar usuario");
          }
        }
      } catch (error) {
        setServerError("Error al registrar usuario");
      } finally {
        setLoading(false);
      }
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
                <div>
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="cajatexto"
                    value={nombres}
                    onChange={(e) => setNombres(e.target.value)}
                  />
                  {errors.nombres && (
                    <p className="error-text">{errors.nombres}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Apellido"
                    className="cajatexto"
                    value={apellidos}
                    onChange={(e) => setApellidos(e.target.value)}
                  />
                  {errors.apellidos && (
                    <p className="error-text">{errors.apellidos}</p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="cajatexto"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <p className="error-text">{errors.email}</p>}
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Contraseña"
                    className="cajatexto"
                    value={contraseña}
                    onChange={(e) => setContraseña(e.target.value)}
                  />
                  {errors.contraseña && (
                    <p className="error-text">{errors.contraseña}</p>
                  )}
                </div>
                <div>
                  <button className="btnform" type="submit" disabled={loading}>
                    {loading ? (
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                    ) : (
                      "Crear Usuario"
                    )}
                  </button>
                  {serverError && <p className="error-text">{serverError}</p>}
                </div>
              </form>
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

export default Registro;
