/*
    Tipos de datos:

    Numbers

    Strings     -   ""
                    ''
                    ´´
    
    Booleanos   -   true / false

    Funciones   -   () => {}        -   Concatena (parametros)

    Arrays      -   []              -   Concatena [posicion]

    Objetos     -   {}              -   Concatena .clave

*/

const ciudad = "Buenos Aires"

const abecedario = ["a", "b", "c", "d", "e"]

const edades = [15,16,17,18,19,20]

const persona = {
    nombre: "Matias",
    edad: 22
}

/* ********************************************* ARRAY.POP ********************************************* */
/*
    1) ¿Qué hace el método?

        Toma el último elemento de la lista y lo saca de la lista y lo devuelve.

    2) ¿Qué parametros recibe el método?

        Nada.

    3) ¿Qué devuelve el método?

        El elemento eliminado.
*/

/* ********************************************* ARRAY.PUSH ********************************************* */
/*
    1) ¿Qué hace el método?

        Agrega elementos al final de un array.

    2) ¿Qué parametros recibe el método?

        El elemento que vamos a agregar.

    3) ¿Qué devuelve el método?

        El nuevo array.length
*/

/* ********************************************* ARRAY.FOREACH ********************************************* */

// Hacer un for que haga un console.log de todos los elementos del array abecedario

for ( let i = 0 ; i < abecedario.length ; i = i + 1 ) {

    const elementoActual = abecedario[i]
    console.log("El elemento actual es", elementoActual)

}

// Callback: Es una función que se pasa por parámetro a otra función

/*
    1) ¿Qué hace el método?

        Ejecuta un callback para cada uno de los elementos de un array

    2) ¿Qué parametros recibe el método?

        Callback

    3) ¿Qué devuelve el método?

        Nada

    4) ¿Qué parámetros recibe el callback?

        Recibe un parámetro que va a simbolizar el elemento actual.
        (Opcionalmente) Se recibe un segundo parámetro que simboliza la "posición"

    5) ¿Qué debe devolver el callback?

        Nada
*/

function mostrarEnConsola(x, i) {
    console.log("El elemento recibido es", x, "en la posicion", i)
}

abecedario.forEach(mostrarEnConsola)    //  Callback por refencia

abecedario.forEach( (x,i) => {          //  Callback por función flecha
    console.log("El elemento actual es", x, "en la posicion", i, "(Funcion flecha)")
} )

// ["a", "b", "c", "d", "e"].forEach(callback)
/*
    callback("a")
    callback("b")
    callback("c")
    ...
*/

console.clear()

/* ********************************************* ARRAY.FILTER ********************************************* */

/*
    1) ¿Qué hace el método?

        Ejecuta un callback para cada uno de los elementos de un array.
        Devuelve un nuevo array filtrado según la configuración del callback.
        NO MODIFICA EL ARRAY ORIGINAL, SINO QUE CREA UNO NUEVO

    2) ¿Qué parametros recibe el método?

        Callback

    3) ¿Qué devuelve el método?

        Devuelve un array nuevo filtrado

    4) ¿Qué parámetros recibe el callback?

        Recibe un parámetro que va a simbolizar el elemento actual.
        (Opcionalmente) Se recibe un segundo parámetro que simboliza la "posición"

    5) ¿Qué debe devolver el callback?

        Devuelve un booleano
        Si callback(elemento) == true, entonces el elemento va a aparecer en el array filtrado
        Si callback(elemento) == false, entonces el elemento NO va a aparecer en el array filtrado
*/

// Yo quiero filtrar todas las edades mayores de edad

const edadesFiltradas = edades.filter( 
    (e) => { 
        return e >= 18 
    } 
)

edades.filter( e => e >= 18 )

console.clear()

/* ********************************************* ARRAY.MAP ********************************************* */

/*
    1) ¿Qué hace el método?

        Ejecuta un callback para cada uno de los elementos de un array.
        Devuelve un nuevo array TRANSFORMADO después de pasar el callback por cada elemento
        NO MODIFICA EL ARRAY ORIGINAL

    2) ¿Qué parametros recibe el método?

        Callback

    3) ¿Qué devuelve el método?

        Devuelve un array nuevo transformado

    4) ¿Qué parámetros recibe el callback?

        Recibe un parámetro que va a simbolizar el elemento actual.
        (Opcionalmente) Se recibe un segundo parámetro que simboliza la "posición"

    5) ¿Qué debe devolver el callback?

        Debe devolver cualquier cosa.
        Lo que devuelva el callback del elemento, va a tomar la posición del elemento en el nuevo array
        Por ejemplo

        cuadruplicar(2) == 8
        8 va a tomar el lugar de 2
*/

const triplicar = x => 3*x

const edadesTriplicadas = edades.map(triplicar)

const edadesCudruplicadas = edades.map( (x) => { return 4*x } )