/*
    La tarjeta recibe nombre y edad
*/

export function Tarjeta(props) {

    return (
        <div>
            <p>
                Hola, me llamo {props.nombre} <br/>
                Tengo {props.edad} años
            </p>
        </div>
    )
}