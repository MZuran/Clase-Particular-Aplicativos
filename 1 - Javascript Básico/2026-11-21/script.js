/*
    Repaso Clase 1:
        ¿Qué es un objeto?
        Una colección de datos que utiliza el sistema clave:valor

        ¿Qué es un array?
        Una colección de datos ordenada (lista). Utiliza el sistema de indexado.

        ¿Qué es un método?
        Un método es una función almacenada dentro de un objeto

        Tipo Dato   -   Mín Expresión   -   Cómo se utiliza el tipo de dato

        string      -   " ", ' ', ` `   -
        number      -   0, 1, 2, etc    -
        booleano    -   true, false     -
        funcion     -   () => {}        -   Le concatenamos (parámetros) para ejecutar
        objeto      -   {}              -   Le concatenamos .clave
        array       -   []              -   Le concatenamos [posicion]
*/

const abecedario = ["a", "b", "c", "d", "e", "f", "g", "i"]

abecedario[0] === "a"

const persona = { nombre: "Matias", apellido: "Zuran" }

// ******************************** Repaso FOR ********************************
/*
    El for es una estructura de repetición que hace que un bloque de código se ejecute
    n veces según cómo configuremos el for
*/

// ******************************** CLASE 2 ********************************

//  Callback:   Es una función que se envía como parámetro a otra función
//  Método:     Es una función almacenada dentro de un objeto

/*
    En JavaScript, el lenguaje de programación está diseñado internamente de forma tal que
    "todo es un objeto"

    Cada vez que nosotros creamos un array en Js, internamente lo que hace el lenguaje de programación
    es "crear" un nuevo objeto que se comporta como un array.

    Al "crear" este objeto, le mete la información de la lista PERO ADEMÁS le mete algunas claves útiles
    para la utilización de arrays.

        Por ejemplo, array.length es una de las claves que mete Js sin avisar 
        Y su valor es la cantidad de elementos del array


    ¿Sabemos agregar un nuevo elemento a un array existente?
        Sin los métodos de array no podríamos hacerlo

    ¿Sabemos quitar un elemento a un array existente?
        Sin los métodos de array no podríamos hacerlo
*/

// ******************************** ARRAY.PUSH() ********************************
/*
    array.push() es un método -> todos los métodos son funciones -> array.push() es una funcion

    Las funciones suelen recibir información    -   Parámetro
    Las funciones suelen devolver información   -   Return
    Las funciones suelen "hacer algo"           

    ¿Qué hace array.push()?
        Agrega un elemento al final de un array existente.

    ¿Qué parámetros recibe array.push()?
        Sólamente recibe 1 parámetro. Este parámetro es el elemento que vamos a agregar.

    ¿Qué devuelve array.push()?
        Devuelve el nuevo largo del array después de meterle un elemento.
*/

// ******************************** ARRAY.POP() ********************************
/*
    array.pop() es un método -> todos los métodos son funciones -> array.pop() es una funcion

    Las funciones suelen recibir información    -   Parámetro
    Las funciones suelen devolver información   -   Return
    Las funciones suelen "hacer algo"           

    ¿Qué hace array.pop()?
        Quita el último elemento de un array existente.

    ¿Qué parámetros recibe array.pop()?
        Ninguno.

    ¿Qué devuelve array.pop()?
        Devuelve el elemento que recién quitó del array.
*/

const notas = [10, 9, 8, 7, 6]

const notaX = notas.pop()       //  Sabemos que notaX es igual a 6
const notaY = notas.pop()       //  NotaY es igual a 7

// ******************************** ARRAY.FOREACH() ********************************
/*
    For Each quiere decir "Para cada uno"
    Lo que hace el método array.forEach es ejecutar una función "para cada uno de los elementos del array"

    array.forEach() es un método -> todos los métodos son funciones -> array.forEach() es una funcion

    TODAS LAS FUNCIONES: 
    Las funciones suelen recibir información    -   Parámetro
    Las funciones suelen devolver información   -   Return
    Las funciones suelen "hacer algo"           

    (Función array.forEach)
    ¿Qué hace array.forEach()?
        Ejecuta una función (la cual vamos a llamar "callback") para cada uno
        de los elementos del array.

    ¿Qué parámetros recibe array.forEach()?
        Recibe una función callback. Callback se puede expresar como referencia de función
        o como función flecha.

    ¿Qué devuelve array.forEach()?
        Undefined

    (Función callback)
    ¿Qué hace callback?
        Callback hace lo que necesite que haga el programador. 
        No tiene ninguna función fija.

        Ejemplo:
            Si "para cada" (for each) elemento de una lista, queremos un console.log
            entonces callback lo único que hace es un console.log

    ¿Qué paramatros recibe callback? (Pueden tener cualquier nombre)
        Callback siempre intentará recibir en su primer parámetro
        el "elemento actual" de la lista que se está recorriendo.

        (Opcional) Callback también siempre intentará recibir en su segundo
        parámetro la posición del elemento actual.

    ¿Qué devuelve callback?
        Nada.
*/

