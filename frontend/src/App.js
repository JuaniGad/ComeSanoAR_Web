import React from "react";

import NavBar from './components/NavBar'
import {BrowserRouter,Routes,Route } from "react-router-dom";
import './styles/App.css';

import ContactoPage from './pages/ContactoPage'
import HomePage from './pages/HomePage'
import NosotrosPage from './pages/NosotrosPage'
import PreguntasFrecuentesPage from './pages/PreguntasFrecuentesPage'
import ViandasPage from './pages/ViandasPage'
import CarritoPage from './pages/CarritoPage'
import Footer from "./components/Footer";

function App() {

  return (
    <div className="App">
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="nosotros" element={<NosotrosPage />}/>
          <Route path="preguntas_frecuentes" element={<PreguntasFrecuentesPage/>}/>
          <Route path="viandas" element={<ViandasPage/>}/>
          <Route path="contacto" element={<ContactoPage/>}/>
          <Route path="carrito" element={<CarritoPage/>}/>
        </Routes>
  </BrowserRouter>

 <footer>
    <Footer/>
</footer>
  </div>
  );
}

export default App;
