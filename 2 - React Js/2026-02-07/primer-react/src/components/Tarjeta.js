/*
    ¿Qué es un componente de react?

    Los componentes de react son FUNCIONES con un número de características especiales.

    1)  El componente debe usar PascalCase

    2)  El componente se debe exportar

        -   Si es un componente común (/components) se exporta con:
            "export" o "export default"

        -   Si es un componente página (/app) se exporta con:
            "export default"

    3)  Siempre debe retornar HTML
        Como mínimo una etiqueta vacía (<></>)

    4)  Los componentes deben recibir parámetros en forma de "props"

        Un prop es un parámetro que recibe un componente o un HTML

        Los props SIEMPRE se reciben dentro de un objeto.

        Para ENVIAR props a una etiqueta, se hace lo siguiente
        <Tarjeta nombre={"Matias"} edad={22} />
*/

export function Tarjeta({ nombre, apellido, edad, genero }) {

    /*
        Si la persona es mayor, se mostrará un <p> que diga "Persona Adulta"
        edad >= 18

        Si la persona es menor, se mostrará un <p> que diga "Persona Menor"
        edad < 18

        ¿Cómo hacemos el conditional rendering?
        Existen 2 formas de hacerlo:

        1)  { condición && renderizado }
        2)  { condición ? renderizadoTrue : renderizadoFalse }
    */

    return (
        <div>
            <hr />
            <p>
                Mi nombre es {nombre} {apellido} <br />
                Tengo {edad} años
            </p>

            {edad >= 18 && <p>Persona Adulta</p>}
            {edad < 18 && <p>Persona Menor</p>}

            { genero == "M" ? <p>Hombre 👨</p> : <p>Mujer 🧑</p> }

        </div>
    )
}

/*
    Tabla de tipos de datos:

    Número
    Booleano        -   true / false
    String          -   " " / ' ' / ` `
    Funciones       -   () => { }
    Objetos         -   { }
    Array           -   [ ]

    React nos añade 2 tipos de datos nuevos:

    HTML            -   <div> </div>            /   <div/>
    Componente      -   <Tarjeta> </Tarjeta>    /   <Tarjeta/>
*/