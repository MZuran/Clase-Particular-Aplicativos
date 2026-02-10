import React from 'react'
import Nombre from './Nombre'
import Pais from './Pais'
import Checkbox from './Checkbox'

function Equipo({ textoNombre, textoPais, textoFecha }) {
  return (
    <div>
      <Nombre textoNombre={textoNombre} ></Nombre>
      <Pais textoPais={textoPais} ></Pais>
      <Checkbox textoFecha={textoFecha} ></Checkbox>
    </div>
  )
}

export default Equipo
