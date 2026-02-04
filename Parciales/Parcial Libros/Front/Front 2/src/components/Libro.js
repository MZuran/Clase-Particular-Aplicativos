
export function Libro({ nombre, valoracion }) {

    return (<>
        <div style={{ width: "25vw", border: "1px solid black", margin: 5, padding: 5 }}>
            <h4>{nombre}</h4>
            <p>Valoración: {valoracion}</p>
        </div>
    </>)
}