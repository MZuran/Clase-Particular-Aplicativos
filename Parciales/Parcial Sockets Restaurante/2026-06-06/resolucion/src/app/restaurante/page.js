"use client"

import { useSearchParams } from "next/navigation"
import { useSocket } from "@/utils/useSocket"
import { useEffect } from "react"
import { useState } from "react"

import { FormularioReserva } from "@/components/FormularioReserva"
import { MesaRestaurante } from "@/components/MesaRestaurante"

/*
    Cómo utilizamos el hook useSocket?
    0)  EN LA TERMINAL, debemos correr el comando
        npm i socket.io-client

    1)  Debemos asegurarnos de que el archivo useSocket.js esté en el proyecto.
        Nostros lo vamos a dejar en src/utils/useSocket.js

    2)  Nos debemos meter al archivo useSocket.js y cambiar el string serverUrl a la URL del backend del parcial

    3)  Importamos el hook useSocket desde el archivo useSocket.js 

    4)  Ponemos la siguiente línea de código dentro de nuestro componente
        const {socket, isConnected} = useSocket();

    5)  Si queremos suscribirnos a ciertos eventos, importamos useEffect y copiamos y pegamos
        el useEffect que está en el comentario de useSocket.js
*/

/*
    ENVIAR VS RECIBIR UN EVENTO:

    Para enviar un evento, debemos utilizar el comando
    socket.emit( "nombreEvento" )                                           No envía información
    socket.emit( "nombreEvento", { clave: valor, clave: valor, etc } )      Envía información dentro de un obj

    Para recibir un evento, debemos crear una "subscripción"
    Nos debemos suscribir UNA SÓLA VEZ (useEffect)

    socket.on( "nombreEvento", función )
*/

export default function Restaurante() {

    const searchParams = useSearchParams()
    const { socket, isConnected } = useSocket();

    const [listaMesas, setListaMesas] = useState([])

    const [nombreCliente, setNombreCliente] = useState("")
    const [capcacidadSeleccionada, setCapacidadSeleccionada] = useState(2)

    const [numeroMesa, setNumeroMesa] = useState(0)

    useEffect(() => {
        if (!socket) { return; }
        //aca pongo los socket.on

        socket.on("joined_OK_restaurante", ({ room, restaurante }) => {

            console.log("Llegó el evento joined_ok")
            console.log("La room es", room, "El restaurante es", restaurante)
            // Cada vez que nos llega esto, queremos guardar las mesas del restaurante
            // queremos guardar restaurante.mesas

            setListaMesas(restaurante.mesas)

        })

        socket.on("restaurante_actualizado", ({ restaurante }) => {

            console.log("Llegó el evento restaurante_actualizado")
            console.log("El restaurante es", restaurante)
            setListaMesas(restaurante.mesas)

        })

        socket.on("error_restaurante", ({ mensaje }) => {

            console.log("Llegó el evento error_restaurante")
            console.log("El mensaje es", mensaje)
            alert(mensaje)

        })

    }, [socket]);

    return (
        <>
            <h1>Restaurante</h1>
            <p>
                La variable searchParam llamada mozo es: {searchParams.get("mozo")} <br />
                La variable searchParam llamada alumnoId es: {searchParams.get("alumnoId")}
            </p>
            <hr />

            <button
                onClick={() => {
                    socket.emit("join_restaurante", { alumnoId: searchParams.get("alumnoId") })
                }}
            >Conectarse</button>

            <FormularioReserva

                onChangeInputCliente={(e) => { setNombreCliente(e.target.value) }}
                onSelectCapacidad={(e) => { setCapacidadSeleccionada(e.target.value) }}

                onClickReservarMesa={() => {

                    if (nombreCliente != "") {
                        socket.emit("reservar_mesa", {
                            mozo: searchParams.get("mozo"),
                            cliente: nombreCliente,
                            capacidad: capcacidadSeleccionada
                        })
                    } else {
                        alert("Nombre vacío")
                    }

                }}

                onChangeInputMesa={(e) => { setNumeroMesa(e.target.value) }}

                onClickLiberarMesa={() => {
                    socket.emit("liberar_mesa", { numeroMesa: numeroMesa })
                }}

            ></FormularioReserva>

            <hr/>
            
            <div 
                style={{"display": "flex", flexWrap: "wrap"}}
            >

            {/* 
            este es UNO de los elementoLista { "numero": 3, "capacidad": 2, "estado": "libre", "cliente": null } 
             */}
            {
                listaMesas.map(
                    (elementoLista) => {
                        return <MesaRestaurante
                            numeroMesa={elementoLista.numero}
                            capacidad={elementoLista.capacidad}
                            estado={elementoLista.estado}
                            cliente={elementoLista.cliente}
                        ></MesaRestaurante>
                    }
                )
            }

            </div>
        </>
    )
}