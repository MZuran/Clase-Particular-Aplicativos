"use client"

import React from 'react'

import { useSearchParams } from 'next/navigation'

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
