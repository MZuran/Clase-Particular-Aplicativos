"use client"

import { useState } from "react";
import { useEffect } from "react";

import { Editar } from "@/components/Editar";

export default function Home() {

  const [arrayProductos, setArrayProductos] = useState([])
  const [productoSeleccionado, setProductoSeleccionado] = useState("")
  const [mostrarComponenteEditar, setMostrarComponenteEditar] = useState(false)

  useEffect(
    () => {

      fetch('http://localhost:4000/productos')
        .then(response => response.json())
        .then((response) => {

          // Acá adentro hacemos lo que querramos con lo que nos llega del GET
          console.log(response)
          setArrayProductos(response.productos)

        })

    },
    []
  )

  // [ {...},{...},{...},{...} ]
  // [ <option/>, <option/>, <option/>, <option/> ]

  return (
    <>
      <h1>Home</h1>

      <select
        onChange={(e) => { setProductoSeleccionado(e.target.value) }}
      >

        {
          arrayProductos.map(
            (producto) => {
              return <option key={producto.id} value={producto.nombre} >{producto.nombre} - {producto.stock}</option>
            }
          )
        }

      </select>

      <p> El usuarió seleccionó {productoSeleccionado ? `${productoSeleccionado}` : "Nada"} </p>

      <hr />

      <input
        type="checkbox"
        onChange={ (e) => { setMostrarComponenteEditar(e.target.checked) } }
      ></input>

      { mostrarComponenteEditar && <Editar> </Editar> }

    </>
  );
}
