/*
    ¿Qué es un componente en react?

    Un componente es básicamente una función con un número de "características especiales"

    1)  El componente debe usar PascalCase

        PascalCase 
        camelCase
        snake_case

    2)  El componente debe ser exportado

            -   Si es un componente común, se puede exportar con:
                "export"
                "export default"

            -   Si es un componente página, SÓLO se puede exportar con:
                "export default"

    3)  El componente debe retornar HTML
        Como mínimo debe retornar (<></>)

    4)  Pueden recibir parámetros (entre los paréntesis)
        A diferencia de las funciones comunes, los componentes deben recibir parámetros según el objeto "props"

        Un prop es un parámetro enviado a una etiqueta HTML o a un componente.

        Para recibir props se pone el objeto props entre paréntesis y luego se accede con .clave
        Por ejemplo props.nombre

        Para enviarle props a un HTML o un componente, se hace de la siguiente forma:

        <Tarjeta
            nombre={"Matias"}
            edad={22}
        ></Tarjeta>

*/

export function PrimerComponente() {

    return <div>
        <h3>Primer Componente</h3>
        <p>Hola soy el primer componente</p>

        <div></div>
    </div>
}

/*
    Tipos de datos:

    Números             -   Cualquier número
    Booleanos           -   True / False
    Strings             -   " "
    Objetos             -   { clave:valor }
    Arrays              -   [ ]
    Funciones           -   () => {}

    Tipos de datos nuevos:

    HTML                -   <page> </page>
    Componentes         -   <Tarjeta> </Tarjeta>
*/