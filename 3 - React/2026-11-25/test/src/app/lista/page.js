/*
    Este archivo requiere acceso a las siguientes cosas:
        1)  La lista de personas    (en src/utils/listaPersonas.js)
        2)  El componente Dni       (en src/components/dni.js)
*/

import personas from "@/utils/listaPersonas"
import Dni from "@/components/dni"

/*
    Si un componente, dentro de su return, muestra un array de js con componentes adentro;
        Lo trata como si estuviera uno abajo de otro

        por ejemplo:
        const lineas = [<hr/>,<hr/>,<hr/>,<hr/>,<hr/>]

        Lo que nosotros queremos hacer va a ser
        TRANSFORMAR UNA LISTA de objetos a una lista de componentes DNI

        [{...},{...},{...},{...},{...},{...},{...},{...}]

        Y debemos transformarlo a

        [<Dni></Dni>,<Dni></Dni>,<Dni></Dni>,<Dni></Dni>,<Dni></Dni>,<Dni></Dni>]
*/

export default function Lista() {
    return <div>
        <h1>Listado de personas</h1>

        {
            personas.map(
                (elementoActual) => {
                    return <Dni
                        nombre={elementoActual.nombre}
                        apellido={elementoActual.apellido}
                        fechaNacimiento={elementoActual.fechaNacimiento}
                        key={elementoActual.dni}
                    ></Dni>
                }
            )
        }

    </div>
}