/*
    En este archivo de Js, vamos a crear nuestro primer componete
    ¿Qué es un componente en react?

    Un componente es una FUNCIÓN que se crea siguiendo ciertas normas;

    1)  Su nombre debe seguir la conveción PascalCase
            snakeCase
            PascalCase
            camel_case

    2)  El componente debe ser exportado
            Exportamos componentes escribiendo
            export default antes de function

    3)  El componente SIEMPRE debe devolver (con return) alguna etiqueta HTML

    4)  Si queremos utilizar Js dentro de alguna etiqueta html, debemos
        encerrar el código entre llaves {}

    5)  Si queremos que el componente RECIBA INFORMACIÓN
        Debemos recibir información en forma de "prop"

        Para recibir información en forma de "prop", encerramos los parámetros
        recibidos entre llaves

    6)  Si queremos usar props dentro de un componente, lo hacemos de la siguiente
        forma

        <Dni nombreProp={valorProp} > </Dni>
        <Dni nombre={"Matias"} etc ></Dni>
*/

/*
    Este componente debe mostrar:
        nombre, apellido, fechaNacimiento
*/
export default function Dni({nombre, apellido, fechaNacimiento}) {

    return <div>
        <hr/>
        <p>
            Nombre: {nombre} <br/>
            Apellido: {apellido} <br/>
            Fecha de nacimiento: {fechaNacimiento}
        </p>
    </div>
}