/*
    ¿Qué es un componente?
        Lo describimos como una "sección" reutilizable de una aplicación.
        Una colección de Js, Etiquetas HTML y a veces otros componentes.

    ¿Qué es un componente a nivel código?
        Es un nuevo tipo de dato.

    ¿Qué es un prop?
        Un prop es un parámetro que es recibido por un componente o una etiqueta HTML

    ¿Cómo creamos un componente?
        Todos los componentes son FUNCIONES que cumplen una serie de características.

        1)  El componente utiliza PascalCase para su nombre
            PascalCase es una forma de nombrar variables en donde no hay espacios y TODAS las primeras letras son mayúsculas
            (incluyendo la primer letra de la primer palabra)

        2)  El componente debe ser EXPORTADO:
                a.  Si es un componente común, puede usar
                    export
                    o
                    export default

                b. Si es un componente página, SÓLO puede usar
                    export default

        3)  El componente SIEMPRE debe devolver algo en HTML
            Como mínimo, tiene que devolver etiquetas vacías
            ( <> </> )
            ( <div> </div> )

        4)  Si queremos utilizar Js en nuestro componente, debe ir antes del return

        5)  Si queremos recibir parámetros, los tenemos que recibir en forma de PROPS
            Para recibir parámetros en forma de props, tenemos que recibir en la función el objeto anónimo y
            meterle entre comas toda la información que esperamos recibir

            Por ejemplo 
            export function Persona( {nombre, apellido, edad, etc} ) {...}

            Para enviar los props, debemos expandir la etiqueta de apertura y escribir
            clave={ valor }

            <Persona apellido={ "Zuran" } ></Persona>
*/

// Quremos crear el componente persona
export function Persona( { apellido, edad } ) {

    // Acá podemos escribir código
    // apellido

    return (
        <>
            <p>Hola mi nombre es {apellido} y tengo {edad} años</p>
        </>
    )
}