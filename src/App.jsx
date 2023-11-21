import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'


import PaginaPrincipal from './components/paginaPrincipal/paginaPrincipal'

function App() {



  return (
    <>
    <BrowserRouter>
    {/* <Navbar></Navbar> */}
    <h1>Hello World</h1>
    <h2>Desde rama develope</h2>
    <Navbar></Navbar>
    <button className='btn btn-primary'>Boton</button>
    <main>
      <Routes>
        <Route exact path="/" element={<PaginaPrincipal/>} />
        {/* <Route path="/cart" element={<SobreNosotros/>}></Route> */}
      </Routes>
    </main>

      </BrowserRouter>
    </>
  )
}

export default App