"use client"

import { useSearchParams } from "next/navigation"
import { useSocket } from "@/hooks/useSocket"
import { useEffect } from "react"
import { useState } from "react"

import { FormularioReserva } from "@/components/FormularioReserva"
import { MesaRestaurante } from "@/components/MesaRestaurante"

export default function Restaurante() {

    const { socket } = useSocket()
    const searchParams = useSearchParams()

    const searchParamsMozo = searchParams.get("mozo")
    const searchParamsAlumnoId = searchParams.get("AlumnoId")

    const [mesas, setMesas] = useState([])
    const [mesasLibres, setMesasLibres] = useState(0)

    const [nombre, setNombre] = useState("")
    const [numeroMesa, setNumeroMesa] = useState(0)
    const [capacidad, setCapacidad] = useState(2)

    const [estaConectado, setEstaConectado] = useState(false)

    useEffect(
        () => {
            if (!socket) { return }

            socket.on("joined_OK_restaurante", (data) => {
                console.log("Se recibió el evento joined_OK_restaurante", data)

                // debemos guardar data.restaurante.mesas en la variable de estado mesas
                setMesas(data.restaurante.mesas)
                setMesasLibres(data.restaurante.mesasLibres)

                // Si nos llega este evento, entonces sabemos que estamos conectados
                setEstaConectado(true)
            })

            socket.on("restaurante_actualizado", (data) => {
                console.log("Se recibió el evento restaurante_actualizado", data)

                setMesas(data.restaurante.mesas)
                setMesasLibres(data.restaurante.mesasLibres)

            })

            socket.on("error_restaurante", (data) => {
                console.log("Se recibió el evento error_restaurante", data)
                alert("Error! " + data.mensaje)
            })

        },
        [socket]
    )

    function onClickReservarMesa() {

        if (nombre == "") {
            alert("El nombre está vacío")
        } else {
            socket.emit("reservar_mesa", { mozo: searchParamsMozo, cliente: nombre, capacidad: capacidad })
        }
    }

    function onClickLiberarMesa() {
        socket.emit("liberar_mesa", { numeroMesa: numeroMesa })
    }

    return (
        <>
            <h1>Restaurante</h1>

            <button
                onClick={() => { socket.emit("join_restaurante", { alumnoId: searchParamsAlumnoId }) }}
            > Conectarse </button>

            <hr />

            {estaConectado &&
                <p>
                    Sala: {searchParamsAlumnoId} <br />
                    Mozo: {searchParamsMozo} <br />
                    Mesas Libres: {mesasLibres}
                </p>
            }

            {estaConectado &&
                <FormularioReserva
                    onChangeInputCliente={(e) => { setNombre(e.target.value) }}
                    onSelectCapacidad={(e) => { setCapacidad(e.target.value) }}
                    onChangeInputMesa={(e) => { setNumeroMesa(e.target.value) }}
                    onClickReservarMesa={onClickReservarMesa}
                    onClickLiberarMesa={onClickLiberarMesa}
                ></FormularioReserva>
            }



            <hr /> <br />
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }} >

                {/* Sabemos que MesaRestaurante recibe los props numeroMesa, capacidad, estado, cliente */}

                {
                    mesas.map(
                        (elementoMesa) => {
                            return <MesaRestaurante
                                numeroMesa={elementoMesa.numero}
                                capacidad={elementoMesa.capacidad}
                                estado={elementoMesa.estado}
                                cliente={elementoMesa.cliente}
                                key={elementoMesa.numero}
                            ></MesaRestaurante>
                        }
                    )
                }

            </div>
        </>
    )
}