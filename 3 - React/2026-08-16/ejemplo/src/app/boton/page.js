// rfce

"use client"

import React from 'react'

function Page() {

    function saludar() {
        alert("Hola")
    }

    return (
        <div>
            <h1 onClick={saludar} >Boton</h1>
            <hr />

            <div>
                <b>¿Qué era un prop?</b> <br />
                <p>Son los parámetros que recibe una etiqueta HTML o un componente</p> <br />

                <b>¿Qué era un callback?</b>  <br />
                <p>Es una función que se pasa por parámetros</p>

                <p>
                    Nosotros podemos pasar por <b>prop</b> una función <b>(callback)</b> por diversos motivos.  <br />
                    Generalmente vamos a querer utilizar callbacks en los <b>props de evento.</b>
                    <br />  <br />
                    <b>¿Qué es un prop de evento?</b>  <br />
                    Las etiquetas HTML "default" que ya están definidas en react tienen una lista de props que pueden aceptar.  <br />
                    Entre ellas se destacan las que se llaman "props de evento". Suelen empezar con "on" Algo. <br/>
                    Los props como onClick, onChange, onHover, etc SIEMPRE VAN A RECIBIR UN CALLBACK.
                </p>
            </div>

            <button onClick={ () => { console.log("Hiciste click") } } >Callback Anónimo</button>
            <button onClick={ saludar } >Callback por Referencia</button>

        </div>

    )
}

export default Page
