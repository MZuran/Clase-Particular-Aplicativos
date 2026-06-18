/*
    ¿Qué es un componente?

    Un componente es una función de javascript que cumple ciertas características

        1)  El componente debe utilizar la convención PascalCase

        camelCase
        PascalCase
        snake_case

        2)  El componente SIEMPRE DEBE RETORNAR HTML

        return (<div></div>)

        3)  Los componentes se deben exportar

            Los componentes comunes se pueden exportar con:

            export
            export default

            Los componentes página SIEMPRE se deben exportar con:

            export default

        4)  Los componentes pueden recibir parámetros, PERO deben recibirlos en forma de "props"

                export function Titulo( { nombre, apellido } ) { ... }

            Para enviar props se hace con la sintaxis:

                <Titulo nombre={...} apellido={...}></Titulo>
*/

// Recibe por prop un nombre y apellido

/* 
    export function Titulo( props ) {

        const nombre = props.nombre
        const apellido = props.apellido

        return (
            <div>
                <h1>Hola Mundo</h1>
                {props.nombre}
            </div>
        )
    }
*/

export function Titulo( { nombre, apellido } ) {

    return (
        <div>
            <hr/>
            <h1>Hola Mundo</h1>
            <p>
                Mi nombre es: {nombre} <br/>
                Mi apellido es: {apellido}
            </p>
        </div>
    )
}














/*
    Método  -   Una función dentro de un objeto
    Callback-   Una función pasada por parámetro a otra función
    Prop    -   Es un parámetro recibido por un HTML o componente dentro de un objeto
*/