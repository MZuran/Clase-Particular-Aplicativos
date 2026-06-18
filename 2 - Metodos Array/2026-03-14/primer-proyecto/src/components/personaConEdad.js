
export function PersonaConEdad({ edad }) {

    return (
        <>
            <hr/>
            <p>La edad es de {edad}</p>
            { edad >= 18 && <p>La edad es de un adulto</p> }
            { edad < 18 && <p>La edad es de un niño</p> }
        </>
    )
}

