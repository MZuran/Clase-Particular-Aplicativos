"use client"
/*
    1)  Cuando la página cargue AL PRINCIPIO, debemos hacer un fetch de tipo POST
    2)  El fetch de tipo post debe tener el nombre del doctor en el body como indica la consigna
    3)  Debemos guardar la lista de pacientes en una variable de estado
    4)  Debemos utilizar el componente del punto 1b para mostrar la lista de pacientes
*/

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { useState } from "react"

import { Pacientes } from "@/components/Pacientes"

export default function ListaPacientes() {

    const [ listaPacientes, setListaPacientes ] = useState([])

    const searchParams = useSearchParams()

    useEffect(
        () => {

            const body = {
                nombreDoctor: searchParams.get("nombreDoctor")
            }; // Este es el objeto que enviamos dentro del body.

            fetch('http://localhost:4000/pacientesDoctor', {
                method: 'POST', //  Cambiar por POST, PUT, o DELETE si es necesario
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            })

                .then(response => response.json())
                .then(data => {

                    console.log("El pedido POST respondió con", data)
                    // debemos guardarnos data.pacientes
                    setListaPacientes(data.pacientes)

                });

        },
        []
    )

    return (
        <>
            <h1>Lista Pacientes</h1>
            <p>El doctor/a es: {searchParams.get("nombreDoctor")}</p>

            <Pacientes listaPacientes={listaPacientes} ></Pacientes>
        </>
    )
}