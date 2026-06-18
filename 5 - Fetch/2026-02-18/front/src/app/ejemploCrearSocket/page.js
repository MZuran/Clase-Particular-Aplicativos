"use client"
import React from 'react'

import { useEffect } from 'react'
import { useSocket } from '@/hooks/useSocket'
import { useState } from 'react'

function App() {

    const { socket } = useSocket()
    const [ mensajeInput, setMensajeInput ] = useState("")

    useEffect(
        () => {

            if (!socket) {
                return
            }

            // Acá adentro metemos las suscripciones
            socket.on("pingBackend", () => {
                alert("El server me hizo un ping")
            })

            socket.on("enviarMensajeFront", (data) => {
                //console.log(data)
                console.log(data.mensaje)
            })

        },
        [socket]
    )

    function clickHandlerPing() {
        socket.emit( "ping" )
    }

    function clickHandlerMensaje() {
        socket.emit( "enviarMensajeBack", { mensaje: mensajeInput } )
    }

    return (
        <div>
            <h1>Ejemplo práctico creación de socket</h1>
            <button onClick={ clickHandlerPing } >Hacer Ping al Backend</button>

            <br/><hr/>

            <input
                onChange={ (e) => { setMensajeInput(e.target.value) } }
            ></input>

            
            <button onClick={ clickHandlerMensaje } >Enviar mensaje al backend</button>

            <br/><hr/>
            <p>
                El value del input ahora mismo es: { mensajeInput }
            </p>
        </div>
    )
}

export default App
