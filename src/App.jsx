import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import PaginaPrincipal from './components/paginaPrincipal/paginaPrincipal'

function App() {



  return (
    <>
    <BrowserRouter>
    {/* <Navbar></Navbar> */}
    <h1>Hello World</h1>
    <h2>Desde rama develope</h2>
    <button className='btn btn-primary'>Boton</button>
    <main>
      <Routes>
        <Route exact path="/" element={<PaginaPrincipal/>} />
        {/* <Route path="/cart" element={<SobreNosotros/>}></Route> */}
      </Routes>
    </main>
    {/* <Footer></Footer> */}
        
    {/* <PaginaPrincipal/> */}
      </BrowserRouter>
    </>
  )
}

export default App
