export function MesaRestaurante({ numeroMesa, capacidad, estado, cliente }) {



    return (
        <>
            <div
                style={{
                width: "20vw",
                margin: 2,
                border: "2px solid black",
                borderRadius: 8,
                padding: 5
            }}
            >
                {estado === "libre" ? <p>Estado: LIBRE</p> : <p>Estado: RESERVADA - Cliente: {cliente}</p>}

                {capacidad == 2 && <p>Capacidad: 👤👤</p>}
                {capacidad == 4 && <p>Capacidad: 👤👤👤👤</p>}
                {capacidad == 6 && <p>Capacidad: 👤👤👤👤👤👤</p>}
                
                <p>Mesa #{numeroMesa}</p>
            </div>
        </>
    )
}