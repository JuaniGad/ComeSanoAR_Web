import React from 'react';
import { Pyr } from '../constants';

export default function PreguntasYResp(){
    return(
        <div>
            {Pyr.map((pregR)=>(
                <div key={pregR.id}>
                    <h2>{pregR.p}</h2>
                    <p>{pregR.r}</p>
                </div>

            ))
            }
        </div>
  )

}