const arrayComida = ["arroz", "pollo", "milanesa", "puré"]
// Para "cada uno" de los elementos queremos hacer un console.log

arrayComida.forEach( 
    ( elementoActual ) => {
        console.log( "El menú de hoy es", elementoActual )
    } 
)

function anuncio(comida) {
    console.log("(Anuncio) El menú de hoy es", comida)
}

arrayComida.forEach( anuncio )

const notasMatias = [8, 7, 6, 4, 8, 10]
// Matías puede promocionar la materia si su promedio es mayor o igual a 7
// Para calcular el promedio, tenemos que sumar todas las notas y dividir el resultado por la cantidad de notas

let notasSumadas = 0
let cantidadNotas = notasMatias.length

// Acá tenemos que sumar las notas con notasMatias.forEach()
// PARA CADA (for each) nota, queremos guardar en notas sumadas la nota + la suma de notas
// notasSumadas = notasSumadas + notaActual

notasMatias.forEach( 
    (notaActual) => {
        notasSumadas = notasSumadas + notaActual
    } 
)

const promedio = notasSumadas / cantidadNotas

const promocion = promedio >= 7

// ******************************** ARRAY.FILTER() ********************************
/*
    (array.filter)
    ¿Qué hace array.filter()?
        Toma un array existente y crea un NUEVO ARRAY FILTRADO según cómo se defina el callback.

        array.filter NO MODIFICA EL ARRAY ORIGINAL
        EL FILTRO SUCEDE EN UN ARRAY NUEVO

    ¿Qué parámetros recibe array.filter()?
        Callback.

    ¿Qué devuelve array.filter()?
        Devuelve un nuevo array en el cual los contenidos del array original fueron filtrados.

    (Callback)
    ¿Qué hace el callback del array.filter?
        Decide cuáles elementos aparecen en el nuevo array y cuales elementos no.
    
    ¿Qué parámetros recibe el callback? (Pueden tener cualquier nombre)
        El callback intentará recibir en su primer parámetro el elemento actual de la lista.
        (Opcionalmente) El callback intentará recibir en su segundo parámetro la posición actual de la lista.

    ¿Qué devuelve el callback del array.filter?
        SIEMPRE debe devolver un booleano
        Si el callback devuelve true, entonces el elemento actual aparece en el nuevo array filtrado
        Si el callback devuelve false, entonces el elemento actual NO aparece en el nuevo array filtrado
*/

// Queremos filtrar el array notasMatias para sólo tomar aquellas notas que aprobaron
// Queremos guardar este nuevo array filtrado en una variable llamada notasAprobadas
// Para que una nota apruebe, debe ser mayor o igual a 6

let notasAprobadas = notasMatias.filter( 
    ( notaActual ) => {
        const aprobado = notaActual >= 6
        return aprobado
    } 
)

// ******************************** ARRAY.MAP() ********************************
/*
    (array.map)
    ¿Qué hace array.map?
        array.map transforma un array según un callback determinado.

        array.map NO MODIFICA EL ARRAY ORIGINAL
        LA TRANSFORMACIÓN SUCEDE EN UN ARRAY NUEVO

    ¿Qué parámetro recibe array.map?
        Callback.

    ¿Qué devuelve array.map?
        Devuelve un nuevo array transformado. 

    (callback)
    ¿Qué hace el callback?
        Transforma un elemento del array en otra cosa.

    ¿Qué parámetros recibe el callback?
        El callback intentará recibir en su primer parámetro el elemento actual de la lista.
        (Opcionalmente) El callback intentará recibir en su segundo parámetro la posición actual de la lista.

    ¿Qué devuelve el callback?
        El callback devuelve la transformación del elemento
        El elemnto transformado va a tener la misma posición que el elemento original

        Por ejemplo si el callback es duplicar(x), entonces:
            [1,2,3].map(duplicar) === [2,4,6]
*/

// Duplicar con array.map el array notasMatias y guardar los resultados en una variable
// llamada notasDuplicadas

let notasDuplicadas = notasMatias.map( (notaActual) => { return notaActual * 2 } )