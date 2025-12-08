import React from 'react'
import { PrimerComponente } from '@/components/primerComponente'

/*
  ¿Cómo usamos nuestro componente?
  Un componente es básicamente una etiqueta HTML personalizada
  Se utiliza exactamente igual que un html
*/

function Page() {
  return (
    <div>
      <h1>Home</h1>
      <PrimerComponente nombre={"Matias"} ></PrimerComponente>
      <PrimerComponente nombre={"Alex"} ></PrimerComponente>
      <PrimerComponente nombre={"Ramiro"} ></PrimerComponente>
      <PrimerComponente nombre={"Luca"} ></PrimerComponente>
    </div>
  )
}

export default Page
