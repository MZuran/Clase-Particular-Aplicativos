"use client"

import React from 'react'
import { useState } from 'react'

function Page() {

    const [nombre, setNombre] = useState("")
    const [edad, setEdad] = useState(0)
    const [valorCheckbox, setValorCheckbox] = useState(false)
    const [opcionSeleccionada, setOpcionSeleccionada] = useState()

    return (
        <div>
            <h1>Ejemplo de inputs</h1>

            <p>
                El nombre ingresado es: {nombre} <br />
                La edad ingresada es: {edad} <br />
                El valor del checkbox es: {valorCheckbox ? "true" : "false"} <br/>
                La opción seleccionada es: {opcionSeleccionada ? opcionSeleccionada : "ninguna"}
            </p>

            <input
                type='text'
                placeholder='Ingrese su nombre'
                defaultValue={nombre}
                onChange={(e) => { setNombre(e.target.value) }}
            ></input>

            <input
                type='number'
                placeholder='Ingrese su edad'
                defaultValue={edad}
                onChange={(e) => { setEdad(e.target.value) }}
            ></input>

            <input
                type='checkbox'
                onChange={(e) => { setValorCheckbox(e.target.checked) }}
            ></input>

            <select
                onChange={ (e) => { setOpcionSeleccionada(e.target.value) } }
            >
                <option value={false}>Seleccione una opcion</option>
                <option value={1} >Primero</option>
                <option value={2} >Segundo</option>
                <option value={3} >Tercero</option>
            </select>

        </div>
    )
}

export default Page
