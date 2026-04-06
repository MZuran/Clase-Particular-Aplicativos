import { Persona } from "@/components/Persona"
import { listaPersonas } from "@/utils/listaPersonas"

/*
    Transformar la listaPersonas para que todos sus elementos se vuelvan un 
    componente persona. Renderizar el resultado.
*/

export default function PaginaLogin() {

    return (
        <div>
            <h1>Login</h1>

            {
                listaPersonas.map(

                    (elementoPersona) => {

                        return <Persona
                            nombre={elementoPersona.nombre}
                            apellido={elementoPersona.apellido}
                            edad={elementoPersona.edad}
                            arrayNotas={elementoPersona.arrayNotas}
                            key={elementoPersona.dni}
                        />
                    }

                )
            }

            <Persona nombre={"Matias"} apellido={"Zuran"} />
            
        </div>
    )
}