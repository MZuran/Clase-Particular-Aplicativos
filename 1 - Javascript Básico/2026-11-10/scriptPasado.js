/*
    Variable    -   Es un espacio en memoria que almacena información

        2 Tipos de Variables:
        let     -   Puede cambiar la información que almacena "varía"
        const   -   Es constante. Jamás puede cambiar la información almacenada.


    Dato        -   Es una unidad de información

        Tipos de datos:
            string      -   " ", ' ', ` `
            number      
            booleano    -   true, false
            funcion     -   () => {}        -   Le concatenamos (parámetros) para ejecutar
            objeto      -   {}              -   Le concatenamos .clave
            array       -   []              -   Le concatenamos [posicion]
*/

/* ******************************** VARIABLES ******************************** */
// ¿Cómo se declara una variable?
// operador nombreVariable = valorVariable
// let nombre = "Matias"
// const edad = 23

/* ******************************** IF ******************************** */
// Los booleanos sirven para denotar si una condición es verdadera o falsa
// Muchas veces encontramos útil hacer que una parte del código SÓLAMENTE se ejecute si se cumple una condición
/*
    Sintaxis del IF

    if (condicion) {
        // Este bloque se ejecuta si la condición es true
    }   else    {
        // Este bloque se ejecuta si la condición es false
    }
*/

const casado = true

if (casado) {
    console.log("La persona sí está casada")
}   else    {
    console.log("La persona no está casada")
}

/* ******************************** OPERADORES LÓGICOS ******************************** */
/*
    Operadores Aritméticos (Operadores Matemáticos)
        Son operadores que devuelven datos tipo number
        + - * / ^

    Operadores Lógicos (de comparación)
        Son operadores que devuelven datos tipo booleano
        >   Mayor
        >=  Mayor Igual
        <   Menor
        <=  Menor Igual
        ==  Igualdad Débil          -   Compara valores de dos datos
        === Igualdad Estricta       -   Compara valores y tipos de dos datos
        !   NOT                     -   Devuelve el booleano opuesto
        !=  Desigualdad Débil       -   Devuelve lo opuesto que la igualdad débil
        !== Desigualdad Estricta    -   Devuelve lo opuesto a la igualdad estricta

    ¿Para qué sirven los operadores lógicos?
    Su uso más común es para crear condiciones (como las que usamos con el if)

    =       -   Operador de asignación      (Le asigna un dato a una variable)
    ==      -   Operador Igualdad débil     (Compara valores)
    ===     -   Operador Igualdad Estricta  (Compara valores)

*/

let edad = 80

edad = 81

if (edad >= 18) {
    console.log("Es mayor de edad")
}   else    {
    console.log("Es menor de edad")
}

/* ******************************** LOOP FOR ******************************** */
/*
    Hay muchas veces en las cuales nos interesa repetir un bloque de código varias veces
    En esos casos utilizamos las estructuras cíclicas o estructuras de repetición

    ¿Cómo funciona el loop for?
    Es una estructura que depende de una variable que llamamos "variable de control" que sirve
    para repetir un bloque de código varias veces según lo configuremos.

    ¿Cuál es la sintaxis del loop for?
    for ( declaración ; condición ; actualización ) {

    }

    ¿Qué es la declaración?
        Aquí es donde declaramos (con let) la variable de control y le asignamos (con el operador asignación)
        un valor inicial.

        Generalmente la variable de control se llama i y su valor inicial es 0

    ¿Qué es la condición?
        Es algo que se cumple (true) o es algo que no se cumple (false)
        Si la condición es true, no pasa nada
        Si en algún momento la condición es false, el loop creado por el for se detiene
        Básicamente el bloque se repite hasta que la condición sea falsa.

        Generalmente es alguna operación lógica (algo con operadores lógicos) con la variable de control
        Por ejemplo i < 10

    ¿Qué es la actualización?
        Es una línea de código que se ejecuta entre cada ejecución repetida del bloque
        La secuencia sería:
            Bloque -> Actualización ->  Bloque -> Actualización ->  Bloque -> Actualización ...

        Generalmente se usa para cambiar el valor de i asignándole (=) un valor mayor
        Por ejemplo i = i + 1

        Hay un atajo para asignarle un número mayor al i
        i = i + 1 es lo mismo que escribir i++
*/

