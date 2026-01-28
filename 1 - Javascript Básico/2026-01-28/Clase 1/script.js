
// ********************************** OPERADORES **********************************

/*
    NO CONFUNDIR:

    =           Operador de asignación          -   "Guarda" el valor de la derecha en una variable a la izquierda
    ==          Operador de igualdad débil      -   Compara el valor de las cosas que tiene a sus costados
    ===         Operador de igualdad estricta   -   Compara el valor y el tipo de las cosas que tiene a sus costados


*/

const nombre = "Matias"
const edad = 22

// ********************************** FUNCIONES **********************************

/*
    FUNCIONES DEFINIDAS:

        -   Utilizan la palabra clave "Function"
        -   Crean "automáticamente" una variable en donde guardar el valor de la función

    FUNCIONES FLECHA:

        -   Utilizan el operador "flecha" => ( No debemos confundir con el mayorIgual >= )
        -   Su mínima expresión es

            () => {}

        -   A diferencia de las funciones declaradas, las funciones flecha NO crean una nueva variable.
            El usuario se debe encargar de crear una variable y asignar la función flecha adentro.

        -   (Opcional): Si la función flecha sólo recibe 1 parámetro, podemos borrar los paréntesis

        -   (Opcional): Si la función flecha sólamente tiene una línea de código, y esa línea es un return,
                        podemos borrar las llaves y la palabra "return"
*/

function duplicar(x) { return 2*x }

const triplicar = (x) => { return 3*x }

const cuadruplicar = x => 4*x

/*
    VALOR DE UNA FUNCIÓN VS INVOCACIÓN/EJECUCIÓN DE UNA FUNCIÓN

    El valor de una función se refiere a "el contenido de la variable" que tiene la función
    console.log( f )
    No lleva paréntesis

    Si a una función le agregamos paréntesis  y parámetros, la función va a ser ejecutada (va a "correr")
    El valor de una función ejecutada va a ser igual a lo que devuelva
    f(2) === 4
*/


// ********************************** LOOPS **********************************

/*
    Loop for

        Inicialización
        -   Es controlado por una "variable de control" (generalmente llamada i)
        -   La variable de control se tiene que declarar como let en la parte de inicialización
        -   La variable de control debe tener un valor inicial (generalmente 0)   

        Condición
        -   Es la condición bajo la cual el programa sabe si debe seguir repitiendose o no
        -   Siempre es una comparación que utiliza de alguna forma la variable de control
        -   Entre repeticiones del código, el programa se fija si la condición es verdadera

            -   Si la condición es True, el bloque se repite nuevamente
            -   Si la condición es False, el bloque deja de repetirse

        Actualización
        -   Es una sóla línea de código que se ejecuta cada vez que una instancia del bloque termine su ejecución
        -   Generalmente se usa para aumentar el valor de la variable de control

        for ( Inicialización ; Condición ; Actualización ) {
            console.log("El valor actual de i es", i)
        }
*/

for ( let i = 0 ; i <= 8 ; i = i + 2 ) {
    console.log("El valor actual de i es", i)
}

// ********************************** OBJETOS **********************************
/*
    Un objeto en JavaScript es una colección de datos (y métodos) que utilizan el sistema clave:valor

    Un método en JavaScript es una función guardada adentro de un objeto

    La mínima expresión del objeto en JavaScript es:
    {}
    ( No debemos confundirlo con la mínima expresión de la función flecha )


    Los objetos guardan los valores de los datos según una clave específica 
    Para guardar un dato, se escriben las duplas de clave:valor separadas por comas dentro de las llaves

    Para "acceder" a los valores almacenados dentro de un objeto, se le debe concatenar un punto y una clave

    persona.nombre
    persona.edad
*/

const persona = {
    nombre: "Matias",
    edad: 22,

    saludar: () => { console.log("Hola") },
    calcular: triplicar,

    mascota: { nombre: "Pancho", especie: "Perro" }
}

// ********************************** ARRAYS **********************************
/*
    Un array en JavaScript es una colección de datos que utiliza el sistema de indexado

    Los arrays guardan la información (sin clave) según un orden posicionado
    Se guían según diferentes posiciones para diferenciar entre datos distintos

    Los arrays guardan datos "sueltos" separados por comas en su interior

    La mínima expresión del array es:
    []

    Para "extraer" datos de un array, debemos concatenar al array un corchete y una posición deseada
    La primera posición del array siempre es la posición 0
*/

const abecedario = [ "a", "b", "c", "d" ]


// ********************************** TIPOS DE DATOS **********************************

/*
    Los tipos de datos son todas las cosas que podemos guardar en alguna variable:

    Números
    Strings
    Booleanos (True, False)

    Funciones Declaradas
    Funciones Flecha        () => {}        Concatenar paréntesis y parámetros
    Objetos                 {}              Concatenar punto y clave
    Array                   []              Concatenar corchetes y posición
*/

// ********************************** Ejercicio **********************************
//  Llegar al string "Salida"

const arrayComplicado = [1, 2, 3, () => {}, {}, () => {
    return {
        nombreClave: () => {
            return () => {
                return [1,2,3, { siguiente: { mensaje: [1, "Salida"] } }]
            }
        }
    }
}]

// arrayComplicado[5]().nombreClave()()[3].siguiente.mensaje[1]