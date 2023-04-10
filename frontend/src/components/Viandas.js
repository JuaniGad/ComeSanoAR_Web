import React from "react";
import MyImage from "./MyImagen";


const ViandasItems=(props)=>{

    const {imagen,nombre,titulo,descripcion}=props;
    
    
    return(
        <div>
            <h1>{titulo}</h1>
            <h2>{descripcion}</h2>
            <MyImage imageName={imagen}/>
            <h4>{nombre}</h4>
        </div>
    );

    
}
export default ViandasItems;