for ( let i = 0 ; i < 10 ; i++ ) {

    //console.log("Soy parte del loop y el valor de i es ", i)

}

/* ******************************** FUNCIONES ******************************** */
/*
    Partes de funciones
    1)  Nombre          -
    2)  Parámetro(s)    -   Es la información recibida entre paréntesis
    3)  El retorno      -   Es la información que devuelve utilizando el parámetro

    f(x) = 5*x

    suma(x,y) = x+y     -   Función matemática

    Las funciones pueden ser referenciadas o pueden ser ejecutadas:

        Referenciar una función es escribirla sin ningún paréntesis.
        Devuelve el dato función que está almacenando la variable.
            console.log(suma)

        Ejecutar una función es escribirla y asignarle valores a sus parámetros
        Básicamente es escribirla concatenando paréntesis
        Devuelve el return de la función (Si es que tiene uno)
        Si la función NO tiene un return, devuelve undefined
            console.log(suma(1,1))
*/

function suma(x,y) {
    const resultado = x + y
    return resultado
}

function saludar(nombre) {
    console.log("Hola", nombre)
}



/*
    Existen 2 tipos de funciones distintas:

        1)  Las funciones definidas

        2)  Las funciones flecha (Las funciones lambda)

    Funciones Definidas:
        Son las funciones "de toda la vida" que tienen una característica especial:
        Automáticamente crean una variable y automáticamente le asignan el dato de la función a esa variable

    Funciones Flecha (O Lambda):
        Son las funciones que NO crean ninguna variable ni hacen ninguna asignación de forma automática
        Esas cosas las debe hacer el programador
        Su mínima expresión:    () => {}

        (NO confundir el operador flecha => con el operador mayor igual >=)

        Las funciones flecha tienen 2 atajos:
            1)  Si la función flecha recibe exactamente 1 sólo parámetro, los paréntesis son opcionales

            2)  Si el bloque de la función flecha tiene exactamente 1 línea de código 
                y además la única línea de código es un return, podemos borrar las llaves y la palabra
                return
*/

function duplicar(x) {
    return 2*x
}

const triplicar = (x) => { return 3*x }

const cuadruplicar = x => 4*x

/* ******************************** OBJETOS ******************************** */
/*
    ¿Qué es un objeto?
    Un objeto en Js es una colección de DATOS (y métodos) que utilizan el sistema clave:valor
    Un objeto en sí también es un tipo de dato, por lo que un objeto puede guardar otro objeto.

    ¿Qué es un método?
    Un método es una función almacenada dentro de un objeto

    Expresión mínima del objeto:
    {}

    ¿Cómo meto datos dentro de un objeto?
    Dentro del objeto escribimos duplas de clave:valor separadas por comas

    ¿Cómo podemos referenciar los distintos datos almacenados dentro de un objeto?
    Para referenciar una clave en particular de un objeto, se le concatena .clave
*/

const quintuplicar = (x) => { return 5*x }

const persona = { 
    edad: 23,
    casado: false,
    nombre: "Matias", 
    saludar: () => { console.log("Hola mundo") },
    calcular: quintuplicar,

    mascota: {
        nombre: "Pancho",
        edad: 4,
        saludar: () => { console.log("Guau guau") }
    }
}

persona.edad = persona.edad + 1

/* ******************************** ARRAYS ******************************** */
// También llamados Vectores o Listas
/*
    ¿Qué es un array?
    Un array en Js es una colección de datos que utiliza el sistema de indexado

    Un índice es un apartado que permite ubicar ciertos elementos

    Los datos datos de un array no tienen una clave
    Al no tener una clave, se distinguen según su POSICIÓN 

    Decimos que un array es una colección de datos ORDENADA porque el orden en el cual
    se ingresan los datos importa

    ¿Cómo ingreso datos en un array?
    Dentro de los corchetes, ponemos los datos separados por comas

    Expresión mínima del array:
    []

    Nota importante:
        El primer elemento de un array se considera la posición 0
        El segundo elemento de un array se considera la posición 1
        etc

    ¿Cómo referencio información dentro de un array?
    Le concatenamos [posicion]
    comidas[0] === "arroz"
*/

const comidas = ["arroz", "tomate", "papa", "milanesa"]