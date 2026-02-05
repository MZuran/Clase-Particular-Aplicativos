"use client"

import { useState } from "react"

export default function UseState() {

    const [contador,setContador] = useState(0)
    let contadorComun = 0

    function sumarUno() {
        contadorComun = contadorComun + 1
        setContador(contador + 1)
    }

    function restarUno() {
        contadorComun = contadorComun - 1
        setContador(contador - 1)
    }

    console.log("Se hizo un pago")
    console.log("Se inició la descarga")
    console.log("Se hizo la llamada")

    return (
        <>
            <h1>UseState</h1>

            <b><i>Siempre que querramos guardar un valor cambiante en un componente, usamos el estado</i></b>

            <hr/>
            <p>
                El valor de la variable de estado es: {contador} < br />
                El valor de la variable común es: {contadorComun}
            </p>

            <button onClick={sumarUno} >Sumar 1</button>
            <button onClick={restarUno} >Restar 1</button>

            <hr/>

            <p>
                Todos los componentes (comunes o página) tienen algo llamado <b>el estado</b> <br />
                El estado de un componente se puede pensar como <i>la memoria interna del componente</i> <br /><br />

                La característica especial del estado, es que <b>si el valor del estado cambia,
                    el componente se vuelve a dibujar (re-renderizar)</b> <br /> <br />

                ¿Cómo usamos el estado? <br />

                El <b>hook useState</b> nos permite crear un nuevo tipo de variable llamada <i>"variable de estado"</i> <br /><br />

                ¿Cómo es la sintaxis del useState?<br /><br />

                Vamos a crear una variable de estado llamada "contador": <br />
                <code> <b> const [
                    <span style={{ color: "blue" }} >contador</span>,
                    <span style={{ color: "orange" }} >setContador</span>] = useState(
                    <span style={{ color: "blue" }} >0</span>
                    ) </b> </code>
                
                <br/>

                <code> <b> const [
                    <span style={{ color: "blue" }} >Nombre variable de estado</span>,
                    <span style={{ color: "orange" }} >Nombre de la función setter</span>] = useState(
                    <span style={{ color: "blue" }} >Valor inicial de la variable de estado</span>
                    ) </b> </code>
                
                <br/><br/>
                <span style={{ color: "blue" }} >Nombre variable de estado</span>:<br/>
                Es el nombre que le damos a nuestra nueva variable dentro del estado (memoria interna)

                <br/><br/>
                <span style={{ color: "orange" }} >Nombre de la función setter</span>:<br/>
                Es el nombre que le damos a la "función asociada" a nuestra variable de estado. <br/>
                Las variables de estado tienen la característica que NO PUEDEN USAR EL OPERADOR ASIGNACIÓN "=" <br/><br/>

                contador = contador + 1   <span style={{color: "red"}} >// NO FUNCIONA</span> < br/>
                contador = 12   <span style={{color: "red"}} >// NO FUNCIONA</span>< br/>
                contador = "carlitos"  <span style={{color: "red"}} >// NO FUNCIONA</span>< br/>

                < br/>
                En su lugar, cada vez que querramos cambiar el valor de la variable de estado, debemos usar la  <span style={{ color: "orange" }} >función setter</span>
                 < br/> < br/>

                setContador( contador + 1 )  <span style={{color: "green"}} >// FUNCIONA</span> < br/>
                setContador(12)   <span style={{color: "green"}} >// FUNCIONA</span>< br/>
                setContador("carlitos")  <span style={{color: "green"}} >// FUNCIONA</span>< br/>

                <br/><br/>
                <span style={{ color: "blue" }} >Valor inicial de la variable de estado</span>:<br/>
                El valor precargado en la variable de estado


                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </p>
        </>
    )
}