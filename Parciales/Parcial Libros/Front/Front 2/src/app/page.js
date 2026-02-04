"use client"

import { useEffect, useState } from "react";
import { Libro } from "@/components/Libro";

export default function Home() {

  const [listaLibros, setListaLibros] = useState([])
  const [seleccionTitulo, setSeleccionTitulo] = useState("")
  const [seleccionValoracion, setSeleccionValoracion] = useState(1)

  function onClickDescarga() {
    // Queremos que al hacer click al botón se decargue información y se guarde en el estado
    // listaLibros = ["Quijote"]       -     NO SIRVE POR USAR ASIGNACIÓN
    // setListaLibros(["Quijote"])     -     SI FUNCIONA

    fetch('http://localhost:4000/libros')
      .then(response => response.json())
      .then((data) => {

        // Acá adentro hacemos lo que querramos con lo que nos llega del GET
        console.log(data.libros)
        setListaLibros(data.libros)

      })

  }

  function onClickCambiarValoración() {

    const body = {
      nombre: seleccionTitulo,
      valoracion: seleccionValoracion
    }; // Este es el objeto que enviamos dentro del body.

    console.log({body})

    fetch('http://localhost:4000/nuevaValoracion', {

      method: 'PUT', //  Cambiar por PUT, o DELETE si es necesario

      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(data => {

        console.log(data)
        //onClickDescarga()

      });
  }

  return (
    <>
      <h1>Home</h1>
      <button onClick={onClickDescarga} >Descargar Información</button>

      <hr />

      <select onChange={(e) => { setSeleccionTitulo(e.target.value) }} >
        <option value={undefined} >Seleccione un Libro</option>
        {
          listaLibros.map(
            (elementoLibro) => { return <option key={elementoLibro.id} value={elementoLibro.nombre}> {elementoLibro.nombre} </option> }
          )
        }
      </select>

      <input
        type="number"
        max={5}
        min={1}
        onChange={(e) => { setSeleccionValoracion(e.target.value) }}
        defaultValue={seleccionValoracion}
      ></input>

      <button onClick={onClickCambiarValoración} >Cambiar valoracion a {seleccionValoracion}</button>

      <hr />

      {
        listaLibros.map(
          (elementoLibro) => { return <Libro nombre={elementoLibro.nombre} valoracion={elementoLibro.valoracion} key={elementoLibro.id} /> }
        )
      }
    </>
  );
}
