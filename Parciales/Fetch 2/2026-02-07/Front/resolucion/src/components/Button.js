/*
    ¿Cómo creamos un componente?

    1   -   Creamos una función
    2   -   La exportamos
    3   -   Usamos PascalCase
    4   -   Retornamos HTML
    5   -   Recibimos props
*/


export function Button( props ) {

    // props.onClick
    // props.text

    return (<button onClick={props.onClick} >{props.text}</button>)
}