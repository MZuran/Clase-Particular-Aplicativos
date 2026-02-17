import React from 'react'

// { condicion && renderizado }
// { condicion ? renderizadoTrue : renderizadoFalse }

// 👥

export function MesaRestaurante(props) {

    // props.numeroMesa
    // props.capacidad
    // props.estado
    // props.cliente

    return (
        <div style={{
            border: "3px solid black",
            borderRadius: "8px",
            width: "20vw",
            padding: "10px",
            margin: "5px"
        }}  >
            {props.estado == "libre" ? <p>LIBRE</p> : <p>RESERVADA - Cliente: {props.cliente}</p>}
            {props.capacidad == 2 && <p>👥</p>}
            {props.capacidad == 4 && <p>👥👥</p>}
            {props.capacidad == 6 && <p>👥👥👥</p>}
            <p>Mesa #{props.numeroMesa}</p>
        </div>
    )
}