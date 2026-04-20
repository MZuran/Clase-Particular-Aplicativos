"use client"

import React from 'react'
import { useState } from 'react'

function Page() {

  const [nombreCliente, setNombreCliente] = useState("")
  const [tamanio, setTamanioMesa] = useState(0)

  function clickHandlerHacerPeticion() {

    if (tamanio > 0 && tamanio < 10 && nombreCliente != "") {

      const body = {
        tableSize: tamanio,
        name: nombreCliente
      }; // Este es el objeto que enviamos dentro del body.

      fetch('http://localhost:4000/table', {
        method: 'POST', //  Cambiar por PUT, o DELETE si es necesario
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })

        .then(response => response.json())
        .then(data => {

          console.log(data)

        });

    }

  }

  return (
    <div>
      <h1>Ejemplo de un fetch de tipo post</h1>
      <hr />

      <input
        type='text'
        placeholder='Ingrese Su nombre'
        onChange={
          (e) => { setNombreCliente(e.target.value) }
        }
      ></input>

      <input
        type='number'
        defaultValue={0}
        min={0}
        max={10}
        onChange={
          (e) => { setTamanioMesa(e.target.value) }
        }
      ></input>

      <button onClick={clickHandlerHacerPeticion} >Hacer Peticion</button>

    </div>
  )
}

export default Page