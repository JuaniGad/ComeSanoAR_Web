import React from "react";
import Contacto from "../components/Contacto";
import PreguntasYResp from "../components/PreguntasYResp";
import Redes from "../components/Redes";

export default function PreguntasFrecuentesPage(){
    return(
        <main className="containerpyr">
            <div className="container">
            <h1>Preguntas Frecuentes</h1>
            <PreguntasYResp/>
            <Contacto/>
            <Redes/>
            </div>
        </main>
    )
}