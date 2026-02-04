"use client"

import React from 'react'

import { useSocket } from '@/hooks/useSocket'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import { FormularioMesa } from '@/components/FormularioMesa'
import { MesaRestaurante } from '@/components/MesaRestaurante'

function Restaurante() {

    const searchParams = useSearchParams()

    const searchParamMozo = searchParams.get("mozo")
    const searchParamAlumnoId = searchParams.get("alumnoId")

    const { socket } = useSocket();

    const [mesas, setMesas] = useState([])
    const [mesasLibres, setMesasLibres] = useState(0)

    const [backendConectado, setBackendConectado] = useState(false)

    useEffect(() => {
        if (!socket) return;

        socket.on("joined_OK_restaurante", (data) => {

            console.log("Evento joined_OK_restaurante", data)
            setMesas(data.restaurante.mesas)
            setMesasLibres(data.restaurante.mesasLibres)
            setBackendConectado(true)

        })

        socket.on("restaurante_actualizado", (data) => {

            console.log("Evento restaurante_actualizado", data)
            setMesas(data.restaurante.mesas)
            setMesasLibres(data.restaurante.mesasLibres)

        })

        socket.on("error_restaurante", (data) => {

            console.log("Evento error_restaurante", data)
            alert(`Error! ${data.mensaje}`)

        })

    }, [socket]);

    const [nombreClienteFormulario, setNombreClienteFormulario] = useState("")
    const [numeroMesaFormulario, setNumeroMesaFormulario] = useState(0)
    const [cantidadFormulario, setCantidadFormulario] = useState(2)

    function onClickReservarMesa() {
        if (nombreClienteFormulario == "") {
            alert("Error: El nombre del cliente está vacío")
        } else {
            socket.emit("reservar_mesa", { mozo: searchParamMozo, cliente: nombreClienteFormulario, capacidad: cantidadFormulario })
        }
    }

    return (
        <div>
            <h1>Restaurante</h1>

            <hr />

            <button
                onClick={() => { socket.emit("join_restaurante", { alumnoId: searchParamAlumnoId }) }}
            >Conectarse</button>


            {
                backendConectado && 
                <p>
                    Mozo: {searchParamMozo} <br/>
                    AlumnoId: {searchParamAlumnoId} <br/>
                    Mesas Libres: {mesasLibres}
                </p>
            }

            <hr />

            {
                backendConectado  && <FormularioMesa
                    onChangeInputCliente={(e) => { setNombreClienteFormulario(e.target.value) }}
                    onChangeInputMesa={(e) => { setNumeroMesaFormulario(e.target.value) }}
                    onSelectCapacidad={(e) => { setCantidadFormulario(e.target.value) }}
                    onClickReservarMesa={onClickReservarMesa}
                    onClickLiberarMesa={() => { socket.emit("liberar_mesa", { numeroMesa: numeroMesaFormulario }) }}
                />
            }

            <div
                style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}
            >

                {
                    mesas.map(
                        (elementoMesa) => {
                            return <MesaRestaurante
                                numeroMesa={elementoMesa.numero}
                                capacidad={elementoMesa.capacidad}
                                estado={elementoMesa.estado}
                                cliente={elementoMesa.cliente}
                                key={elementoMesa.numero}
                            />
                        }
                    )
                }

            </div>
        </div>

    )
}

export default Restaurante