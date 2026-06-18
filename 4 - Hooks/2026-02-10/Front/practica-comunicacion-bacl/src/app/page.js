"use client"

import { HacerGet } from "@/components/HacerGet";
import HacerPost from "@/components/HacerPost";

import { useSocket } from "@/hooks/useSocket";
import { useEffect } from "react";

/*
  ¿Cómo usamos el hook useSocket?

  0)  Abrimos el archivo src/hooks/useSocket.js y cambiamos el url a donde se conecta
  1)  Importamos el hook
  2)  Creamos el objeto "socket" de la siguiente manera:
      const { socket } = useSocket()
*/

export default function Home() {

  const { socket } = useSocket()

  useEffect(() => {
    if (!socket) { return }

    //aca pongo los socket.on
    socket.on(
      "ping",
      (data) => { console.log("El alert me envió un ping", data) }
    )

  }, [socket]);

  return (
    <div>
      <h1>Home</h1>

      <button
        onClick={() => { socket.emit("mensaje", { text: prompt("Ingrese mensaje") }) }}
      >Enviar Mensaje al back</button>

      <hr />
      <HacerGet></HacerGet>
      <HacerPost></HacerPost>
    </div>
  );
}
