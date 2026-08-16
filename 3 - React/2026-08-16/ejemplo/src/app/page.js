import React from 'react'

import { Persona } from '@/components/PrimerComponente.js'

export default function Home() {
  return (
    <>

      <h1>Home</h1>
      <p>Esta es la página home y vamos a ver componentes</p>

      <Persona apellido={"Zuran"} edad={23} ></Persona>
      <Persona apellido={"Ramirez"} edad={23} ></Persona>
      <Persona apellido={"Barneto"} edad={23} ></Persona>
      <Persona apellido={"Casablanca"} edad={23} ></Persona>

    </>
  )
}

