"use client"
import React from 'react'

/*
    ¿Cómo usamos el estado?

    1) Importar el hook useState desde react
    2) Creamos una variable de estado dentro del componente
        a. Ponemos el nombre de la variable
        b. Ponemos el nombre del setter (generalmente setNombreVariable)
        c. Ponemos el valor inicial de la variable
    
    Aclaración:
        Las variables de estado tienen 2 características importantes:
        1)  Las variables de estado NO ADMITEN EL OPERADOR DE ASIGNACIÓN
        2)  El cambio de CUALQUIER VARIABLE DE ESTADO causa un re-renderizado
*/

/*
    =       -   Asignación
    ==      -   Igualdad débil
    ===     -   Igualdad fuerte
*/

import { useState } from 'react'

function Page() {

    let numero = 0
    const [contador, setContador] = useState(0)

    function sumarUno() {
        //console.log("Estamos sumando 1")
        numero = numero + 1
        setContador(contador + 1)
    }

    console.log("Iniciando pago...")

    return (
        <div>
            <h1>Contador</h1>
            <p>
                El valor actual del contador es {numero} <br />
                El valor actual de la variable de estado es {contador}
            </p>
            <button
                disabled={contador > 10}
                onClick={sumarUno}
            >+1</button>

            <button onClick={() => { setContador(contador - 1) }} >-1</button>

            {contador > 10 && <p>pasaste los 10</p>}
        </div>
    )
}

export default Page
