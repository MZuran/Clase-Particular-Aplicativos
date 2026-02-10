import React from "react";

function Jugadores({ vectorJugadores, onChangeSelect }) {
    return (
        <select onChange={onChangeSelect}>

            {vectorJugadores.map((elemento) => {

                return (
                    <option value={elemento.nombre} key={elemento.nombre} >
                        {elemento.nombre} - {elemento.equipo}
                    </option>
                );

            })}

        </select>
    );
}

export default Jugadores;   



