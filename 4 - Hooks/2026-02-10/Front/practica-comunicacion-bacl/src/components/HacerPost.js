"use client"

import React from 'react'

/*
    1)  Debe hacer un pedido de tipo POST a http://localhost4000/nuevoDato
    2)  Debe tener un body que sea { nuevoDato }
    3)  La lógica del fetch debe estar dentro de una función llamada "hacerFetch"
    4)  La función hacerFetch se tiene que ejecutar CADA VEZ QUE HAGAMOS CLICK A UN BOTÓN.
*/

function HacerPost() {

    function hacerFetch() {

        const body = { nuevoDato: prompt("Ingrese un nuevo dato") };

        fetch('http://localhost:4000/nuevoDato', {
            method: 'POST', //  Cambiar por PUT, o DELETE si es necesario
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            });

    }

    return (
        <div>
            <button onClick={hacerFetch} >Hacer Post</button>
        </div>
    )
}

export default HacerPost
