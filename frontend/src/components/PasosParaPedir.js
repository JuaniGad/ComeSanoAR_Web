import React from "react";
import { paso1, paso2, paso3 } from "../assets";

export default function PasosParaPedir() {
  return (
    <div>
      <p className="titulo">¿COMO PEDIR TUS VIANDAS?</p>
      <div className="paso_container">
        <div className="paso">
          <img src={paso1} alt="paso1" />
          <h3>ELEGI TUS COMIDAS</h3>
          <p>
            Selecciona tus viandas y arma tu pedido en funcion de tus gustos
          </p>
        </div>

        <div className="paso">
          <img src={paso2}  alt="paso2"/>
          <h3>COORDINA LA FECHA DE ENTREGA</h3>
          <p>
          Una vez creado el pedido nos comunicaremos con vos para coordinar la fecha de entrega del pedido.
          </p>
        </div>

        <div className="paso">
          <img src={paso3} alt="paso3"/>
          <h3>DISFRUTA TU COMIDA</h3>
          <p>
            ¡Disfruta de una comida sana y saludable desde tu casa!
          </p>
        </div>

      </div>
    </div>
  );
}
