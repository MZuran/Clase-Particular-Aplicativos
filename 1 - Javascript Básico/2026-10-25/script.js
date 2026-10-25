/*
    VARIABLE:   Es un espacio en memoria de la computadora que guarda datos.

        Tipos de Variable (Operadores de declaración de variable):
            let     -   El dato almacenado puede cambiar (o ir variando)
            const   -   El dato almacenado es constante (no puede cambiar)    

    DATO:       Una unidad de información.

        Tipos de Datos:
            number      -   0
            stings      -   " ", ' ', ´ ´
            booleanos   -   true, false
            funciones   -   () => {}        -   Se pueden ejecutar con paréntesis:          ej: duplicar(2)
            objeto      -   {}              -   Se leen las claves concatenando .clave      ej: persona.nombre
            arrays      -   []              -   Se leen las claves concatenando [posicion]  ej: abecedario[0] 


    ************************** Operadores con iguales **************************

    =           -   Operador de asignación (Almacena un dato en una variable)
    ==
    ===

    ************************** Glosario **************************

    Condición:  Es una situación que puede ser verdadera o falsa. Generalmente se arma con operadores lógicos.
    Mínima Expresión:   Es la forma más chica posible de escribir algún tipo de dato
    Método: Se le dice método a cualquier función guardada dentro de un objeto.

*/

// ************************** BOOLEANOS **************************
// Son un tipo de dato que denota true o false
// Se usan generalmente para marcar una condición

/* 
    Operadores aritméticos:
        Son operadores que "trabajan" con números y "devuelven" números
        + - * /
    
    Operadores lógicos:
        Son operadores que "trabajan" con diversos tipos de datos PERO siempre devuelven booleanos

        >       -   Mayor
        <       -   Menor
        >=      -   MayorIgual
        <=      -   MenorIgual
        !       -   Opuesto (NOT)       -   !(5>2) devuelve false
        ==      -   Igualdad débil      -   Compara valores de dos datos
        ===     -   Igualdad fuerte     -   Compara valores Y tipo de datos de dos datos
        !=      -   Desigualdad débil
        !==     -   Desigualdad fuerte

        &&      -   AND                 -   Compara booleanos. Devuelve true si ambos son true.
        ||      -   OR                  -   Compara booleanos. Devuelve true si al menos 1 es true.

        yo soy una persona && (Y ADEMÁS) puedo volar == false
        yo soy un hombre || (O SI NO) yo soy una mujer == true
*/

// ************************** IF **************************
// La estructura IF nos permite asignar una condición a un bloque de código
// Si la condición se cumple, el bloque se ejecuta
// De no cumplirse, el bloque se saltea

const edad = 17
const sexo = "M"

if (edad >= 18 && sexo == "F") {
    // Bloque se ejecuta si condicion == true
    console.log("Mujer mayor de edad")
}   else    {
    // Bloque se ejecuta si condicion == false
    console.log("No es mujer mayor de edad")
}

// ************************** FUNCIONES **************************
/*
    Funciones en matemática

    f(x) = x + 2
        Nombre:         f
        Parámetro(s):   x
        Retorno:        x + 2

    h1(x,y) = x*y
        Nombre:         h1
        Parámetro(s):   x, y
        Retorno:        x*y

*/

// TIPOS DE FUNCIONES
/*
    Función Declarada:
        Automáticamente crean una variable de tipo let y les guardan el dato de la función adentro.
        Como se hace de forma automática, el programador no lo termina viendo.
        Usan la palabra clave function.

    Función Flecha (Función Lambda):
        NO crea ninguna variable y NO le asigna una función a nada.
        Esa tarea queda delegada al usuario.

        Su mínima expresión es:
            () => {}

        La función flecha puede borrar algunas cosas:
            1)  Si la función flecha sólamente recibe UN SÓLO PARÁMETRO, entonces los paréntesis son opcionales
            2)  Si la fucnión flecha sólamente tiene una línea de código y además esa línea es un return, podemos borrar las llaves y el return
*/

/*
    Ejecutar una función:   "Hacerla correr". Hacer que el programa ejecute las líneas de código de una función.
                            Para ejecutar una función, debemos poner paréntesis al lado de su variable
                            duplicar(3)

    Referenciar a una función:  "Leer las líneas de código sin que corran"
                                Hacer que el programa pueda abrir una función sin ponerla en acción,
                                Para referenciar una función, simplemente escribimos la variable que contiene la función
                                duplicar
*/

function ejemploDeclarada(ejemploParametro) {
    // Hacemos lo que querramos
    return ejemploParametro + 1
}

function duplicar(x) { return 2*x }

let triplicar = (x) => { return 3*x }

let cuadruplicar = x => 4*x

// ************************** OBJETOS **************************
/*
    ¿Qué es un objeto?
    Un objeto en JavaScript es una colección de datos (y métodos) que utilizan el sistema clave:valor

    ¿Cuál es la mínima expresión del objeto?
    {}

    Sistema clave:valor
    Dentro de los objetos podemos escribir (separados por coma) clave:valor
    El objeto distingue entre los distintos datos que tiene adentro según un valor

    ¿Cómo hacemos para leer un valor en particular de un objeto?
    Tenemos que concatenar a la variable que almacena el objeto un .clave
*/

const funcionMatematica = (x) => { return x*x }

const persona = { 
    nombre: "Matias", 
    edad: 23,
    casado: false,
    preso: false,
    saludar: (nombre) => { console.log("Hola", nombre) },
    calcular: funcionMatematica,

    mascota: {
        nombre: "Pancho",
        edad: 5,
        saludar: () => { console.log("Guau") }
    }
}

persona.edad = persona.edad + 1

// ************************** ARRAYS (VECTORES) **************************
/*
    ¿Qué es un Array?
    Un array es una colección de datos que utiliza el sistema de indexación

    Indexación viene de Índice
    (Para nuestros propósitos) El índice se refiere a la UBICACIÓN de los contenidos.

    Mínima expresión del array:
    []

    El array es una estructura que en su interior tiene una serie de datos ORDENADOS separados por comas.
    Decimos que la primera posición del array siempre es el 0

    ¿Cómo leemos los datos de la posición de un array?
    A la variable del array le concatenamos la posición númerica entre corchetes
    comidas[1] === "Pancho"
*/

const comidas = [ "Milanesas", "Pancho", "Puré" ]
const abecedario = ["A", "B", "C", "D", "E"]

// Ejercicio integrador sobre los tipos de datos
// La idea del ejercicio es ir "explorando" el array hasta finalmente llegar al string "llegaste"
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