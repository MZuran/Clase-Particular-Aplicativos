const ciudad = "Buenos Aires"

const persona = {
    nombre: "Alex",
    apellido: "Ogan",
    edad: 22
}

const abecedario = ["a", "b", "c", "d", "e"]

/*
    1)  ¿Qué es un array?

        Es una lista de valores (datos) que utiliza el sistema de indexado.
    
    2)  ¿Cuál es la mínima expresión de un array?

        []

    3)  ¿Qué le debo concatenar a un array para acceder a un dato?

        Le concatenamos entre corchetes una posición (o índice)

    4)  ¿Qué es un método?

        Una función guardada adentro de un objeto.

    5)  ¿Qué es un callback?
        Un callback es una función que se pasa por parámetro a otra función.
        "Si un parámetro es una función, le decimos callback"
*/

/*
    TIPOS DE DATOS:

    Numeros
    Booleanos
    Strings             -   " "
    Objetos             -   { }             -      Concatenar .clave 
    Funciones           -   () => {}        -      Concatenar paréntesis para ejecutar
    Arrays              -   [ ]             -      Concatenar [posicion]

*/

/* MÉTODOS DE ARRAYS */
// *****************************************************************
/*
    array.pop()
    
    Lo que hace:    Elimina el último elemento de la lista.

    Recibe:         Nada.

    Devuelve:       El elemento eliminado de la lista.
*/

//console.log(abecedario)
//const elementoEliminado = abecedario.pop()
//console.log(abecedario)
//console.log("El elemento eliminado es: " + elementoEliminado)

// *****************************************************************
/*
    array.push()
    
    Lo que hace:    Agrega un nuevo elemento al último lugar de una lista.

    Recibe:         El elemento que vamos a agregar.

    Devuelve:       El nuevo largo de la lista. El "largo" es un número que representa
                    la cantidad de elementos que existen en la lista. (array.length)
*/

//console.log(abecedario)
//const nuevoLargo = abecedario.push("f")
//console.log(abecedario)
//console.log("La lista ahora tiene " + nuevoLargo + " elementos")

// *****************************************************************
/*
    array.forEach()
    
    Lo que hace:            Crea un loop similar al loop for.
                            Hace que una función se ejecute repetidas veces.
                            La función se ejecuta una vez para cada elemento.

    Recibe:                 Callback.  (Recibe una función)

    Devuelve:               Nada necesariamente.

    (Callback)  Recibe:     Un elemento de la lista.
                            Este elemento puede tener cualquier nombre. (Generalmente le llamamos "elemento")

    (Callback)  Devuelve:   Nada necesariamente.
*/

function mostrarEnConsola(texto) {
    console.log("El texto dado es " + texto)
}

// Callback por referencia a función
abecedario.forEach( mostrarEnConsola )

// Callback por función anónima
abecedario.forEach( 
    (elemento) => {
        console.log("El texto dado (función anónima) es: " + elemento)
    } 
)


// Calcular promedios

const notas = [5, 6, 7, 8, 9, 10]

/*
    1)  Debemos sumar todas las notas

        "Para cada nota de la lista, debemos sumar la nota a la sumatoria"

    2)  Dividir la sumatoria por la cantidad de notas
*/

function calcularPromedio(listaNotas) {

    let sumatoria = 0
    let cantidadNotas = listaNotas.length

    listaNotas.forEach(
        (nota) => {
            sumatoria = nota + sumatoria
            // Las notas son [1,5,10]
            // sumatoria = 1 + 0    -   Sumatoria ahora es 1
            // sumatoria = 5 + 1    -   Sumatoria ahora es 6
            // sumatoria = 10 + 6   -   Sumtoria ahora es 16
        }
    )

    const promedio = sumatoria / cantidadNotas
    return promedio
}

// *****************************************************************
/*
    array.map()
    
    Lo que hace:            Crea un loop similar al loop for.
                            Hace que una función se ejecute repetidas veces.
                            La función se ejecuta una vez para cada elemento.

                            Crea un NUEVO ARRAY que contiene lo que devuelve la función para cada elemento.
                            NO MODIFICA EL ARRAY ORIGINAL, SINÓ QUE CREA UNO NUEVO AL DEVOLVER

    Recibe:                 Callback.  (Recibe una función)

    Devuelve:               Un nuevo array "transformado" según el callback.
                            (Si el callback es para cocinar, devuelve un un array de elementos cocinados)

    (Callback)  Recibe:     Un elemento de la lista.
                            Este elemento puede tener cualquier nombre. (Generalmente le llamamos "elemento")

    (Callback)  Devuelve:   Algo.
*/

const arrayNumerico = [1,2,3,4]

function duplicar(x) {
    return 2*x
}

// Yo quiero "transformar" el array para multiplicar a todos sus elementos

// Mapeo por referencia
const arrayDuplicado = arrayNumerico.map( duplicar )

// Mapeo por función anónima
const arrayTriplicado = arrayNumerico.map( (numero) => { return numero*3 } )

// *****************************************************************
/*
    array.filter()
    
    Lo que hace:            Crea un loop similar al loop for.
                            Hace que una función se ejecute repetidas veces.
                            La función se ejecuta una vez para cada elemento.

                            Crea un NUEVO ARRAY que contiene los elementos que "pasaron el filtro"
                            dado por el callback.

    Recibe:                 Callback.  (Recibe una función)

    Devuelve:               Un nuevo array "filtrado" según el callback.

    (Callback)  Recibe:     Un elemento de la lista.
                            Este elemento puede tener cualquier nombre. (Generalmente le llamamos "elemento")

    (Callback)  Devuelve:   True o False.
                            Si callback(elemento) es True, entonces el elemento "pasa el filtro"
                            Si callback(elemento) es False, entonces el elemento "no pasa el filtro"

                            veggie(🍔) === False    -   La hamburguesa NO APARECERÁ EN LA LISTA FILTRADA
                            veggie(🥬) === True     -   La lechuga SÍ APARECERÁ EN LA LISTA FILTRADA
*/

const edades = [15,16,17,18,19,20]

// Quiero filtrar esas edades que se consideren adultas
const edadesFiltradas = edades.filter( (numero) => { return numero >= 18 } )