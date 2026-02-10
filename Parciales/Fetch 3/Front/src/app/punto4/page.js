"use client"

import { useState, useEffect } from "react";
import Jugadores from "@/components/Jugadores";

export default function Home() {

    const [listaJugadores, setListaJugadores] = useState([])

    const [jugadorSeleccionado, setJugadorSeleccionado] = useState("")
    const [equipoInput, setEquipoInput] = useState("")

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

    function onClickCambiarEquipo() {

        const body = {
            jugador: jugadorSeleccionado,
            equipo: equipoInput
        };

        fetch('http://localhost:4000/traspaso', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })

            .then(response => response.json())
            .then(data => {

                console.log(data)

                if (data.modified == true) {
                    alert(data.mensaje)
                }

            });

    }

    return (
        <div>
            <h1>Home</h1>

            <p>
                Jugador Selccionado: {jugadorSeleccionado}
            </p>

            <Jugadores
                listaJugadores={listaJugadores}
                onChangeSelect={(e) => {
                    setJugadorSeleccionado(e.target.value)
                }}
            ></Jugadores>

            <hr />
            <h3>Cambiar equipo</h3>

            <input
                type="text"
                placeholder="Ingrese el nuevo equipo"
                onChange={(e) => { setEquipoInput(e.target.value) }}
            ></input>

            <button onClick={onClickCambiarEquipo} >Cambiar equipo</button>

        </div>
    );
}
