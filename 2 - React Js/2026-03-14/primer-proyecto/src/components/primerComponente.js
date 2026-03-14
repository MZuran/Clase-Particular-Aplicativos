/*
    ¿Qué es un componente?
    Un componente de react es una función que cumple un cierto número de características.

    1)  La función debe usar PascalCase

        camelCase
        snake_case
        PascalCase

    2)  Siempre deben devolver HTML
        Como mínimo debemos devolver etiquetas vacías (<></>)

    3)  El componente debe recibir parámetros en forma de props
        "props" es el objeto que contiene los parámetros del componente.

        function MiComponente({ nombre, apellido }) {}

    4)  El componente se debe exportar

        Si estamos haciendo un componente común (dentro de src/components)
        Podemos usar:

            export
            export default

        Si estamos haciendo un componente página (dentro de src/app)
        Sólamente podemos usar:

            export default
*/

// queremos un componente que reciba nombre y apellido

function MiComponente2(props) {

    // props.apellido

    return (<></>)
}

export function MiComponente({ apellido }) {

    return (
        <>
            <p>Hola soy matiassss</p>
        </>
    )
}

/*
    Tabla de tipos de datos

    Numeros
    Booleanos
    Strings     -   " "     
    Arrays      -   []          -   Concatenamos [posicion]
    Funciones   -   () => {}    -   Concatenamos (parametros)
    Objetos     -   {}          -   Concatena .clave

    React nos añade 2 nuevos tipos de datos:

    La etiqueta HTML    -   <h1></h1>
    El componente       -   
*/