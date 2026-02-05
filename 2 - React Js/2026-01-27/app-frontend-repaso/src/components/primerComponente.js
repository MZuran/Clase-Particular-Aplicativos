/*
    Características de las funciones componentes

    1)  El nombre de los componentes siempre debe usar PascalCase

        Tenemos la variable llamada "variable uno"

        camelCase:  variableUno
        PascalCase: VariableUno
        snake_case: variable_uno

    2)  El componente siempre debe retornar por lo menos un HTML vacío entre paréntesis

        (<></>)

    3)  El componente SIEMPRE SE DEBE EXPORTAR

        a)  Si el componente es COMÚN, se puede usar
            "export" o "export default"

        b)  Si el componente es un componente PÁGINA, siempre se debe usar
            "export default"

    4)  Un componente es la combinación de HTML y Js
        Si queremos escribir código de Js en el componente, debemos hacerlo antes del return
        El HTML que se va a dibujar en pantalla (renderizar) va dentro del return

    5)  Los componentes pueden recibir parámetros
        Siempre que un componente (o etiqueta de html) reciba un parámetro, lo vamos a llamar "prop"

        Los "props" se reciben en forma de objeto
        Se puede usar el objeto "props"
        Se puede usar un objeto anónimo (Sin nombre)

        La forma de "pasarle props" a un componente, es la siguiente:

        <SegundoComponente
            nombre={"Alex"}
            apellido={"Ogan"}
            edad={22}
        ></SegundoComponente>
*/

export function PrimerComponente( props ) {

    // props.nombre
    // props.apellido
    // props.edad

    return (
        <>
            <hr/>
            <p>Soy el componente que hiciste antes</p>
        </>
    )
}

export function SegundoComponente( { nombre, apellido, edad } ) {

    // nombre
    // apellido
    // edad

    return (
        <>
            <hr/>
            <p>
                Mi nombre es: {nombre} <br/>
                Mi apellido es: {apellido} <br/>
                Mi edad es: {edad}
            </p>
        </>
    )
}