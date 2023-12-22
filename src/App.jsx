import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import PaginaPrincipal from "./Components/paginaPrincipal/paginaPrincipal";
import Nosotros from "./Components/Nosotros/Nosotros";
import Tarjetas from "./Components/Tarjetas/Tarjetas";
import MiCarritoTabla from "./Components/MiCarrito/MiCarritoTabla";
import Login from "./Components/Acceso/Acceso";
import ButtonPanel from "./Components/Administrador/ButtonPanel";
import Registro from "./Components/Registro/Registro";
import withAuth from "./withAuth";
import Error404 from "./Components/Error404/Error404";
import "./App.css";

const ProtectedABM = withAuth(ButtonPanel);

function App() {
  return (
    <>
      <Router>
        <main>
          <Navbar />
          <Routes>
            <Route path="/" element={<PaginaPrincipal />} />
            <Route path="/Nosotros" element={<Nosotros />} />
            <Route path="/Tarjetas" element={<Tarjetas />} />
            <Route path="/Carrito" element={<MiCarritoTabla />} />
            <Route path="/Abm" element={<ProtectedABM />} />
            <Route path="/Acceso" element={<Login />} />
            <Route path="/Registro" element={<Registro />} />
            <Route path="/404" element={<Error404 />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
