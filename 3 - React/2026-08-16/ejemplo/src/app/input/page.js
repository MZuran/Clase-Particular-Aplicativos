"use client"
import React from 'react'
import { useState } from 'react'

/*
    Los inputs son etiquetas en las cuales el usuario ingresa información.
    Contienen varios props importantes que debemos saber utilizar.
        a. Uno de los props más importantes es el prop type
        b. onChange (Ejecuta un callback cuando cambia el valor del input)

    Vamos a tener 3 tipos de inputs:
        text (default)
        number
        checkbox

    También a veces en el pío podemos usar la etiqueta <select> como un input

    El onChange (o cualquier prop de evento) va a intentar pasarle al callback un "objeto de evento"
    Si lo queremos recibir, tenemos que hacer que el callback reciba un prop de event

    ¿Qué tiene el objeto event?
        Tiene TODA la información que rodea el evento.
        La que nos suele importar es el "target" u objetivo del evento dentro de este objeto (event.target)
        Dentro de event.target tenemos información relevante acerca de la etiqueta que ejecutó el evento (en este caso la etiqueta input)
        La información que nos suele importar del event.target, es el VALOR que tomó el input al momento del evento (event.target.value)

            Aclaración:
            Los inputs de tipo "checkbox" NO TIENEN VALOR
            Lo que nos importa es event.target.checked

*/

/*
    ¿Cómo almacenamos el valor de un input en el estado?
    1)  Creamos la variable de estado para guardar el valor
    2)  Cada vez que cambie el valor del input, actualizamos la variable de estado con "El valor del objetivo del objeto evento"
*/

function Page({ onAgregar }) {

    const [nombre, setNombre] = useState("ramiro")
    
    return (
        <div>
            <h1>Tipos de input</h1>
            <hr />

            <input 
                type='text'
                placeholder='ingrese nombre'
                className=''
                onChange={ (event) => { setNombre(event.target.value) } }
                value={nombre}
            ></input>

            <input 
                type='number'
                max={10}
                min={-1}
                defaultValue={0}
            ></input>

            <input 
                type='checkbox'
                defaultChecked={true}
            ></input>

            <hr/>

            <p>
                El usuario escribió {nombre}
            </p>

        </div>
    )
}

export default Page