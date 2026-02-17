"use client"

import { useSocket } from '@/hooks/useSocket'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import React from 'react'

import { FormularioReserva } from '@/components/FormularioReserva'
import { MesaRestaurante } from '@/components/MesaRestaurante'

function Restaurante() {

  const searchParams = useSearchParams()
  const mozo = searchParams.get("mozo")
  const alumnoId = searchParams.get("alumnoId")

  const [mesas, setMesas] = useState([])
  const [nombreCliente, setNombreCliente] = useState("")
  const [capacidad, setCapacidad] = useState(2)
  const [numeroMesa, setNumeroMesa] = useState(0)

  const [isInRoom, setIsInRoom] = useState(false)
  const [mesasLibres, setMesasLibres] = useState(0)

  const { socket } = useSocket()

  useEffect(
    () => {

      if (!socket) {
        return
      }

      socket.on("joined_OK_restaurante", (data) => {
        console.log("Recibimos el evento joined_OK_restaurante")
        console.log(data)

        // Cada vez que llegue este evento, debemos guardar data.restaurante.mesas
        setMesas(data.restaurante.mesas)
        setMesasLibres(data.restaurante.mesasLibres)

        // Si nos llega este evento, sabemos que estamos bien conectados a la sala
        setIsInRoom(true)
      })

      socket.on("restaurante_actualizado", (data) => {
        console.log("Recibimos el evento restaurante_actualizado")
        console.log(data)

        // Cada vez que llegue este evento, TAMBIÉN DEBEMOS GUARDAR data.restaurante.mesas
        // data.restaurante.mesas tiene las nuevas mesas actualizadas
        setMesas(data.restaurante.mesas)
        setMesasLibres(data.restaurante.mesasLibres)
      })

      socket.on("error_restaurante", (data) => {
        console.log("Recibimos el evento error_restaurante")
        console.log(data)

        alert(data.mensaje)
      })

    },
    [socket]
  )

  function onClickReservarMesa() {

    if (nombreCliente != "") {
      socket.emit("reservar_mesa", { mozo: mozo, cliente: nombreCliente, capacidad: capacidad })
    } else {
      alert("El nombre está vacío")
    }

  }

  function onClickLiberarMesa() {
    socket.emit("liberar_mesa", { numeroMesa: numeroMesa })
  }

  return (
    <div>
      <h1>Restaurante</h1>

      <button
        onClick={() => { socket.emit("join_restaurante", { alumnoId: alumnoId }) }}
      >Conectarse</button>

      {isInRoom && <p> Sala: {alumnoId} </p>}
      {isInRoom && <p> Mozo: {mozo} </p>}
      {isInRoom && <p> Mesas Libres: {mesasLibres}/12 </p>}

      {
        isInRoom &&
        <FormularioReserva
          onChangeInputCliente={(e) => { setNombreCliente(e.target.value) }}
          onSelectCapacidad={(e) => { setCapacidad(e.target.value) }}
          onChangeInputMesa={(e) => { setNumeroMesa(e.target.value) }}
          onClickReservarMesa={onClickReservarMesa}
          onClickLiberarMesa={onClickLiberarMesa}
        ></FormularioReserva>
      }

      <hr />

      Necesitamos transformar una lista de objetos a una lista de componentes MesaRestaurante

      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }} >


        {
          mesas.map(
            (objetoMesa) => {
              return <MesaRestaurante
                numeroMesa={objetoMesa.numero}
                capacidad={objetoMesa.capacidad}
                estado={objetoMesa.estado}
                cliente={objetoMesa.cliente}
                key={objetoMesa.numero}
              ></MesaRestaurante>
            }
          )
        }


      </div>
    </div>
  )
}

export default Restaurante
