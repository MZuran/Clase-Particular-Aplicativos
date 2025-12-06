"use client"

import React from 'react'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useSocket } from '@/hooks/useSocket'
import { useState } from 'react'

import NuevaTarea from '@/components/NuevaTarea'

function Page() {

    const searchParams = useSearchParams()

    const {socket, isConnected} = useSocket();

    const [textoTarea, setTextoTarea] = useState("")
    const [numeroTarea, setNumeroTarea] = useState(1)

    const [tareaActual, setTareaActual] = useState()

    useEffect(() => {

        if (!socket) {return}

        socket.on("joined_OK_tareas", () => {
            console.log("Te uniste a la sala correctamente")
        })

        socket.on("nueva_tarea", (data) => {
            setTareaActual(data)
        })

    }, [socket]);

    function clickHandlerButtonUnirse() {
        socket.emit("join_tareas", { alumnoId: searchParams.get("alumnoId") })
    }

    function onChangeTareaHandler(e) {
        setTextoTarea(e.target.value)
    }

    function onChangePrioridadHandler(e) {
        setNumeroTarea(e.target.value)
    }

    function onClickCrearTareaHandler() {

        if ( numeroTarea >= 1 && numeroTarea <= 5 ) {

            socket.emit("crear_tarea", { creador: searchParams.get("username"), texto: textoTarea, prioridad: numeroTarea } )

        }   else    {
            alert("El número debe estar entre 1 y 5")
        }

    }

    return (
        <div>
            <h1>Tareas</h1>
            <p>
                username: {searchParams.get("username")} <br/>
                alumnoId: {searchParams.get("alumnoId")} <br/>
                Texto de la tarea nueva: {textoTarea} <br/>
                Prioridad: {numeroTarea}
            </p>

            <button onClick={clickHandlerButtonUnirse} >Unirse a la sala de tareas</button>
            <NuevaTarea
                onChangeTarea={ onChangeTareaHandler }
                onChangePrioridad={ onChangePrioridadHandler }
                onClickCrearTarea= { onClickCrearTareaHandler }
            />
        </div>
    )
}

export default Page
