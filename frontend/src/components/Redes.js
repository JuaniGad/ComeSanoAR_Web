import React from "react";
import { whatsapp,instagram,email } from "../assets";
export default function Redes(){
    return(   

    <section>
    <div className="redes">
    <img src={whatsapp} alt="wp"/>
    <img src={instagram} alt="ig"/>
    <img src={email} alt="email"/>        
</div>
</section>
    )
}