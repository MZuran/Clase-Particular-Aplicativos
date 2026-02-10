"use client"

/*
    1)  Este componente debe ejecutar una función UNA SÓLA VEZ AL PRINCIPIO cuando sea cargado POR PRIMERA VEZ

    2)  Este componente debe hacer el fetch de tipo GET dentro de esa función

    3)  Este componente debe GUARDAR los datos de este pedido

    4)  Este componente debe mostrar en pantalla los datos guardados
        Siempre que tengamos que mostrar en pantalla los datos de un array, debemos usar array.map
*/

import { useEffect } from "react"
import { useState } from "react"

export function HacerGet() {

    const [arrayDatos, setArrayDatos] = useState([])

    useEffect(
        () => {

            fetch('http://localhost:4000/verDatos')
                .then(response => response.json())
                .then((response) => {
                    // Acá adentro hacemos lo que querramos con lo que nos llega del GET
                    console.log("El servidor nos respondió con:")
                    console.log(response)

                    setArrayDatos(response.datos)
                })

        },
        []
    )

    return (
        <div>
            <hr />
            <p>Este componente hará un fetch de GET</p>

            {
                arrayDatos.map(
                    (elemento) => { return <p key={elemento} >El elemento es {elemento}</p> }   
                )
            }
        </div>
    )
}