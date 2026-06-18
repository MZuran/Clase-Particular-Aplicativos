import React from 'react'
import { TarjetaPersona } from '@/components/TarjetaPersona'
import { personas } from '@/utils/dataPersonas'

/*
    Vamos a tomar el array de personas y lo vamos a TRANSFORMAR para pasar de:

    [ {...}, {...}, {...}, {...}, {...}, {...}, {...} ]

    a

    [ <TarjetaPersona/>, <TarjetaPersona/>, <TarjetaPersona/>, <TarjetaPersona/>, <TarjetaPersona/>,  ]
*/

function Page() {


    return (
        <div>
            <h1>Ejercicio</h1>
            <p>Esta página fué creada en <code>src/app/ejercicio</code> por lo que está en <code>localhost3000/ejercicio</code></p>
            <hr />
            
            {
                personas.map(
                    (elemento) => {
                        return <TarjetaPersona
                            nombre={elemento.nombre}
                            apellido={elemento.apellido}
                            edad={elemento.edad}
                            key={elemento.id}
                        ></TarjetaPersona>
                    }
                )
            }

        </div>
    )
}

export default Page
