// este va a ser un componente que muestre datos
// yo quiero recibir los props nombre y edad

/*
    Dentro de una etiqueta HTML, ¿Cómo usamos javaScript?
    Para usar javaScript dentro de una etiqueta HTML, debemos encerrar
    el código entre llaves {}
*/

/*
    ¿Cómo le pasamos props al componente Persona?
    <Persona nombre={"Matias"} edad={22} > </Persona>
*/

export function Persona( { nombre, edad } ) {

    return (
        <>
            <hr />
            <h4>Persona</h4>
            <p>
                Mi nombre es: {nombre} <br/>
                Tengo {edad} años.
            </p>
            { edad < 18 && <p> {nombre} es menor de edad </p> }
        </>
    )
}

