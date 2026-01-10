"use client"

import React from 'react'
import { useSearchParams } from 'next/navigation'
import { useSocket } from '@/hooks/useSocket'
import { useEffect, useState } from 'react'

import NuevaTarea from '@/components/NuevaTarea'
import Tarea from '@/components/Tarea'

function Tareas() {

    const searchParams = useSearchParams()
    const { socket, isConnected } = useSocket()

    const [textoTarea, setTextoTarea] = useState("")
    const [prioridadTarea, setPrioridadTarea] = useState(1)

    const [tareaActual, setTareaActual] = useState(false)

    useEffect(
        () => {

            if (!socket) { return }

            // Meter suscrupciones acá abajo
            socket.on("joined_OK_tareas", () => {
                console.log("Te uniste a la sala correctamente")
            })

            socket.on("nueva_tarea", (data) => {
                console.log("Llegó una nueva tarea", data)
                setTareaActual(data)
            })

            socket.on("tareas_completas", () => {

            })

        },
        [socket]
    )

    function callbackBoton() {
        if ( prioridadTarea >= 1 && prioridadTarea <= 5 ) {

            socket.emit("crear_tarea", { 
                creador: searchParams.get("username"), 
                texto: textoTarea, 
                prioridad: prioridadTarea
            })

        }   else    {
            alert("Error: La prioridad debe estar entre 1 y 5")
        }
    }

    return (
        <div>
            <h1>Tareas</h1>
            <p>
                El nombre es: {searchParams.get("username")} <br />
                El alumnoId es: {searchParams.get("alumnoId")}
            </p>

            <button
                onClick={() => { socket.emit("join_tareas", { alumnoId: searchParams.get("alumnoId") }) }}
            >Unirse a la sala de Tareas</button>

            <hr />

            <NuevaTarea
                onChangeTarea={(e) => { setTextoTarea(e.target.value) }}
                onChangePrioridad={(e) => { setPrioridadTarea(e.target.value) }}
                onClickCrearTarea={callbackBoton}
            />

            <Tarea
                texto={tareaActual.texto}
                prioridad={tareaActual.prioridad}
                creador={tareaActual.creador}
            />

        </div>
    )
}

export default Tareas
