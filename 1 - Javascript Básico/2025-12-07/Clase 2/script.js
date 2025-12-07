const arrayPrueba = ["a", "b", "c"]

const objetoPrueba = {
    nombre: "Matias",
    edad: 22
}

// ******************************* MÉTODOS DE ARRAYS *******************************
/*
    "Todo en javascript es un objeto"
    Los arrays internamente son un caso especial de objetos, por lo que tienen acceso
    a varias duplas de clave:valor en las que se detacan

    array.length    -   Nos dice la cantidad de elementos del array
    array.pop()
    array.push()
    array.forEach()
    array.filter()
    array.map()
*/

// ******************************* ARRAY.PUSH *******************************
/*
    array.push() es un método que nos sirve para ingresar o "extender" arrays.

    Recibe:     Un nuevo elemento el cual pondrá al final de la lista

    Devuelve:   El nuevo array.length después de añadir el elemento
*/

// ******************************* ARRAY.POP *******************************
/*
    array.pop() es un método que nos permite quitar el último elemento de
    un array.

    Recibe:     Nada

    Devuelve:   El último elemento eliminado del array
*/

// ******************************* ARRAY.FOREACH *******************************
/*
    array.forEach() es un método que nos permite ejecutar de forma cíclica una función

    Recibe:     Callback

    Devuelve:   Nada

    Un callback es una función que se envía por parámetro a otra función.
    Generalmente en forma de función flecha o con el nombre de la variable de la 
    función sin el paréntesis.

    (Callback) Recibe:      Recibe un parámetro que va a ser llenado por un elemento
                            del array. Generalmente lo llamamos "elemento".

                            El callback luego se ejecutará para todos los elementos del
                            array.

    (Callback) Devuelve:    Nada


    const callback = () => {}
    [1,2,3,4,5]
    [callback(1),callback(2),callback(3),callback(4),callback(5)]
*/

const notas = [6,7,8,9,10]

let sumatoria = 0

notas.forEach(
    (elemento) => {
        sumatoria = sumatoria + elemento
    }
)

const promedio = sumatoria / notas.length

console.log("El promedio de las notas es "+ promedio)