// ************************************ VARIABLES ************************************
/*
    ¿Qué es una variable?
    Es un espacio de memoria en donde guardamos un dato

    ¿Qué es un dato?
    Es una unidad de información.
    Números, Palabras, Letras, Verdadero/Falso, etc

    Declaración de variable
    Se refiere a "crear" una variable con const o let. (o a veces var)
*/

const condicion = true

if (condicion) {
    console.clear()
    console.log("Se cumplió la condición")
}

// ************************************ CONDICIONALES ************************************
/*
    Operadores aritméticos:
    Son los operadores que (casi) siempre devuelven un número. + - * /

    Operadores lógicos:
    Son los operadores que devuelven valores lógicos. (true, false)

        Operadores de comparación:
        Son un tipo de operador lógico que se utiliza para comparar valores.
        >, <, >=, ==, etc


    =       -   Operador de asignación. Asigna un dato a una variable.
    ==      -   Operador de igualdad débil. Compara valores.
    ===     -   Operador de igualdad estricta. Compara valores y tipos de dato.

    para escribir and     &&
    para escribir or      ||
*/

// ************************************ LOOP FOR ************************************
/*
    El loop for es un bucle que repite un bloque de código un número específico de veces según cómo lo configuremos
    La característica especial del for, es que se guía con algo llamado la variable de control (i)

    for ( inicialización ; condición ; actualización ) {
    
    }

    Inicialización:
        Declaramos con let la variable de control y le damos un valor inicial.
        Por ejemplo: let i = 0

    Condición:
        Es una condición (generalmente hecha con operadores de comparación) que dicta si el bucle continúa o si
        el bucle para. Si la condición es true, el bucle continúa. Si la condición es false, el bucle se detiene.

        La condición siempre debe depender de la variable de control.

        Por ejemplo i < 10

    Actualización:
        Es una línea que se ejecuta entre cada loop del bloque.
        Se usa para cambiar el valor de i

        Por ejemplo: 
            i = i + 1       ( Esto le suma 1 a i y devuelve su nuevo valor )
            i++             ( Esto le suma 1 a i y devuelve el valor anterior )
*/

for ( let i = 0 ; i < 10 ; i = i + 1 ) {

    console.log("El valor actual de i es", i)

}


// ************************************ FUNCIONES ************************************

function saludar(nombre) {
    console.log("Hola", nombre)
}

function f(x) {
    return 2 * x + 2
}

const nombre = "Pepe";

/*
    Las funciones son un tipo de dato que se almacena dentro de una variable.

    Tienen la característica de que, si les concatenamos los parámetros entre paréntesis,
    podemos ejecutar la función.

    function saludar(nombre) {
        console.log("Hola", nombre)
    }

    Referencia a la función ( saludar )
        Es referirnos al contenido almacenado en la variable:

        por ejemplo, console.log( f )

    Ejecución de la función ( saludar("matias") )
        Se refiere a EJECUTAR las líneas de la función y devolver el resultado
        Para ejecutar una función, necesitamos concatenar paréntesis y parámetros

        por ejemplo, console.log( f(2) )

*/

/*
    ------------------ TIPOS DE FUNCIONES ------------------

    Función Definida:

        * Utilizan la palabra clave function
        * Se escriben con el orden: function, nombre, paréntesis y parámetros, bloque
        * Automáticamente crean una variable con el nombre de la función y guardan la función adentro
    
    Función Flecha (También llamada lambda):

        * NO utilizan la palabra clave function
        * NO crean automáticamente ninguna variable, lo debe hacer el programador
        * Se escriben con el orden: paréntesis y parámetros, flecha, bloque
        * La mínima expresión de la función flecha es () => {}
        * Si la función flecha SÓLO RECIBE UN PARÁMETRO, no es necesario poner paréntesis
        * Si la funcion flecha SÓLO TIENE UNA LÍNEA y ESA LÍNEA ES EL RETURN, no es necesario poner llaves o la palabra return
*/

function duplicar(x) { return 2*x }

const triplicar     = (x) => { return 3*x }

const cuadruplicar  = x => 3*x;

// ************************************ OBJETOS ************************************
/*
    ¿Qué es un objeto?
    Un objeto en JavaScript es una colección de datos (y métodos) que utilizan el sistema clave:valor

    ¿Qué es un método?
    Un método es una función guardada dentro de un objeto

    ¿Cuál es la mínima expresión de un objeto?
    {}

    Dentro de los objetos vamos a escribir las duplas de clave:valor separadas por comas

    ¿Cómo accedo a los valores de un objeto?
    Para acceder a los valores de un objeto, concatenamos .clave
*/

const persona = { 
    nombre: "Matias", 
    edad: 22,
    lentes: true,

    saludar: () => { console.log("Hola soy matias") },  //  Método por función flecha
    calcular: triplicar,                                //  Método por referencia

    mascota: {
        nombre: "Pancho",
        edad: 4
    }
}

// ************************************ ARRAYS (o vectores) ************************************
/*
    ¿Qué es un array en JavaScript?
    Un array es una colección de datos que utiliza el sistema de indexado.

    ¿Cuál es la mínima expresión del array?
    []

    Dentro de los arrays, nosotros escribimos los datos separados por comas.
    Los datos del array tienen un orden específico y una posición, por lo que el orden de ingreso importa.
    La primera posición del array siempre es la posición 0

    ¿Cómo extraemos información de un array?
    Le concatenamos [posicion]
*/

const abecedario = [ "a","b","c","d","e" ]


// ************************************ TABLA DE TIPOS DE DATOS ************************************
/*
    Un tipo de dato es algo que podemos "almacenar" dentro de una variable.

    Números

    Strings     -   " "
                    ' '
                    ` `

    Booleanos   -   true
                    false

    Funciones   -   () => {}    -   Se le concatena (parámetros)   

    Objetos     -   {}          -   Se le concatena .clave

    Arrays      -   []          -   Se le concatena [posicion]
*/

// ************************************ EJERCICIO ************************************
// Hacer un console.log de el siguiente dato que sólo devuelva la palabra "Llegaste"

const datoEjercicio = [ 0, 1, 2, 3, () => {
    return () => {
        return {
            seguir: [0, [[()=> { return {
                pasoFinal: "Llegaste"
            } }]]]
        }
    }
} ]

// Resolución:
console.log( datoEjercicio[4]()().seguir[1][0][0]().pasoFinal )