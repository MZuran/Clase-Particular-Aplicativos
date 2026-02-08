export function MesaRestaurante(props) {

    // props.numeroMesa
    // props.capacidad
    // props.estado
    // props.cliente

    // { condicion && renderizado }
    // { condicion ? renderizadoTrue : renderizadoFalse }
    // 👥

    return (
        <div
            style={{
                width: "20vw",
                border: "2px solid black",
                borderRadius: "12px",
                padding: "12px",
                margin: 5
            }}
        >

            {props.estado == "libre" ? <p>LIBRE</p> : <p>RESERVADA - Cliente: {props.cliente}</p>}

            {props.capacidad == 2 && <p>👥</p>}
            {props.capacidad == 4 && <p>👥👥</p>}
            {props.capacidad == 6 && <p>👥👥👥</p>}

            <p>Mesa #: {props.numeroMesa}</p>

        </div>
    )
}

/*
    =       -   Asignación   
    ==      -   Comparación igualdad débil
    ===     -   Comparación igualdad fuerte
*/