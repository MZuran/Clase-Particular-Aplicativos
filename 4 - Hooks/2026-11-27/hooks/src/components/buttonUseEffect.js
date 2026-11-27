"use client"

import { useState } from "react"
import { useEffect } from "react"

export default function BotonUseEffect() {

    const [x, setX] = useState(0) 
    const [y, setY] = useState(0) 

    useEffect(
        ()=>{}, //  Efecto
        []      //  Array de dependencias
    )

    // Aquí creamos el evento "x es igual a 5" y la asignamos un callback
    useEffect(
        ()=>{
            if (x == 5) {
                alert("X llegó a 5")
            }
        },
        [x]
    )

    return <div>
        <p>
            El valor del x es {x} <br/>
            El valor del y es {y}
        </p>

        <button onClick={ () => { setX(x + 1) } } >X + 1</button>
        <button onClick={ () => { setX(x - 1) } } >X - 1</button>
        <br/>
        <button onClick={ () => { setY(y + 1) } } >Y + 1</button>
        <button onClick={ () => { setY(y - 1) } } >Y - 1</button>
    </div>
}