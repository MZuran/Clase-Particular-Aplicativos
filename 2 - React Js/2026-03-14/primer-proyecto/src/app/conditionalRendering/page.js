import React from 'react'
import { PersonaConEdad } from '@/components/personaConEdad'

export default function Page() {

    const edad = 1

    return (
        <div>
            <h1>Conditional Rendering</h1>
            <hr />

            <p>
                El conditional rendering consiste en aplicar un <code><b>if</b></code> al renderizado de HTML.<br/>
                <br/>

                <b>Sintaxis:</b><br/>
                {"{ condición && renderizado }"}
            </p>

            <p>
                Ejemplo: <br/>
                
                { edad >= 18 && <p>La edad pertenece a un adulto</p> }
                { edad < 18 && <p>La edad pertenece a un niño</p> }

            </p>

            <PersonaConEdad edad={20} ></PersonaConEdad>
            <PersonaConEdad edad={10} ></PersonaConEdad>
            <PersonaConEdad edad={18} ></PersonaConEdad>

        </div>
    )
}
