/*
    Crear un componente común que reciba los siguientes props:

    props.nombre
    props.apellido
    props.edad

    Si la persona tiene menos de 18 años, el componente debe escribir niño/a
    Si la persona tiene 18 años o más, el componente debe escribir persona adulta

    { condicion && renderizado }
*/

export function TarjetaPersona(props) {

    return (
        <div>
            <hr />
            <p>
                Mi nombre es {props.nombre} {props.apellido} <br />
                Tengo {props.edad} años.
            </p>

            { props.edad < 18 && <p>Esta persona está en la niñez</p> }
            { props.edad >= 18 && <p>Esta persona es adulta</p> }
        </div>
    )
}