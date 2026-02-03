
/*
    =       -       Operador de declaración / asignación
                    Sirve para declarar una variable o cambiar su valor.

    ==      -       Operador igualdad débil
                    Compara 2 valores y devuelve true si son iguales

    ===     -       Operador igualdad estricta
                    Compara 2 valores y sus respectivos tipos de dato.
                    Devuelve true si son iguales.
*/

1 + 6           //  Devuelve 7
5 > 6           //  Devuelve false

"5" == 5        //  Devuelve True
"5" === 5       //  Devuelve False

function nombreDeFuncion(parametro) {
    const retorno = parametro + 5
    return retorno
}

function noDevuelvo() {

}

// ********************************************** TIPOS DE DATOS **********************************************
/*
    ¿Qué es un tipo de dato?
    Es cualquier cosa que se pueda guardar como "valor" de una variable.

        -   Numeros
        -   Strings
        -   Booleanos
        -   Funciones           -       () => {}        -   Para ejecutar, se concatena paréntesis (y también parámetros)
        -   Objeto              -       {}              -   Para extraer valores, se concatena .clave
        -   Array               -       []              -   Para extraer valores, se concatena [posicion]
*/

// ********************************************** FUNCIONES **********************************************

function ejemplo() {
    const palabraUno = "Hola"
    const palabraDos = "Mundo"
    return palabraUno + " " + palabraDos
}

//console.log( ejemplo() )        //      En la consola sale "Hola Mundo"
//console.log( ejemplo )          //      En la consola sale el valor de la variable función

/*
    Ejecución vs Valor de función

    Si nosotros tomamos una variable que guarde una función y le concatenamos unos paréntesis con parámetros,
    la función se va a "invocar" o "ejecutar" o "correr"

    saludar()

    Si nosotros tomamos una variable que guarde una función y no le concatenamos nada,
    nos vamos a estar refiriendo al "valor función" almacenado en la variable

    saludar
*/

/*
    Funciones definidas:

        -   Usan la palabra clave function
        -   Automáticamente crean una variable y le guardan el valor función adentro

    Funciones flecha / lambda:

        -   No usan ninguna palabra clave.
        -   Usan el operador flecha =>, (no confundir con el mayor igual >=)
        -   NO crean una variable y NO le asignan nada. Se debe hacer manualmente.

        -   Mínima expresión de la función flecha:

            ()  =>  {}

        -   (Opcional)  Si la función sólo recibe un parámetro (1), entonces el paréntesis se puede borrar
        -   (Opcional)  Si la única línea de la función es un return, se puede borrar "return" y las llaves
*/

// Mínima expresión === La forma más pequeña en que algo se puede escribir sin errores

function duplicar(x) { return 2*x }             //  Función duplicar

(x)  =>  { return 3*x }                         //  Función anónima (sin nombre)

const triplicar = (x) => { return 3*x }         //  Función triplicar

const cuadruplicar = x => 4*x                   //  Función cuadruplicar


// ********************************************** LOOPS **********************************************
/*
    ¿Qué es un loop o estructura de repetición?

    Es un bloque de código que según cómo configuremos el operador "for", "while" o "do... while" se va a repetetir
    una n cantidad de veces.
*/

//  for    -   para
/*
    Es un bucle de repetición cuyo operador recibe 3 partes separadas por ;
    El bucle es controlado por una variable llamada "variable de control". Generalmente recibe el nombre i.

    for ( inicialización ; condición ; actualización ) { código }

    Inicialización:
        Inicializamos con let la variable de control y le damos un valor inicial.

    Condición:
        Antes de cada ejecución, el for se fija si la condición es true o false.
        Si la condición es true, el bloque se ejecuta.
        Si la condición es false, el bloque se corta.

        La condición debe incluir un operador lógico y la variable de control.

    Actualización:
        Es una línea de código que se ejecuta entre cada ejecución del bloque.
        Se utiliza para actualizar o aumentar el valor de la variable de control.
        En el pio a veces a esto le dicen "paso"
*/

for ( let i = 0 ; i <= 5 ; i = i + 1 ) {
    //console.log("El valor de i es", i)
}

// ********************************************** OBJETOS **********************************************
/*
    Un objeto en JavaScript es una colección de datos (y métodos) que utiliza el sistema clave:valor

    Un método es una función guardada dentro de un objeto

    La expresión mínima de un objeto es:
        {}

    ¿Cómo guarda información un objeto?
    Se escriben parejas de clave:valor separadas entre comas

    ¿Cómo extraemos un valor de un objeto?
    Escribimos objeto.clave ya que objeto.clave === valor
*/

function saludar() {
    console.log("Hola mundo")
}

const persona = {
    nombre: "Matias",
    edad: 22,
    egresado: true,

    saludar: saludar,                                   //  Método según valor función

    mascota: {
        nombre: "Pancho",
        saludar: () => { console.log("Guau guau") }     //  Método según función anónima
    }
}

// ********************************************** ARRAYS **********************************************
/*
    En JavaScript, un array es una colección de datos que utiliza el sistema indexado.
    (Un índice de un libro es un apartado que detalla la POSICIÓN de los contenidos del libro)

    La mínima expresión del array es:
        []

    El array de JavaScript guarda datos separados por coma de manera ORDENADA
    Cada dato de un array tiene una posición. El primer dato siempre es la posición 0.

    ¿Cómo extraemos datos de un array?
    Al array le concatenamos una posición entre corchetes.

    abecedario[2] === "C"   // Esto es true  
*/

const arrayNumerico = [1,2,3,4]
const abecedario = ["A","B","C","D"]

// ********************************************** EJERCICIO INTEGRADOR **********************************************
// Consigna: Llegar al valor "llegaste"

// Solución: arrayComplicado[3][3]().seguir.seguirDeNuevo()().salida[0]

const arrayComplicado = [ 1, 2, () => {}, [
    "a", "b", ["c", "d"], () => { return {
        seguir: {
            seguirDeNuevo: () => { return (
                () => { return {
                    salida: ["llegaste"]
                }}
            )
         }
        }
    } }
] ]