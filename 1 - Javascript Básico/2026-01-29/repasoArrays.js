const ciudad = "Buenos Aires"

const persona = {
    saludar: () => { console.log("Hola") },
    nombre: "Matias"
}

const abecedario = ["a", "b", "c", "d", "e", "f",]
const numeros = [1, 2, 3, 4, 5]
const arrayEjemplo = []

const personas = [
  {
    nombre: "Juan",
    apellido: "Pérez",
    DNI: "34567890",
    edad: 13,
    genero: "M",
    notas: [7, 9, 6]
  },
  {
    nombre: "María",
    apellido: "Gómez",
    DNI: "45678901",
    edad: 17,
    genero: "F",
    notas: [10, 8, 9, 7]
  },
  {
    nombre: "Lucas",
    apellido: "Rodríguez",
    DNI: "56789012",
    edad: 30,
    genero: "M",
    notas: [6]
  },
  {
    nombre: "Sofía",
    apellido: "Fernández",
    DNI: "67890123",
    edad: 15,
    genero: "F",
    notas: [8, 7, 9, 10, 6]
  },
  {
    nombre: "Ana",
    apellido: "Martínez",
    DNI: "78901234",
    edad: 13,
    genero: "F",
    notas: [9, 8]
  },
  {
    nombre: "Ana",
    apellido: "Perez",
    DNI: "78401234",
    edad: 12,
    genero: "F",
    notas: [7, 6, 8, 9]
  }
];

// ************************************** MÉTODOS DE ARRAYS **************************************
/*
    Un método en JavaScript es una función almacenada dentro de un OBJETO

    Para extraer información de un objeto se debe concatenar un punto y una clave
    Para extraer información de un array se debe concatenar entre corchetes una posición
*/

// ************************************** ¿Qué es un callback? **************************************
/*
    Un callback es cuando pasamos una función por parámetro a otra función. El "callback" siendo la función enviada.
    Si una función "recibe como parámetro" otra función, la función enviada le decimos callback
*/

const duplicar = (x) => { return 2 * x }

arrayEjemplo.push(duplicar)                   //  En este caso, la función duplicar le decimos "callback"
arrayEjemplo.push((x) => { return 3 * x })      //  En este caso, la función flecha le decimos "callback"

// ************************************** ARRAY.LENGTH **************************************
/*
    No es una función ni un método. Siempre es un número que nos indica la cantidad de elementos del array.
*/

// ************************************** ARRAY.POP **************************************
/*
    Descripción:    Nos sirve para "quitar" el último elemento de un array y devolverlo.

    Recibe:         Nada

    Devuelve:       El último elemento eliminado
*/

const devoluciónPop = abecedario.pop()

// ************************************** ARRAY.PUSH **************************************
/*
    Descripción:    Nos sirve para "agregar" un nuevo elemento al final de una lista.

    Recibe:         El nuevo elemento para agregar.

    Devuelve:       El nuevo array.length después de agregar un nuevo elemento.
*/

const devoluciónPush = abecedario.push("f")

// ************************************** ARRAY.FOREACH **************************************
/*
    Descripción:            Ejecuta de forma cíclica el callback para cada uno de los elementos del array.

    Recibe:                 Callback. Este callback (función) se va a ejecutar para cada elemento del array.

    Devuelve:               Nada.

    (Callback)  Recibe:     Recibe un "elemento de la lista" que puede tener cualquier nombre.
                            Generalmente lo llamamos "elemento" o simplemente "e".  

                            (Opcionalmente): Se puede recibir un segundo parámetro que simboliza el "índice" o
                            "la posición actual". Nuevamente puede tener cualquier nombre.

    (Callback)  Devuelve:   Nada.
*/

abecedario.forEach(
    (elemento, index) => {
        console.log("El elemento actual del callback es", elemento)
        console.log("La posición actual (índice) es", index)
        console.log("")
    }
)

for (let i = 0; i < abecedario.length; i = i + 1) {
    //console.log("El elemento actual de la lista es", abecedario[i])
}

console.clear()     //  Comentar esto para ver los console.log

// ************************************** ARRAY.FILTER **************************************
/*
    Descripción:            Ejecuta de forma cíclica el callback para cada uno de los elementos del array.
                            Según indique el callback, array.filter crea una lista NUEVA de "elementos filtrados".
                            Array.filter NO MODIFICA EL ARRAY ORIGINAL.

    Recibe:                 Callback. Este callback (función) se va a ejecutar para cada elemento del array.

    Devuelve:               Un NUEVO array filtrado.

    (Callback)  Recibe:     Recibe un "elemento de la lista" que puede tener cualquier nombre.
                            Generalmente lo llamamos "elemento" o simplemente "e".  

                            (Opcionalmente): Se puede recibir un segundo parámetro que simboliza el "índice" o
                            "la posición actual". Nuevamente puede tener cualquier nombre.

    (Callback)  Devuelve:   True o False.
                            Si devuelve True, el "elemento actual" va a aparecer en el nuevo array filtrado.
                            Si devuelve False, el "elemento actual" NO va a aparecer en el nuevo array filtrado.
*/

const numerosFiltrados = numeros.filter(
    ( elementoNumero ) => {
        return elementoNumero >= 3
    }
)

const numerosFiltrados2 = numeros.filter( elementoNumero => elementoNumero >= 3 )

// ************************************** ARRAY.MAP **************************************
/*
    Descripción:            Ejecuta de forma cíclica el callback para cada uno de los elementos del array.
                            Según indique el callback, array.map crea una lista NUEVA de "elementos transformados".
                            Array.map NO MODIFICA EL ARRAY ORIGINAL.

    Recibe:                 Callback. Este callback (función) se va a ejecutar para cada elemento del array.

    Devuelve:               Un NUEVO array transformado.

    (Callback)  Recibe:     Recibe un "elemento de la lista" que puede tener cualquier nombre.
                            Generalmente lo llamamos "elemento" o simplemente "e".  

                            (Opcionalmente): Se puede recibir un segundo parámetro que simboliza el "índice" o
                            "la posición actual". Nuevamente puede tener cualquier nombre.

    (Callback)  Devuelve:   Cualquier cosa.
                            Lo que devuelva callback(elementoActual) va a tomar el lugar del elementoActual
                            en la nueva lista.

                            cook(🐂) === 🍔

                            En este caso la hamburguesa toma el lugar de la vaca en el array original.
*/

const numerosCuadruplicados = numeros.map(
    ( elemento ) => {
        return elemento * 4
    }
)

const numerosDuplicados = numeros.map( duplicar )