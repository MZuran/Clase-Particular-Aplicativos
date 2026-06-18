"use client"

/*
    props

    El onClick es un prop que recibe un callback
*/

export default function PaginaBoton() {

    function clickHandlerButton() {
        alert("Hola")
    }

    return (
        <>
            <h1>Ejemplo de botón</h1>
            <p>Cómo hacer un botón interactivo en React</p>
            <hr/>

            <button onClick={clickHandlerButton} >Haceme click</button>
            <button onClick={() => { alert("hola 2") }} >Haceme click</button>
        </>
    )
}