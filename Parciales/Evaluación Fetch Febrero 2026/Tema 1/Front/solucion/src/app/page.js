"use client"

/*
    Si nosotros queremos utilizar CUALQUIER hook (useState, useEffect), debemos hacer lo siguiente:

    1)  Arriba del todo escribimos "use client"
    2)  Debemos importar el hook deseado
*/

/*
    Para hacer un mapeo, nosotros necesitamos:
    1)  Una variable de estado que contenga una LISTA de datos
    2)  El return de un componente (común o página)
    3)  Un componente para mostrar los datos
*/

/*
  Fijarse cómo usar useRouter y desde dónde importarlo desde http://localhost:3000/ejemplos/useRouter
*/

import { Doctor } from "@/components/Doctor";

import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const [listaDoctores, setListaDoctores] = useState([])
  const [textoInput, setTextoInput] = useState("")

  const router = useRouter()

  useEffect(
    () => {

      fetch('http://localhost:4000/doctores')
        .then(response => response.json())
        .then((data) => {

          // Acá adentro hacemos lo que querramos con lo que nos llega del GET
          console.log("El fetch del backend me devolvió: ", data)

          setListaDoctores(data.doctores)

        })

    },
    []
  )

  return (
    <div>

      <h1>Home</h1>

      <hr></hr>

      El usuario escribió: {textoInput} <br />

      <input
        type="text"
        onChange={(e) => { setTextoInput(e.target.value) }}
      ></input>

      <button
        onClick={() => { router.push("/listaPacientes?nombreDoctor=" + textoInput) }}
      >Click</button>

      {
        listaDoctores.map(
          (elementoLista) => {
            return <Doctor nombre={elementoLista.nombre} especialidad={elementoLista.especialidad} ></Doctor>
          }
        )
      }

    </div>
  );
}
