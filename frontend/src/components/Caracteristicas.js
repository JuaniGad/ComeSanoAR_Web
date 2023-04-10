import React from "react";
import { Cualidades } from "../constants";
import '../styles/App.css'


export default function Caracteristicas(){
    return(
        <div className="cualidades">
            <p className="titulo">¿POR QUE ELEGIRNOS?</p>
            {Cualidades.map((cualidad)=>(
                <div key={cualidad.id} className="cualidadesBox">
                    <img src={cualidad.icon} alt="Img Precio"/>
                    <h3>{cualidad.titulo}</h3>
                    <p>{cualidad.text}</p>
                </div>
            ))}
        </div>
    )

}