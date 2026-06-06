// { condicion && HTML }

export function MesaRestaurante({ numeroMesa, capacidad, estado, cliente }) {

    return (
        <>
            <div
                style={{
                    width: "20vw",
                    border: "1px solid black"
                }}
            >
                <p>Mesa N°: {numeroMesa}</p>

                {estado == "libre" && <p>LIBRE</p>}
                {estado == "reservada" && <p>RESERVADA - Cliente: {cliente}</p>}


                {capacidad == 2 && <p>👥</p>}
                {capacidad == 4 && <p>👥👥</p>}
                {capacidad == 6 && <p>👥👥👥</p>}
            </div>
        </>
    )
}

