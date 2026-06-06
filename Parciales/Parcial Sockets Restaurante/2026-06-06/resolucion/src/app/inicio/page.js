"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
// const [nombreVariable, nombreSetter] = useState(valorInicial)

/*
    Conditional Rendering:
    { condicion && HTML }
*/

export default function Inicio() {

    const [mozo, setMozo] = useState("")
    const [alumnoId, setAlumnoId] = useState(0)

    const router = useRouter()
    // router.push(URL)

    return (
        <>
            <h1>Inicio</h1>

            <hr/>
            <p>
                La variable mozo es: {mozo} <br/>
                La variable alumnoId es: {alumnoId}
            </p>
            <hr/>

            { mozo.length < 3 && <p>Error! El nombre es muy corto.</p> }

            <input
                type="text"
                onChange={ (e) => { setMozo(e.target.value) } }
                placeholder="Escriba el nombre del mozo"
            ></input>

            <input
                type="number"
                onChange={ (e) => { setAlumnoId(e.target.value) } }
                placeholder="Escriba su ID de alumno"
            ></input>

            <button
                onClick={ () => { router.push("/restaurante?mozo=" + mozo + "&alumnoId=" + alumnoId ) } }
            >Acceder al restaurante</button>
        </>
    )
}