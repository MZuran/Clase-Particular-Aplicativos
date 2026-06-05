/*
    Los componentes son funciones que cumplen una serie de requisitos

    1)  El nombre debe usar PascalCase

    2)  El componente debe ser exportado
            a.  Los componentes comunes se pueden exportar con "export" o "export default"
            b.  Los componentes página se exportan con "export default"

    3)  El componente siempre debe devolver (retornar) HTML
            Como mínimo, devuelve ( <></> )

    4)  El componente puede recibir props.
            Los props son parámetros que se pueden enviar por medio de etiquetas

            Para recibir los props, metemos en los paréntesis de la función {} con los datos separados por comas
            Por ejemplo 
                Doctor( { nombre, edad, apellido, etc } )

            Para enviar los props, tenemos que utilizar la etiqueta <Doctor></Doctor>
            Por ejemplo
                <Doctor nombre={"Juan"} especialidad={"cardiologo"}></Doctor>
*/

import { Nombre } from "./Nombre"
import { Especialidad } from "./Especialidad"

export function Doctor({ nombre, especialidad }) {

    return (
        <div>
            
            <hr/>

            <Nombre
                datoNombre={nombre}
            ></Nombre>

            <Especialidad
                datoEspecialidad={especialidad}
            ></Especialidad>

        </div>
    )
}