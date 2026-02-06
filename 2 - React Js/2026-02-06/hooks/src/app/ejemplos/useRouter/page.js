"use client"

import React from 'react'

import { useRouter } from 'next/navigation' //  IMPORTANTE IMPORTAR DESDE NEXT/NAVIGATION

const styles = {
    blue: { color: "blue" },
    orange: { color: "orange" },
    red: { color: "red" },
    green: { color: "green" },
    purple: { color: "purple" },
}

function Page() {

    const router = useRouter()

    return (
        <div>
            <h1>Hook useRouter</h1>
            <b><i>Siempre que querramos redirigir al usuario a una nueva URL, utilizamos useRouter</i></b>
            <hr />
            <p>
                useRouter es el hook que nos permite modificar la dirección URL que va a visitar el usuario. <br/>
                Básicamente lo usamos cuando querramos <b>redireccionar</b> al usuario a una nueva página. <br/><br/>

                useRouter debe <b>ser importado desde next/navigation</b> <br/>
                <span style={styles.purple} >{"import { useRouter } from 'next/navigation'"}</span><br/><br/>

                <b>¿Cómo usamos useRouter?</b> <br/>
                La función del hook useRouter es crear un objeto llamado "router" definido de la siguiente forma: <br/><br/>

                const <span style={styles.blue} >router</span> = <span style={styles.orange} >useRouter</span>()<br/><br/>

                <b>¿Cómo usamos el objeto router?</b> <br/>
                El objeto router es un objeto que viene cargado con diversos <b>métodos</b> que nosotros queremos utilizar<br/><br/>

                <span style={styles.blue} >router</span>.<span style={styles.orange} >push</span>(<span style={styles.red} >URL</span>)<br/>

                Recibe una url (ya sea una completa o una ruta con /ruta) y redirige al usuario a destino <br/><br/>
                
                <button
                    onClick={ () => { router.push("/ejemplos/useEffect") } }
                >Redirigir</button>
                
                <br/><br/>

                <span style={styles.blue} >router</span>.<span style={styles.orange} >back</span>()<br/>

                Envía al usuario a la página previa en el historial de navegación <br/><br/>
                <button
                    onClick={ () => { router.back() } }
                >Ir atrás</button><br/><br/>

                <span style={styles.blue} >router</span>.<span style={styles.orange} >forward</span>()<br/>

                Envía al usuario a la página posterior en el historial de navegación <br/><br/>
                <button
                    onClick={ () => { router.forward() } }
                >Ir adelente</button><br/><br/>

                <span style={styles.blue} >router</span>.<span style={styles.orange} >refresh</span>()<br/>

                Refresca la página <br/><br/>
                <button
                    onClick={ () => { router.refresh() } }
                >Refrescar</button><br/><br/>

                <br/><br/><br/><br/><br/>
            </p>
        </div>
    )
}

export default Page
