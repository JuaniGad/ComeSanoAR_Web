import React from 'react';
import { light } from '../assets';

export default function CategoriaViandas(){

return(
    <section className='section_cat'>

        <div className='categoria'>
            <img src={light} alt="Light Food"/>
            <h2 className='titulo_cat'>VIANDAS LIGHT</h2>
            <p>Una opcion rica y saludable</p>
            <button>¡VER AHORA!</button>
        </div>

        <div className='categoria'>
            <img src={light} alt="Light Food"/>
            <h2 className='titulo_cat'>VIANDAS LIGHT</h2>
            <p>Una opcion rica y saludable</p>
            <button>¡VER AHORA!</button>
        </div>
        <div className='categoria'>
            <img src={light} alt="Light Food"/>
            <h2 className='titulo_cat'>VIANDAS LIGHT</h2>
            <p>Una opcion rica y saludable</p>
            <button>¡VER AHORA!</button>
        </div>
        <div className='categoria'>
            <img src={light} alt="Light Food"/>
            <h2 className='titulo_cat'>VIANDAS LIGHT</h2>
            <p>Una opcion rica y saludable</p>
            <button>¡VER AHORA!</button>
        </div>
    </section>
)
}