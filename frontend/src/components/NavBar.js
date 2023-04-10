import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Header.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>ComeSanoAR</h3>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      
      <nav ref={navRef}>

        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/nosotros">Nosotros</NavLink>
          </li>
          <li>
            <NavLink to="/preguntas_frecuentes">Preguntas frecuentes</NavLink>
          </li>
          <li>
            <NavLink to="/viandas">Elegi tus viandas</NavLink>
          </li>
          <li>
            <NavLink to="/contacto">Contacto</NavLink>
          </li>
          <li>
            <NavLink to="/carrito">Carrito</NavLink>
          </li>
        </ul>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
