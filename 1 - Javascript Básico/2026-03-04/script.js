/*
    ¿Qué es una variable?
    Es un espacio de memoria en donde guardamos un dato

    ¿Qué es un dato?
    Es una unidad de información.
    Números, Palabras, Letras, Verdadero/Falso, etc

    Declaración de variable
    Se refiere a "crear" una variable con const o let. (o a veces var)
*/

// ******************************** Cláusula "if" ***************************************

/*
    Evalúa si una condición es verdadera o falsa y ejecuta algo en consecuencia.
    Leer truthys y falsys en el ppt
*/

const condicion = true

if (condicion) {

    //  Esto se ejecuta si la condición es true
    console.log("La condicion es verdadera")

} else {

    //  Esto se ejecuta si la condición es false
    console.log("La condicion es falsa")

}

// ******************************** Operadores de comparación ********************************
/*
    ¿Qué es un operador matemático?
    Es una operación que devuelve números.

    ¿Qué es un operador lógico?
    Es una operación que devuelve true o devuelve false.

    ¿Qué es un operador de comparación?
    Es un operador lógico que recibe dos valores y los compara.
*/

/*
    =           -   Operador de asignación  

                    Se utiliza para guardar un nuevo dato en una variable.
                    let x = 4
                    x = "Hola"

    ==          -   Operador de igualdad débil

    ===         -   Operador de igualdad estricta
*/

// ******************************** Funciones ********************************
/*
    ¿Qué es una función?
    Es una secuencia de "pasos" o líneas de código que
        -   Puede (o no) recibir información
        -   Puede (o no) devolver información

    Una función tiene las siguientes partes:

        1)  Nombre.

        2)  Parámetro.  Es la información que se recibe entre paréntesis.

        3)  Devolución. Es la información que "devuelve" o se transforma la función.

    Las funciones son un TIPO DE DATO guardado dentro de una variable.

    Escribir el nombre de una función sin paréntesis se llama "referencia de función".
    Por ejemplo console.log(f)

    Escribir el nombre de la función y agregarle paréntesis se llama "ejecutar la función". (Hacerla "correr")
    Por ejemplo console.log( f(2) )

    Decimos que para EJECUTAR una función, le debemos CONCATENAR paréntesis a su referencia.
*/

// "nada" es lo mismo que undefined

function f(x) {

    return 2 * x + 2

}

function funcionComplicada(edad) {
    const nuevaEdad = edad + 5
    return nuevaEdad
}

function saludar(nombre, apellido) {
    console.log("Hola, me llamo", nombre, apellido)
}

function alertar() {
    alert("Hola")
}

/*
    Funciones flecha

    ¿Cómo es la sintaxis de la función flecha?
    La expresión mínima de la función flecha es:

    () => {}

    Si la función flecha recibe UN SÓLO PARÁMETRO, podemos borrar los paréntesis
    Si lo PRIMERO que hace la función flecha es un return, podemos borrar la palabra "return" y las llaves
*/

const variableNumero = 5
const variableString = "pepe"
const variableBooleana = true
const triplicar = (x) => { return 3 * x }
const cuadruplicar = x => 4 * x
function duplicar(x) { return 2 * x }

// ******************************** Estructuras de repetición ********************************
/*
    Loop "for"

    ¿Para qué se usa?
    Se utiliza siempre que querramos hacer que un bloque se ejecute muchas veces en un loop.

    for ( inicialización ; condición ; actualización ) {
    
    }

    Decimos que el "for" se guía según una "variable de control".

    ¿Qué es la inicialización?
        Es el espacio en donde definimos con let la variable de control (generalmente se llama i).
        También le debemos dar un valor inicial.

    ¿Qué es una condición?
        Es "algo" que puede ser verdadero o falso.
        Si la condición es verdadera, el ciclo continúa.
        Si la condición es false, el ciclo se corta.
        La condición generalmente está creada con operadores de comparación.

    ¿Qué es la actualización?
        Es una línea de código que se ejecuta entre cada ejecución de bloque.
        Generalmente se usa para asignarle un valor distinto a la variable de control.
*/

for ( let i = 0 ; i < 5 ; i = i + 1 ) {

    console.log("Hola soy la ejecucion", i)

}

// ******************************** Objetos ********************************
/*
    En Js, un objeto es una colección de datos (y métodos) que utiliza el sistema clave:valor.

    Un método es una función guardada adentro de un objeto.

    La expresión mínima del objeto es
    {}

    ¿Cómo guarda sus datos un objeto?
    Dentro del paréntesis, escribimos las duplas de clave:valor separados por comas.
    Los datos son el valor y la clave es "la identificación del valor"

    ¿Cómo "leemos" los valores de un objeto?
    Para acceder a los valores almacenados dentro de un objeto, debemos CONCATENARLE .clave
*/

const quintuplicar = (x) => { return 5*x }

const persona = { 
    edad:22,
    nombre:"Matias", 
    casado: false,

    saludar: () => { console.log("Hola") },          // Función anónima          
    calcular: quintuplicar,                          // Referencia de función

    mascota: { nombre: "Pancho", edad: 4, especie: "Perro" }
}

// ******************************** Arrays ********************************
/*
    Un array en Js es una colección de datos que utiliza el sistema de indexado

    La expresión mínima de un array es 
    []

    Un array es una colección de datos ORDENADOS separados por comas. No tienen clave.

    La posición inicial siempre es la posición 0

    Para acceder a los datos almacenados en el array, debemos CONCATENAR [posicion]
*/

const abecedario = ["a", "b", "c", "d", "e", "f"]

// ******************************** Tipos de datos ********************************
/*
    -   Número
    -   Strings (Texto) 
    -   Booleanos (true/false)

    -   Funciones                   -   Le concatenamos paréntesis (y parámetros)
                                        Expresión mínima: () => {}

    -   Objeto                      -   Le concatenamos .clave
                                        Expresión mínima: {}

    -   Array                       -   Le concatenamos [posicion]
                                        Expresión mínima: []
*/

