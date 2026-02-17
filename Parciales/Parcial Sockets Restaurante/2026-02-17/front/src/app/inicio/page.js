"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

// { condicion && renderizado }
// { condicion ? renderizadoTrue : renderizadoFalse }

export default function Inicio() {
    
    const [nombreMozo, setNombreMozo] = useState("")
    const [idAlumno, setIdAlumno] = useState(0)

    const router = useRouter()

    function onClickAcceder() {

        const url1 = `/restaurante?mozo=${nombreMozo}&alumnoId=${idAlumno}`
        const url2 = "/restaurante?mozo=" + nombreMozo + "&alumnoId=" + idAlumno

        if (nombreMozo.length >= 3) {
            router.push(url1)
        }
    }

    return (
    <>
        <h1>Inicio</h1>

        <input
            type="text"
            placeholder="Ingrese mozo"
            onChange={ (e) => { setNombreMozo(e.target.value) } }
        ></input>

        <input
            type="number"
            placeholder="Ingrese ID de alumno"
            onChange={ (e) => { setIdAlumno(e.target.value) } }
        ></input>

        <button onClick={ onClickAcceder } >Acceder al restaurante</button>

        { nombreMozo.length < 3 && <p style={{color: "red"}} >Error! El mensaje tiene menos de 3 caracteres</p> }
    </>
    )
}