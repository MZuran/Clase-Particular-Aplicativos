"use client"

import { useState } from "react"

const styles = {
    blue: { color: "blue" },
    orange: { color: "orange" },
    red: { color: "red" },
    green: { color: "green" },
    purple: { color: "purple" },
}

export default function EjemploConditionalRendering() {

    const [contador, setContador] = useState(0)

    return (
        <div>
            <h1>Conditional Rendering</h1>
            <b><i>Asociar una condición para que algo se muestre en pantalla</i></b>
            <hr />

            <i>
                Si el valor del contador es mayor a 5, saldrá un mensaje <br />
                Si el valor del contador es menor a -5, saldrá un mensaje <br />
                Habrá un cartel dependendiendo si el contador es positivo o no es positivo.
            </i>

            <p>
                El valor del contador es: {contador}
            </p>

            <button onClick={() => { setContador(contador + 1) }} >+1</button>
            <button onClick={() => { setContador(contador - 1) }} >-1</button>

            <br /><br />

            {contador > 5 && <b>El contador es mayor a 5</b>}
            {contador < -5 && <b>El contador es menor a -5</b>}

            <br />

            {contador > 0 ?
                <b>El contador es positivo</b> :
                <b>El contador es cero o negativo</b>
            }

            <hr />

            <h3>Conditional rendering</h3>

            <b>¿Cómo uso el conditional rendering?</b>
            <p>El conditional rendering puede usarse siguiendo 1 de estas dos posibles sintaxis:</p>

            <b> {"{ condición && renderizado }"} </b> <br />
            <b> {"{ condición ? renderizadoTrue : renderizadoFalse }"} </b>

            <br />

            <p>
                La condición es algo que siempre es considerado "True" o "False". <br /><br />
                En el caso de la primer sintaxis, si la condición es true, entonces el HTML dentro de "renderizado" se muestra.<br />
                Si la condición es false, el HTML del "renderizado" no se muestra.<br /><br />

                En el caso de la segunda sintaxis, si la condición es true, se muestra "renderizadoTrue". <br />
                Si no, si la condición es false, se muestra "renderizadoFalse"
            </p>

            <br /><br /><br /><br /><br />

        </div>
    )
}