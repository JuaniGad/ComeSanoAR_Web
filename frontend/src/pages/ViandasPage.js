import React, { useEffect, useState } from "react";
import axios from 'axios';
import ViandasItems from "../components/Viandas";

const  ViandasPage=(props)=>{

    const [loading,setLoading]=useState(false);
    const [viandas,setViandas]=useState([]);
    
    useEffect(()=>{
        const cargarViandas=async()=>{
            setLoading(true);
            const response=await axios.get('http://localhost:3000/api/viandas');
            setViandas(response.data)

            setLoading(false)
            
        };

        cargarViandas();
    },[]);




    return(
        <section>
            <h2>Viandas</h2>
            {
                loading ?(
                <p>Cargando . . . </p>
                ):(
                    viandas.map(item=><ViandasItems key={item._id} titulo={item.titulo} descripcion={item.descripcion} imagen={item.imagen}/>)
                )
            }
        </section>
    )
}

export default ViandasPage;