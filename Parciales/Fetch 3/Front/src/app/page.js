"use client"

import { useState, useEffect } from "react";
import Jugadores from "@/components/Jugadores";

export default function Home() {

  const [listaJugadores, setListaJugadores] = useState([])

  const [jugadorSeleccionado, setJugadorSeleccionado] = useState("")
  const [equipoSeleccionado, setEquipoSeleccionado] = useState("")

  const [informacionEquipo, setInformacionEquipo] = useState({})

  useEffect(
    () => {

      fetch('http://localhost:4000/jugadores')
        .then(response => response.json())
        .then((data) => {

          console.log(data.jugadores)
          setListaJugadores(data.jugadores)

        })

    },
    []
  )

  function descargarInformaciónEquipo(nombreEquipo) {

    const direccion = "http://localhost:4000/equipo"
    const queryParams = `?nombre=${nombreEquipo}`
    const url = direccion + queryParams

    fetch(url)
      .then(response => response.json())
      .then((data) => {

        setInformacionEquipo(data)

      })
  }

  function encontrarEquipoJugador(nombreJugador) {

    listaJugadores.forEach(
      (jugador) => {
        if (jugador.nombre == nombreJugador) {

          setEquipoSeleccionado(jugador.equipo)
          descargarInformaciónEquipo(jugador.equipo)

        }
      }

    )
  }

  return (
    <div>
      <h1>Home</h1>

      <p>
        Jugador Selccionado: {jugadorSeleccionado} <br />
        Equipo Seleccionado: {equipoSeleccionado}
      </p>

      <Jugadores
        listaJugadores={listaJugadores}
        onChangeSelect={(e) => {
          setJugadorSeleccionado(e.target.value)
          encontrarEquipoJugador(e.target.value)
        }}
      ></Jugadores>

      <hr />
      <h3>Información de Equipo</h3>

      <p>
        Nombre: {informacionEquipo.nombre} <br />
        Fundacion: {informacionEquipo.fundacion} <br />
        Pais: {informacionEquipo.pais} <br />
      </p>

    </div>
  );
}
