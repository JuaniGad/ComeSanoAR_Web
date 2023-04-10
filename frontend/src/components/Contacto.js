import React from "react";


export default function Contacto() {
  return (
    <div className="holder-formulario">
      <p className="titulo">Contacto</p>
      <div className="formulario">
        <form>
          <label>Nombre:</label>
          <input type="text" id="nombre" name="nombre" />
          <label >Email:</label> 
          <input type="email" id="email" name="email" />
          <label >Telefono(opcional):</label>
          <input type="number" id="telefono" name="telefono" />
          <label >Mensaje:</label>
          <textarea id="mensaje" name="mensaje"></textarea>
          <input type="submit" value="Enviar mensaje" />
        </form>
      </div>
    </div>
  );
}
