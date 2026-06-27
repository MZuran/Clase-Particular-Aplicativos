const persona = {

    saludar: () => { console.log("Hola") }

}

/*
    Método:     Es una función adentro de un objeto
    Parámetro:  Es lo que recibe una función (lo que va entre paréntesis)
    Callback:   Es una función pasada por parámetro a otra función
*/

/*
    ¿Qué es un método?
    Un método es una función adentro de un objeto

    "Los arrays tienen métodos"
    ¿Tiene sentido eso?

    Los arrays de javascript son "secretamente" objetos
    Y un método es una función adentro de un objeto

    Los arrays al ser objetos pueden tener métodos

    Siempre que creamos un array en javascript, el lenguaje les "mete" una serie de métodos a todos los arrays
    Entre los métodos ingresados, tenemos los siguientes 5:

        array.push()
        array.pop()
        array.forEach()
        array.filter()
        array.map()
*/

// ******************************** ARRAY.PUSH() ********************************
/*
    Lo que hace:                Agrega un elemento al final del array.

    Parámetros recibidos:       Recibe el elemento para agregar al final

    Retorno:                    El nuevo length del array
*/

const abecedario = ["a", "b", "c", "d"]
abecedario.push("e")

// ******************************** ARRAY.POP() ********************************
/*
    Lo que hace:                Extrae el elemento al final del array.

    Parámetros recibidos:       Nada

    Retorno:                    El elemento extraído
*/

abecedario.pop()

// ******************************** ARRAY.FOREACH() ********************************
/*
    Lo que hace:                        Repite una función "para cada elemento del array"
                                        Repite el callback para todos los elementos del array

    Parámetros recibidos:               Callback

    Retorno:                            Nada

    (Callback)  Parámetros Recibidos:   
                                        Recibe los elementos del array 1 por 1. El parámetro de los elementos
                                        puede tener cualquier nombre. Generalmente lo llamamos "elemento"

    (Callback)  Retorno:                Nada
*/

const notas = [5, 6, 7, 8, 9]

let sumatoria = 0

notas.forEach(

    (numero) => {
        sumatoria = sumatoria + numero
    }

)

// La suma de todos los numeros divido la cantidad de numeros

const promedio = sumatoria / notas.length

// ******************************** ARRAY.FILTER() ********************************
/*
    Lo que hace:                        "Filtra" los elementos de un array según una configuración del callback.
                                        NO MOFIFICA EL ARRAY ORIGINAL. CREA UNO NUEVO.

    Parámetros recibidos:               Callback

    Retorno:                            Un NUEVO array filtrado.

    (Callback)  Parámetros Recibidos:   
                                        Recibe los elementos del array 1 por 1. El parámetro de los elementos
                                        puede tener cualquier nombre. Generalmente lo llamamos "elemento"

    (Callback)  Retorno:                
                                        Devuelve un booleano.
                                        Si devuelve true, el elemento actual estará en el array nuevo       "Se queda"
                                        Si devuelve false, el elemento actual NO estará en el array nuevo   "Se va"
*/

const edades = [10, 11, 12, 13, 14, 15]

// Queremos tener un nuevo array de edades que superen los 12 años
/*
    Las funciones flecha pueden borrar un par de cosas:

        1)  Si sólo se recibe ÚN SÓLO PARÁMETRO, podemos borrar los paréntesis.
        2)  Si la única línea de código es un return, podemos borrar "return" y las llaves
*/

const edadesFiltradas1 = edades.filter(elemento => elemento > 12)

const edadesFiltradas2 = edades.filter(

    (elemento) => {
        return elemento > 12
    }

)

// ******************************** ARRAY.MAP() ********************************
/*
    Lo que hace:                        "TRANSFORMA" todos los elementos de un array según un callback.
                                        NO MODIFICA EL ARRAY ORIGINAL.

    Parámetros recibidos:               Callback

    Retorno:                            Un NUEVO array transformado.

    (Callback)  Parámetros Recibidos:   
                                        Recibe los elementos del array 1 por 1. El parámetro de los elementos
                                        puede tener cualquier nombre. Generalmente lo llamamos "elemento"

    (Callback)  Retorno:                
                                        Devuelve cualquier cosa.
                                        El valor devuelto va a tomar el lugar del elemento original en el array.
*/

function duplicar(x) {
    return 2*x
}

const triplicar = (x) => { return 3*x }

// Quiero duplicar las edades

const edadesDuplicadas1 = edades.map(duplicar)      //  Callback por referencia

const edadesDuplicadas2 = edades.map(               //  Callback por función flecha
    (edad) => { return edad*2 }
)


function cook(raw) {

    if (raw == "vaca") {
        return "burger"
    }

    if (raw == "potato") {
        return "chips"
    }

}

const arrayRaw = ["vaca","vaca","potato"]