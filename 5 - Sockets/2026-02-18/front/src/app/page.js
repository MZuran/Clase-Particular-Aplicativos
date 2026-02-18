"use client"

import { useSocket } from "@/hooks/useSocket";
import { useEffect } from "react";

export default function Home() {

  const { socket } = useSocket()

  useEffect(
    () => {
      
      if (!socket) {
        return
      }

      socket.on("mensaje", (data) => {
        console.log("El servidor envió el mensaje", data.text)
      })

      socket.on("pingBackend", () => {
        alert("El backend hizo un ping")
      })

    },
    [socket]
  )

  return (

    <div>
      <h1>WebSockets</h1>
      <hr></hr>
      <h3>Cómo crear nuestros sockets</h3>
      <p>1) Debemos crear la carpeta hooks y meter el archivo del hook de useSocket <code>/src/hooks/useSocket.js</code></p>
      <p>2) Dentro de <code>/src/hooks/useSocket.js</code>, debemos cambiar la dirección url a nuestro backend.</p>
      <p>
        3) Debemos importar el hook useSocket y crear el objeto <b>socket</b> <br />
        <b><code>{"const { socket } = useSocket()"}</code></b> <br /><br />
        <i>Alternativamente podemos hacer <b><code>{"const { socket, isConnected } = useSocket()"}</code></b></i>
      </p>
      <i><code>isConnected</code> es un booleano que devuelve <b>true</b> si el socket está conectado al backend. <br/> 
        <br/><b>IMPORTANTE:</b> En muchos parciales, te piden tener un booleano para saber si el socket está conectado a una SALA en lugar de el backend. <br/> <code>isConnected</code> NO SIRVE PARA VER SI ESTAMOS EN UNA SALA
      </i>

      <hr/>
      <h3>Cómo emitir un evento</h3>
      <b>Emitir un evento significa enviarlo "al otro lado de la conexión"</b>

      <p>
        <code>socket.emit( <span style={styles.orange} >Nombre de evento</span>, <span style={styles.blue}>Datos opcionales de evento</span> )</code>
        <br/>
        <code>socket.emit( <span style={styles.orange} >"Mensaje"</span>, <span style={styles.blue}>{"{ texto: 'hola' }"}</span> )</code>
        <br/>
        <code>socket.emit( <span style={styles.orange} >"Ping"</span> )</code>
      </p>

      <hr/>
      <h3>Cómo recibir un evento en el frontEnd</h3>
      <b>
        Cada vez que creamos un socket.on, estamos creando una "suscripción" que utiliza recursos de nuestra computadora.
        <br/>
        Debemos asegurarnos que las suscripciones se hagan una sóla vez para gastar la mínima cantidad de recursos.
      </b>
      <br/><br/>
      <code>socket.on( <span style={styles.orange} >Nombre del Evento</span>, <span style={styles.blue} >Efecto (Callback)</span> )</code> <br/>
      <code>socket.on( <span style={styles.orange} >"Mensaje"</span>, <span style={styles.blue} >{"(data) => { alert(data.texto) }"}</span> )</code><br/>
      <code>socket.on( <span style={styles.orange} >"Ping"</span>, <span style={styles.blue} >{"() => { alert('Hicieron un ping') }"}</span> )</code><br/>

      <br/>
      <p>
        1) Importamos <code>useEffect</code> <br/>
        2) Creamos el siguiente <code>useEffect</code>: <br/>
        
        <img src="ejemploSuscripcion.png" style={{ maxHeight: "200px", margin: "5px", borderRadius: "15px" }} ></img>

        <br/>
        3) Ponemos nuestras suscripciones con <code>socket.on</code> en donde marca el comentario.

      </p>

      <hr/>

      <button
        onClick={ () => { socket.emit("ping") } }
      >Hacer Ping</button>

     <br/><br/><br/><br/><br/>
    </div>
  );
}

const styles = {
  blue: { color: "blue" },
  orange: { color: "orange" },

}