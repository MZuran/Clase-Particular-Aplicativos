"use client"

// Para crear el objeto socket necesitamos useSocket
import { useSocket } from "@/hooks/useSocket";
import { useEffect } from "react";

/*
  Pasos para crear el objeto socket

  0)  Crear src/hooks/ y meter el archivo useSocket.js
  1)  Entrar a src/app/hooks/useSocket.js y cambiar el serverUrl a la url donde esté hosteado el backend
  2)  Importamos el hook useSocket desde la carpeta hooks
  3)  Creamos el objeto socket con 
      const { socket, isConnected } = useSocket()
*/

/*
  Pasos para crear la "suscripción" a un evento con socket.on
  0)  Crear el objeto socket
  1)  Importar useEffect
  2)  Usar el useEffect con un array de dependencias que tenga [ socket ]
  3)  Poner al principio del efecto:

      if (!socket) { return }
  4)  Debajo del if, crear los socket.on()
*/

/*
  Para hacer el socket.emit, debemos tener cuidado para que NO SEA UNA EJECUCIÓN DESCONTROLADA
  Generalmente los socket.emit van a estar en un callback de un onClick (no siempre)
*/

export default function Home() {

  const { socket, isConnected } = useSocket()

  useEffect(
    () => {

      if (!socket) { return }

      // Acá ponemos nuestras suscripciones con socket.on
      socket.on("enviarMensajeFront", (data) => {
        console.log("Se recibió un mensaje del back:", data)
      })

    },
    [socket]
  )

  function onClickEnviar() {
    const mensaje = prompt("Ingrese un mensaje")
    socket.emit( "enviarMensajeBack", { mensaje: mensaje } )
  }

  return (
    <>
      <h1>Home</h1>
      <button onClick={ onClickEnviar } >Enviar mensaje al back</button>
    </>
  );
}

