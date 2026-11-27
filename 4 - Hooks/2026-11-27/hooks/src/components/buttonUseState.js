"use client"

/*
    Reglas de los componentes
    1)  Deben usar PascalCase
    2)  Tiene que devolver alguna etiqueta HTML (como podría ser un div)
    3)  Deben ser exportados


    Los "props" parámetros especiales que reciben los Componentes o los HTML
    Por ejemplo
        <Dni nombre={"Matías"} ></Dni>

    Los "props" se debían recibir entre los paréntesis del componente
    pero también deben estar entre llaves
    Por ejemplo
        export default function Dni({nombre, apellido, etc}) {}

    Los "props" que reciben las etiquetas HTML no las define el programador
    Hay una lista fija que viene con el lenguaje de props que le podemos pasar
    Entre esos props que podemos pasar, nos importa
        onClick
        onChange
*/

/*
    ¿Para qué sirve el prop onClick?
        onClick en inglés quiere decir "en el click"

        El prop onClick es un prop que hace que cuando hagamos click
        a la etiqueta, se ejecute un callback

        (Recordemos que los callbacks son funciones)

        onClick={ funciónSumar }
        onClick={ () => {} }
*/

import { useState } from "react"

/*
    Pasos para utilizar el hook useState
    1)  Arriba de todo el código, escribimos el string "use client"
    2)  Importar arriba de todo (después de use client) el hook useState desde "react"
    3)  Dentro del componente, definir la variable de estado:
            const [nombreVariable,nombreSetter] = useState(valorInicial) 
*/

export default function Boton({ texto }) {

    let contadorNormal = 0
    const [contadorEstado, setContadorEstado] = useState(0)

    function sumarUno() {
        contadorNormal = contadorNormal + 1
        //contadorEstado = contadorEstado + 1
        setContadorEstado(contadorEstado + 1)
    }

    return <div>

        <p>
            El número del contadorNormal es {contadorNormal} <br />
            El número del contadorEstado es {contadorEstado}
        </p>

        <button
            onClick={() => { alert("Hola") }}
        >Haceme click</button>

        <button onClick={sumarUno} >+1</button>
        
        <button
            onClick={
                () => { setContadorEstado(contadorEstado - 1) }
            }
        >-1</button>

    </div>
}