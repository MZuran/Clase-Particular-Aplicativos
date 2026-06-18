"use client"

import React from 'react'
import { useSearchParams } from 'next/navigation'

/*
  ¿Qué son los search params?
    Los search params son un OBJETO que se escribe en la string de la url.

  ¿Cuál es la sintaxis de los search params?
    Los search params siempre se escriben al final de un url.
    El caracter que indica el comienzo de un search param es ?
    Después del caracter ? escribimos DUPLAS de clave=valor separados por 
    
  ¿Qué es useSearchParams?
    Es el hook que nos permite "leer" los search params en el url del cliente

  ¿Cómo se usa el useSearchParams?
    1)  Escribimos el string "use client"

    2)  Importamos useSearchParams desde "next/navigation"

    3)  Creamos el objeto searchParams

          const searchParams = useSearchParams()

    4)  Utilizamos los métodos del objeto searchParams

  ¿Cuáles son los métodos del objeto searchParams?
    searchParams.get("clave")
*/

const styles = {
    blue: { color: "blue" },
    orange: { color: "orange" },
    red: { color: "red" },
    green: { color: "green" },
    purple: { color: "purple" },
}

function Page() {

    const searchParams = useSearchParams()

    return (
        <div>
            <h1>Hook useSearchParams</h1>
            <b><i>Si queremos leer los search params escritos en nuestro URL, utilizamos este hook</i></b>
            <hr /> 
            <p>
                El valor de la clave nombre es: {searchParams.get("nombre")} <br />
                El valor de la clave edad es: {searchParams.get("edad")}
            </p>
            <hr />

            <p>
                useSearchParams es un hook que nos permite leer la información anidada en los searhc params de nuestro url. <br />
                Siempre que un url tenga el símbolo del signo de pregunta, estamos ante un url que está usando un search param, por ejemplo: <br /><br />
                https://www.google.com/search<b>?nombre=matias&edad=22</b><br /><br />

                En este caso, este url tiene el siguiente objeto: <br />
                <code> {" { nombre: 'matias', edad: '22' } "} </code><br /><br />

                <b>¿Cómo se usa el useSearchParams?</b><br />
                Debemos importar el hook desde <i>next/navigation</i> y inicializar un objeto <b>searchParams.</b><br /><br />

                <span style={styles.purple} >{"import { useSearchParams } from 'next/navigation'"}</span><br /><br />
                const <span style={styles.blue} >searchParams</span> = <span style={styles.orange} >useSearchParams</span>()<br /><br />

                El objeto searchParams es importante por sus <b>métodos</b><br /><br />

                <span style={styles.blue} >searchParams</span>.<span style={styles.orange} >get</span>(<span style={styles.red} >"clave"</span>)<br /><br />

                Recibe una clave del search params y devuelve su valor. <br />
                En caso de pedir por ejemplo searchParams.get("nombre"), obtendríamos "matias" <br /><br />


                <br /><br /><br /><br /><br />
            </p>
        </div>
    )
}

export default Page
