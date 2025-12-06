"use client"

import React from 'react'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

function Page() {

    const router = useRouter()

    const [username, setUsername] = useState("")
    const [alumnoId, setAlumnoId] = useState(0)

    function changeHandlerUsername(e) {
        setUsername(e.target.value)
    }

    function changeHandlerAlumnoId(e) {
        setAlumnoId(e.target.value)
    }

    function clickHandlerTareas() {
        router.push("/tareas?username=" + username + "&alumnoId=" + alumnoId)
    }

    return (
        <div>
            <h1>Inicio</h1>

            <p>La variable de estado es {username}</p>

            <input
                type={"text"}
                onChange={changeHandlerUsername}
            ></input>

            <input
                type={"number"}
                onChange={changeHandlerAlumnoId}
            ></input>

            <button onClick={clickHandlerTareas} >Ir a Tareas</button>

            {
                username.length < 3 && <p>Error: El nombre de usuario tiene menos de 3 caracteres</p>
            }

        </div>
    )
}

export default Page
