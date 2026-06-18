"use client"

import React from 'react'
import { useState } from 'react'

/*
    La etiqueta input es la etiqueta que le permite al usuario enviar información al front.

    Dependiendo de los props que utilicemos, se vuelve altamente configurable
        type = "number" || "text" || "checkbox"
        defaultValue
        placeHolder
        min, max
        onChange

    Por cada etiqueta de input única que tengamos, necesitamos una variable de estado para guardar su información
    Para actualizar la información de nuestros inputs, utilizaremos el evento change y el prop onChange

        e.target.value      (Es lo que el input tiene escrito adentro)
        e.target.checked    (para checkbox)

    El select es un tipo de input especial que requiere etiquetas "option" como hijo
    Las etiquetas option deben recibir el prop "value"
*/

function Page() {

    const [nombre, setNombre] = useState("")
    const [edad, setEdad] = useState(0)
    const [casado, setCasado] = useState(false)
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(1)

    return (
        <div>
            <h1>Tipos de inputs</h1>

            <input
                type='text'
                placeholder='Ingrese su nombre'
                onChange={
                    (e) => { setNombre(e.target.value) }
                }
            ></input>

            <input
                type='number'
                defaultValue={0}
                min={0}
                max={5}
                onChange={
                    (e) => { setEdad(e.target.value) }
                }
            ></input>

            <input
                type='checkbox'
                onChange={
                    (e) => { setCasado(e.target.checked) }
                }
            ></input>

            {nombre.length < 5 && <b>El nombre es muy corto</b>}

            <p>
                El nombre es: {nombre} <br />
                La edad es: {edad} <br />
                El estado civil es {casado ? "casado" : "soltero"} <br/>
                La opcion seleccionada es: {opcionSeleccionada}
            </p>


            <hr/>

            <h2>Select</h2>

            <select
                onChange={
                    (e) => { setOpcionSeleccionada(e.target.value) }
                }
            >
                <option value={1} >Primera Opcion</option>
                <option value={2} >Segunda Opcion</option>
                <option value={3} >Tercera Opcion</option>
            </select>

        </div>
    )
}

export default Page
