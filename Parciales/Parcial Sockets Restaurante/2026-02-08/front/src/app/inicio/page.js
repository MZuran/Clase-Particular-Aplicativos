"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Inicio() {

    const [mozo, setMozo] = useState("")
    const [alumnoId, setAlumnoId] = useState(0)

    const router = useRouter()

    function onClickAcceder() {

        const ruta = "/restaurante"
        const queryParams = "?mozo=" + mozo +"&AlumnoId=" + alumnoId
        const url = ruta + queryParams

        if ( mozo.length >= 3 ) {
            router.push(url)
        }   else    {
            alert("Hay un error")
        }
    }

    return (<>
        <h1>Inicio</h1>

        <div>

            <input
                type="text"
                placeholder="Ingrese nombre mozo"
                onChange={(e) => { setMozo(e.target.value) }}
                defaultValue={mozo}
            ></input>

            <input
                type="number"
                defaultValue={alumnoId}
                onChange={(e) => { setAlumnoId(e.target.value) }}
            ></input>

            <button onClick={onClickAcceder} >Acceder al restaurante</button>

            { mozo.length < 3 && <p style={{color: "red"}} >Error! El nombre debe tener como mínimo 3 caracteres.</p> }

        </div>
    </>)
}