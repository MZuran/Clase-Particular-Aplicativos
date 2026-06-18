"use client"

import React from 'react'
import { useSocket } from '@/hooks/useSocket'
import { useEffect, useState } from 'react'
import { Mensaje } from '@/components/Mensaje'

/*
    Los sockets son un sistema de comunicación basado en eventos
    Cada evento tiene un nombre (obligatorio) y un body (opcional)

    Para recibir un evento, debemos asegurarnos de susbcribirnos (UNA SÓLA VEZ) al evento esperado
    Para eso necesitaremos un useEffect

    useSocket es el hook que nos habilita a usar sockets

    1)  Crear la carpeta hooks y poner el archivo useSocket adentro
    2)  Cambiar el serverUrl de el archivo useSocket al que se necesite utilizar
    3)  Poner el string "use client" y importar useSocket en la página que vaya a utilizar sockets
    4)  Crear el objeto socket

        const {socket} = useSocket()
*/

/*
    Sala de chat:
        Input de mensaje
        Input de nombre de usuario
        Botón para enviar un mensaje

        Un array de mensajes para mostrar los mensajes en pantalla

        Una subscripción al evento newDisplayMessage({ message, user })
        
        Botón para cambiar de room
*/

function Page() {

    const { socket } = useSocket()

    const [userName, setUserName] = useState("")
    const [message, setMessage] = useState("")

    const [historialMensajes, setHistorialMensajes] = useState([])

    useEffect(
        () => {

            if (socket) {

                socket.on("pong", () => {
                    console.log("Recibí un pong del backend")
                })

                socket.on("newDisplayMessage", (body) => {
                    console.log("Llegó el mensaje", body)
                    setHistorialMensajes( prev => [body, ...prev] )
                })

            }
        },
        [socket]
    )

    function clickHandlerEnviarMensaje() {
        // Emitimos el evento newMessage para el backend
        socket.emit("newMessage", { message: message, user: userName })
    }

    return (
        <div>
            <h1>Probamos sockets</h1>

            <hr/>

            <button
                onClick={ () => { socket.emit("ping") } }
            >Hacer Ping</button>

            <hr/>

            <input
                type='text'
                placeholder='Ingrese nombre'
                onChange={ (e) => { setUserName(e.target.value) } }
            ></input>

            <input
                type='text'
                placeholder='Ingrese mensaje'
                onChange={ (e) => { setMessage(e.target.value) } }
            ></input>

            <button onClick={clickHandlerEnviarMensaje} >Enviar mensaje</button>

            <br/>

            <button
                onClick={ () => { socket.emit("joinRoom", {room: prompt("Ingrese nueva room")}) } }
            >Cambiar room</button>

            {
                historialMensajes.map(
                    (objetoMensaje) => {
                        // {message, user, id}

                        return <Mensaje
                            mensaje={objetoMensaje.message}
                            usuario={objetoMensaje.user}
                            key={objetoMensaje.id}
                        ></Mensaje>
                    }
                )
            }

        </div>
    )
}

export default Page
