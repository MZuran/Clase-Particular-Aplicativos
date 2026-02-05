const ciudad = "Buenos Aires"

const persona = {
    nombre: "Alex",
    apellido: "Ogan",
    edad: 22
}

const abecedario = ["a", "b", "c", "d"]
const notas = [5, 6, 7, 8, 9, 10]

/*
    TIPOS DE DATOS:

    Numeros
    Booleanos
    Strings             -   " "
    Objetos             -   { }             -      Concatenar .clave 
    Funciones           -   () => {}        -      Concatenar paréntesis para ejecutar
    Arrays              -   [ ]             -      Concatenar [posicion]

*/

/*
    ¿Que quiere decir callback?
    Es una función pasada como parámetro a otra función.

    function duplicar(x) { return 2*x }

    console.log( () => {} )         //  La función anónima es callback
    console.log( duplicar )         //  La función duplicar es callback
*/

// ************************************ MÉTODOS ************************************

// ************************************************************************
// array.pop()
/*
    Uso:        Se utiliza para eliminar el último elemento de una lista.

    Recibe:     Nada.

    Devuelve:   El elemento eliminado del array.
*/

const ultimaLetra = abecedario.pop()

// ************************************************************************
// array.push()
/*
    Uso:        Se utiliza para agregar un nuevo elemento al final de una lista.

    Recibe:     El nuevo elemento a ser agregado.

    Devuelve:   El nuevo largo (length) del array después de agregar un elemento.
*/

const nuevoLargo = abecedario.push("e")

// ************************************************************************
// array.forEach()
/*
    Uso:                    Se utiliza para ejecutar un Callback para cada uno de los elementos del array.

    Recibe:                 Un Callback.

    Devuelve:               Nada.

    (Callback) Recibe:      Recibe un "elemento actual" de la lista array.
                            Puede tener cualquier nombre. (Generalmente llamado elemento o "e")

                            (Opcional) Se puede recibir un segundo parámetro "i" o "index" que 
                            simboliza la posición en el array del elemento actual.

    (Callback) Devuelve:    Nada.
*/

abecedario.forEach(

    (elementoActual, i) => {
        //console.log("(forEach) El elemento actual es " + elementoActual + " y su posición es " + i)
    }

)

for (let i = 0; i < abecedario.length; i = i + 1) {
    const elementoActual = abecedario[i]
    //console.log("(Loop For) El elemento actual es " + elementoActual + " y su posición es " + i)
}

let sumatoria = 0

notas.forEach(
    (nota) => { sumatoria = sumatoria + nota }
)

const promedio = sumatoria / notas.length

// ************************************************************************
// array.map( callback )
/*
    Uso:                    Se utiliza para ejecutar un Callback para cada uno de los elementos del array.
                            Además, nos devuelve un NUEVO array con las devoluciónes de callback(elemento).
                            NO MOFICA EL ARRAY ORIGINAL.

    Recibe:                 Un Callback.

    Devuelve:               Un NUEVO array "transformado".

    (Callback) Recibe:      Recibe un "elemento actual" de la lista array.
                            Puede tener cualquier nombre. (Generalmente llamado elemento o "e")

                            (Opcional) Se puede recibir un segundo parámetro "i" o "index" que 
                            simboliza la posición en el array del elemento actual.

    (Callback) Devuelve:    Algo. Cualquier cosa.
                            Lo que devuelva el callback con un determinado elemento tomará el lugar
                            del elemento original en el array que se devuelve.
*/

const arrayNumerico = [1, 2, 3, 4, 5]
// Quiero multiplicar todos los elementos del array numérico por 2

function duplicar(x) { return 2 * x }

const arrayDuplicado1 = arrayNumerico.map( duplicar )
const arrayDuplicado2 = arrayNumerico.map( (x) => { return 2 * x } )
const arrayDuplicado3 = arrayNumerico.map( x => 2 * x )

// Si una función flecha SÓLO RECIBE UN SÓLO PARÁMETRO, se puede borrar el paréntesis
// Si una función flecha SÓLO HACE UN RETURN (y nada más), se puede borrar "return" y las llaves

console.log(arrayNumerico)
console.log(arrayDuplicado1)

// ************************************************************************
// array.filter( callback )
/*
    Uso:                    Se utiliza para ejecutar un Callback para cada uno de los elementos del array.
                            Además, nos devuelve un NUEVO array filtrado.
                            NO MODIFICA EL ARRAY ORIGINAL.

    Recibe:                 Un Callback.

    Devuelve:               Un NUEVO array "filtrado".

    (Callback) Recibe:      Recibe un "elemento actual" de la lista array.
                            Puede tener cualquier nombre. (Generalmente llamado elemento o "e")

                            (Opcional) Se puede recibir un segundo parámetro "i" o "index" que 
                            simboliza la posición en el array del elemento actual.

    (Callback) Devuelve:    True o False.
                            Si callback(elemento) == true, entonces el elemento va a existir en el nuevo array filtrado
                            Si callbacK(elemento) == false, entonces el elemento NO va exisstir en el nuevo array filtrado.
*/

// Filtrar para que los elementos sean mayores a 2
const arrayFiltrado = arrayNumerico.filter(
    (elementoActual) => { return elementoActual > 2 }
)

console.clear()