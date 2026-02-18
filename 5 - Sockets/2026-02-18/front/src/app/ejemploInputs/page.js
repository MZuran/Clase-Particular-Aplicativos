"use client"

import React, { useState } from "react";

export default function TextInputComponent() {

    const [textoInput, setTextoInput] = useState("")
    const [numeroInput, setNumeroInput] = useState(5)
    const [checkboxInput, setCheckboxInput] = useState(false)
    const [selectInput, setSelectInput] = useState(0)

    return (
        <div>
            <h1>Ejemplos de Inputs</h1>

            <input
                type="text"
                placeholder="Escriba su nombre..."
                onChange={ (e) => { setTextoInput(e.target.value) } }
            ></input>

            <p>La variable textoInput tiene: {textoInput}  </p>

            <hr/>

            <input
                type="number"
                defaultValue={ numeroInput }
                max={10}
                min={0}
                onChange={ (e) => { setNumeroInput(e.target.value) } }
            ></input>

            <p>La variable numeroInput tiene: {numeroInput}</p>

            <hr/>

            <input
                type="checkbox"
                defaultChecked={checkboxInput}
                onChange={ (e) => { setCheckboxInput(e.target.checked) } }
            ></input>

            { checkboxInput && <p>El checkbox es true</p> }
            { checkboxInput == false && <p>El checkbox es false</p> }

            <hr/>

            <select
                onChange={ (e) => { setSelectInput(e.target.value) } }
            >
                <option value={0} >Circulo</option>
                <option value={3} >Triangulo</option>
                <option value={4} >Cuadrado</option>
            </select>

            <p>La forma seleccionada tiene {selectInput} puntas</p>

        </div>
    );
}
