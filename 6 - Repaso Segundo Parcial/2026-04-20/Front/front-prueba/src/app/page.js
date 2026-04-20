"use client"

import React from 'react'

import { useState, useEffect } from 'react'

import { ComponentePosteo } from '@/components/componentePosteo'

function Home() {

  const [contador, setContador] = useState(0)
  const [arrayDatos, setArrayDatos] = useState([])

  useEffect(
    () => {

      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((data) => {

          console.log("Llegó el fetch", data)
          setArrayDatos(data)

        })

    },
    []
  )


  // [{...},{...},{...}]
  // [<ComponentePosteo>,<ComponentePosteo>,<ComponentePosteo>]

  return (
    <div>
      <h1>Hola mundo</h1>

      {

        arrayDatos.map(

          (objetoDatos) => {
            return <ComponentePosteo
              title={objetoDatos.title}
              body={objetoDatos.body}
              userId={objetoDatos.userId}
              key={objetoDatos.id}
            ></ComponentePosteo>
          }

        )

      }

    </div>
  )
}

export default Home
