/*
    Cómo hacemos que "suceda algo" al presionar un botón?

    El "algo" que queremos que suceda siempre va a ser una función
    Las 2 principales formas de escribir una función son:

        a)  Las funciones declaradas

            function duplicar(x) { return 2*x }

        b)  Las función flecha (también llamadas funciones lambda o funciones anónimas)

            () => {}    (Expresión mínima)

            const duplicar = (x) => { return 2*x }




    Si nosotros le agregamos paréntesis a una variable que contiene una función, la función "corre" o "se ejecuta"
    duplicar(2) -   EJECUTAR LA FUNCIÓN

    Si nosotros NO le agregamos paréntesis a una variable que contiene una función, el programa devuelve el código de la función
    duplicar    -   DECLARACIÓN DE LA FUNCIÓN
*/

"use client"

export default function Boton() {

    function saludar() {
        console.log("Hola")
    }

    // onClick

    return (
        <>
            <h1>Ejemplo del botón</h1>
            <button onClick={saludar} >Haceme click</button>
        </>
    )
}