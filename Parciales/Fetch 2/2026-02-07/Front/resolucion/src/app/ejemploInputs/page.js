"use client"

import { useState } from "react";

export default function Home() {

  const [textoInput, setTextoInput] = useState("")
  const [numeroInput, setNumeroInput] = useState(0)
  const [checkboxInput, setCheckboxInput] = useState(false)
  const [opcionElegida, setOpcionElegida] = useState()

  return (
    <>
      <h1>Home</h1>

      <input
        type="text"
        onChange={(e) => { setTextoInput(e.target.value) }}
        placeholder="Ingrese texto"
      ></input>

      <input
        type="number"
        onChange={(e) => { setNumeroInput(e.target.value) }}
        defaultValue={0}
        min={0}
        max={5}
      ></input>

      <input
        type="checkbox"
        onChange={(e) => { setCheckboxInput(e.target.checked) }}
      ></input>

      <p>
        El usuario escribió: {textoInput} <br />
        El número escrito es: {numeroInput} <br />
        El valor del checkbox es {checkboxInput ? "verdadero" : "falso"}
      </p>

      <hr />

      <select
        onChange={(e) => { setOpcionElegida(e.target.value) }}
      >
        <option value={1} >Primer opcion</option>
        <option value={2} >Segunda opcion</option>
        <option value={3} >Tercer opcion</option>
      </select>

      { opcionElegida != false ? <p>El usuario eligió la opción {opcionElegida}</p> : <p>El usuario no eligió nada</p> }

    </>
  );
}
