"use client"

import React from 'react'

import { useState } from 'react'

function Page() {

    const [contador, setContador] = useState(0)

    return (
        <div>
            <h1>Conditional Rendering</h1>
            <b><i>Sirve para mostrar u ocultar partes de nuestra aplicación dependendiendo de si se cumple una condición</i></b>
            <hr />

            <p>
                El valor del contador es: {contador} <br/>
            </p>

            <button
                onClick={ () => { setContador(contador + 1) } }
            >+1</button>

            <button
                onClick={ () => { setContador(contador - 1) } }
            >-1</button>

            <p>
                Si el contador es mayor a 5, saldrá un mensaje diciendo que es muy alto por conditional rendering. <br/>
                Si el contador es menor a -5, saldrá un mensaje diciendo que es muy bajo por conditional rendering. <br/> <br/>

                Si el contador es 0, saldrá un mensaje avisando si es 0. <br/>
                Si el contador NO es 0, saldrá otro mensaje avisando que no es 0
            </p>

            { contador > 5 && <h2 style={{color: "red"}} >El contador es muy alto!</h2> }
            { contador < -5 && <h2 style={{color: "red"}} >El contador es muy bajo!</h2> }

            { contador == 0 ? <p>El contador es 0</p> : <p>El contador NO es 0 :(</p> }

            <hr/>

            <p>
                El conditional rendering tiene la siguiente sintaxis: <br/><br/>
                <b>{" { condición && HTML } "}</b> <br/><br/>

                Si la condicón es <b>true</b>, entonces el HTML a la derecha es visible. <br/>
                Si la condicón es <b>false</b>, entonces el HTML a la derecha es invisible. <br/>
            </p>

            <p>
                Alternativamente, el conditional rendering tiene otra sintaxis: <br/><br/>
                <b>{" { condición ? htmlTrue : htmlFalse } "}</b> <br/><br/>

                Si la condicón es <b>true</b>, entonces el htmlTrue a la derecha es visible. <br/>
                Si la condicón es <b>false</b>, entonces el htmlFalse a la derecha es visible. <br/>
            </p>
        

        <br/><br/><br/><br/><br/>
        </div>
    )
}

export default Page
