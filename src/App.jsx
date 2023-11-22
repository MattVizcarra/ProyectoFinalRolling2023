import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PaginaPrincipal from './Components/paginaPrincipal/paginaPrincipal'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'


function App() {



  return (
    <>
    <BrowserRouter>

    <main>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<PaginaPrincipal/>} />
        {/* <Route path="/cart" element={<SobreNosotros/>}></Route> */}
      </Routes>
    </main>
    <Footer></Footer>

      </BrowserRouter>
    </>
  )
}

export default App