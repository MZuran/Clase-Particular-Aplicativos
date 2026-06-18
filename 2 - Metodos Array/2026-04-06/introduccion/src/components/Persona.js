// Conditional rendering
/*
    Sintaxis del conditional rendering:

        1)

        { condicion && renderizado }

        
                Si la condición es true, se muestra el renderizado

                { edad >= 18 && <p>Persona Adulta</p> }

        2)

        { condicion ? renderizadoTrue : renderizadoFalse }

                { edad >= 18 ?
                    <p>Persona adulta</p> :    
                    <p>Niño</p>
                }
    
*/



/*
    Hacer un componente que reciba los props:

    nombre, apellido, edad, arrayNotas

    Renderizar el nombre, apellido y si la persona es mayor de edad.
*/

export function Persona({ nombre, apellido, edad, arrayNotas }) {

    return (
        <div>
            <hr/>
            <p>
                Nombre: {nombre} {apellido}

                { edad >= 18 ? <p>Persona Adulta</p> : <p>Niño</p> }

                El promedio es: calcularPromedio()
            </p>
        </div>
    )
}

