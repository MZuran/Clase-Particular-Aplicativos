"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Inicio() {

    const [nombreMozo, setNombreMozo] = useState("")
    const [idAlumno, setIdAlumno] = useState(0)

    const router = useRouter()

    function onClickAcceder() {

        if ( nombreMozo.length >= 3 ) {
            
            const string1 = "/restaurante?mozo=" + nombreMozo + "&alumnoId=" + idAlumno
            const string2 = `/restaurante?mozo=${nombreMozo}&alumnoId=${idAlumno}`

            router.push(string1)

        }

    }

    return (<>
        <h1>Inicio</h1>

        <div className="formulario">

            { nombreMozo.length < 3 && <p>Error! El nombre debe tener 3 caracteres como mínimo.</p> }

            {/* { nombreMozo.length < 3 ? <p>Error! El nombre debe tener 3 caracteres como mínimo.</p> : <p>Todo bien</p> } */}

            <input
                type="text"
                onChange={ (e) => { setNombreMozo(e.target.value) } }
                placeholder="Ingrese el nombre del mozo"
            ></input>

            <input
                type="number"
                onChange={ (e) => { setIdAlumno(e.target.value) } }
                defaultValue={idAlumno}
            ></input>

            <button onClick={ onClickAcceder } >Acceder al restaurante</button>

        </div>

        <br/>

        <p>
            Nombre: {nombreMozo} <br/>
            Id de alumno: {idAlumno}
        </p>

    </>)
}