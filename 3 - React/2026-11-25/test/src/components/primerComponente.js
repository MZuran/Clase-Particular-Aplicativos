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

    3)  El componente SIEMPRE debe devolver (con retrun) alguna etiqueta HTML
*/

export default function PrimerComponente() {
    
    return <div>
        <h3>Soy el componente</h3>
        <p>Hola mundo</p>
    </div>
}