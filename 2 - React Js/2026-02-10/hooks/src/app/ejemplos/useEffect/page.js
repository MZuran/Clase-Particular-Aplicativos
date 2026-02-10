"use client"

import { useEffect, useState } from "react"

export default function EjemploUseEffect() {

    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)

    useEffect(
        () => {
            console.log("Esto sólo sale una vez")
        },
        []
    )

    useEffect(
        () => {

            if (X == 5) {
                alert("El valor de X es 5")
            }
            
        },
        [X]
    )

    //console.log("Salgo varias veces")

    return (
        <>
            <h1>UseEffect</h1>

            <b><i>
                Si nosotros queremos que algo se ejecute UNA SÓLA VEZ, usamos un useEffect sin dependencias

                <br /><br />

                Si nosotros queremos "vigilar el valor de una variable", usamos useEffect
            </i></b>

            <hr />

                <p>
                    Valor X: {X} <br/>
                    Valor Y: {Y}
                </p>

                <button onClick={ () => { setX(X+1) } } >X+1</button>
                <button onClick={ () => { setX(X-1) } } >X-1</button>

                <br/>

                <button onClick={ () => { setY(Y+1) } } >Y+1</button>
                <button onClick={ () => { setY(Y-1) } } >Y-1</button>

            <hr />

            <b><i>¿Para qué nos sirve el hook useEffect?</i></b> <br /><br />
            El hook useEffect es un hook súper flexible que se utiliza principalmente para <b>controlar cuándo se ejecutan ciertas líneas de código</b>

            <br /><br />
            <b><i>¿Cuál es la sintaxis del hook useEffect?</i></b> <br /><br />
            El hook useEffect cuenta con 2 partes distintas: <br />
            <code><b> useEffect( <span style={{ color: "orange" }} >{"() => {}"}</span>, <span style={{ color: "blue" }} >{"[]"}</span> ) </b></code> <br />
            <code><b> useEffect( <span style={{ color: "orange" }} >El efecto</span>, <span style={{ color: "blue" }} >Las dependencias</span> ) </b></code>

            <br /><br />

            <span style={{ color: "orange" }} >El efecto</span>: <br />
            Es una función que se ejecuta cuando se cumple una de las siguientes 2 condiciones: <br />
            1)  La página carga <b>por primera vez</b> <i>(Ignorando re-renderizados)</i> <br />
            2)  El valor de alguna dependencia cambia

            <br /><br />

            <span style={{ color: "blue" }} >Las dependencias</span>: <br />
            Es un vector <i>(array)</i> que guarda en su interior cualquier número de <b>variables de estado</b>


            <br /><br /><br /><br /><br /><br />
        </>
    )
}