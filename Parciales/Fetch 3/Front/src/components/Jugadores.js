import React from 'react'

function Jugadores( {listaJugadores, onChangeSelect} ) {
  return (
    <select onChange={onChangeSelect} >
      {
        listaJugadores.map(
            (jugador) => {
                return <option key={jugador.nombre} value={jugador.nombre} > {jugador.nombre} - {jugador.equipo} </option>
            }
        )
      }
    </select>
  )
}

export default Jugadores
