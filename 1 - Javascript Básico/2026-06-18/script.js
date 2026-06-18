/*
    Variables vs Datos

    Dato:       Es la unidad mínima de información.

    Variable:   Es un espacio en memoria del programa que almacena datos.

    Tipos de Datos:

        -   String      -   "", '', ``

        -   Number      -   0

        -   Booleano    -   true, false

        -   Funciones   -   () => {}        -   Concatenamos (parametros, parametros, etc) para ejecutarla 
                                                Concatenamos () para ejecutarla

        -   Objetos     -   {}              -   Concatenamos .clave

        -   Arrays      -   []              -   Concatenamos [posición]

*/

/* 
    Tipos de strings 
    " "     -   Tienen la prioridad más alta. 
    ' '     -   Tienen prioridad baja.
    ` `     -   Tienen prioridad baja pero además nos dejan escribir variables o datos adentro utilizando el operador ${}
*/

/*

    Operadores Aritméticos:     +, -, *, /
        Son operadores que reciben datos y devuelven un número. 

    Operadores Lógicos:
        Son operadores que reciben datos y devuelven un booleano.


    =       -   Operador de asignación              -   Asigna un dato a una variable
    ==      -   Operador de igualdad débil          -   Compara el valor de dos datos
    ===     -   Operador de igualdad estricta       -   Compara el valor y el tipo de dos datox

    &&      -   AND         -   Enlaza dos condiciones con un AND
    ||      -   OR          -   Enlaza dos condiciones con un OR

*/

let edad = 18

console.clear()

if (edad > 18) {

    //  Se ejecuta si la condición es verdadera
    console.log("La condicion es verdadera")

}   else    {

    //  Se ejecuta si la condición es falsa
    console.log("La condicion es falsa")

}

// ****************************** FUNCIONES ******************************
/*

    Referencia de Función:      Es "la propia función". Usamos esto cuando nos queremos referir a las líneas de código
                                sin ejecutarlas. Devuelve el "dato función".

                                Por ejemplo, multiplicar

    Ejecución de Función:       Significa "ejecutar" o "correr" las líneas de código de una función.
                                Se hace escribiendo la referencia a la función seguido de paréntesis con parámetros.
                                Devuelve el valor del return.

                                Por ejemplo, multiplicar(3,3)


    Tipos de funciones:

    Función Definida:
        Se caracterizan por la palabra reservada function.
        Son especiales porque automáticamente crean una variable con el mismo nombre que la función y almacenan
        la función adentro.

    Función Flecha (Función Lambda):

        Son funciónes más pequeñas que NO son almacenadas automáticamente en una variable.
        Su mínima expresión es:
            () => {}

        Tienen una sintaxis abreviada OPCIONAL que usa las siguientes reglas:
        1)  Si la función flecha sólo recibe 1 sólo parámetro, entonces los paréntesis son opcionales
        2)  Si la ÚNICA línea de código de la función empieza con return, entonces las llaves y "return" son opcionales.


*/

function duplicar(x) {
    return 2*x
}

const triplicar = (x) => { return 3*x }

const cuadruplicar = x => 4*x


// ****************************** FOR ******************************
/*
    ¿Qué es el loop for?
    Es un bloque de código que configuramos para que se repita una determinada cantidad de veces.
    El loop for depende de una "variable de control" y una condición.

    ¿Cuál es la sintaxis del loop for?

    for ( inicialización ; condición ; actualización ) {}

    inicialización:
        Declaramos con let la variable de control.
        Generalmente la variable de control se llama i.
        La variable de control siempre debe tener un valor inicial.

    condición:
        Utilizando operadores lógicos ponemos una condición.
        Si la condición se cumple, el loop continúa.
        Si la condición no se cumple, el loop se detiene.
        La condición siempre debe depender de la variable de control.

    actualización:
        Es una línea de código que se ejecuta después de cada ejecución del loop.
        Generalemente actualiza el valor de la variable de control.

        i = i + 1
        es lo mismo que poner
        i++
*/

    for ( let i = 0 ; i < 10 ; i++ ) {

        console.log(`Esta es la repetición número ${i} del loop for`)

    }

// ****************************** OBJETOS ******************************
/*
    ¿Qué es un objeto?
    Es una colección de datos (y métodos) que utilizan el sistema clave:valor.

        Esto quiere decir que dentro de un mismo objeto podemos tener CUALQUIER NÚMERO DE CUALQUIER TIPO DE DATOS.

        Como un objeto puede guardar cualquier tipo de dato y además los objetos son un tipo de dato en sí,
        un objeto puede guardar otro objeto.

    ¿Qué es un método?
    Es una función guardada dentro de un objeto.

    ¿Cuál es la mínima expresión del objeto?
    {}

    ¿Cómo funcionan los objetos?
    Para crear un objeto debemos escribir la mínima expresión y adentro escribir duplas de clave:valor separadas por comas.

    ¿Cómo accedemos a los valores del objeto?
    Concatenamos la variable objeto y .clave

        persona.nombre
*/

const persona = { 
    nombre: "Matias",
    apellido: "Zuran",

    edad: 23,

    saludar: () => { console.log("Hola") },     //  Método por función flecha
    calcular: triplicar,                        //  Método por referencia

    mascota: {

        nombre: "Pancho",
        saludar: () => { console.log("Guau guau") }

    }
}
// ****************************** ARRAYS ******************************
/*
    Sinónimos: Array, Lista, Vector

    Son una colección de datos que utilizan el sistema de indexado.
    Trabajan con un sistema ORDENADO en donde cada dato es diferenciado por su POSICIÓN.

    ¿Cuál es la expresión mínima del array?
    []

    ¿Cómo creamos un array?
    Escribimos la expresión mínima y ponemos los valores separados por comas.

    ¿Cómo leemos los valores de un array?
    Escribimos la variable que contiene al array y lo concatenamos [posición]
    Tener en cuenta que la primera posición siempre es el 0.
*/

const comidas = [ "Papa", "Zanahoria", "Puré" ]