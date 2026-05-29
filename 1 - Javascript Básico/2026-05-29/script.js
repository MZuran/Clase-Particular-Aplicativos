/*
    Variable:   Es el espacio de memoria que puede almacenar un dato

        Tipos de Variables:

        *   Variable let    -   Su dato asignado es dinámico. Puede cambiar con el tiempo.
        *   Variable const  -   Su dato asignado es constante. No cambia nunca.

    Dato:       Es una unidad de información

        Tipos de Datos:

        *   Strings     -   " "  ' '  ´ ´

        *   Number      -   Cualquier número

        *   Booleanos   -   true, false

        *   Funciones   -   () => {}            -   Para ejecutar una función, concatenamos (parametros)
                                                    Ejemplo: calcular(2), persona.mascota.saludar()

        *   Objeto      -   {}                  -   Para acceder a un dato, concatenamos .clave
                                                    Ejemplo: persona.nombre

        *   Array       -   []                  -   Para acceder a un dato, concatenamos [posicion]
                                                    Ejempo comidas[2]

*/

// *************************************** COMPARACIÓN ***************************************

console.clear()
let condicion = 5 === "5"

if (condicion) {

    // Se ejecuta si la condición es true
    console.log("La condición es verdadera")

} else {

    // Se ejecuta si la condición es false
    // Este bloque es opcional

    console.log("La condición es falsa")

}

/*
    Una condición es un DATO.
    Dependiendo del valor del dato, la condición se va a evaluar como "Truthy" o como "Falsy"

    TODOS los datos se dividen en 2 categorías:

        Categoría Truthy
        Categoría Falsy


    Operadores Ariméticos (Matemáticos):
        Son operadores que reciben datos (números) y devuelven otro dato (números)
        Ejemplos: +, -, *, /

    Operador Lógico:
        Son operadores que reciben datos (números, strings) y devuelven otro dato (booleano)

    Tabla de operadores:

        =       -   Operador de asignación. Le asigna un dato a una variable.
        ==      -   Operador de igualdad débil. Compara valores pero no compara tipos de datos.
        ===     -   Operador de igualdad estricta. Compara valores y tipos de datos.
*/

// *************************************** FUNCIONES ***************************************
/*
    Una función puede ser entendida como una serie de instrucciones que puede recibir información.
    Los componentes de una función son:
        1)  El nombre
        2)  Los parámetros
        3)  El retorno

    Referencia de una función:
        La referncia de una función se refiere a "el código" que conforma la función.
        En lugar de ejecutar líneas, devuelve las líneas que ejecutaría en caso de ejecutarse.

        ¿Cómo hacemos referencia a el código de una función?
        Escrimos el nombre SIN paréntesis, por ejemplo:
        duplicar

    Ejecución de una función:
        Ejecutar una funcón significa "hacerla correr" y devolver lo que tenga en el return.
        En caso de no haber ningún return, va a devolver undefined.

        ¿Cómo ejecutamos una función?
        duplicar(1)
*/

/*
    Tipos de Funciones:

    1)  Funciones definidas:
        Son las funciones "de toda la vida" que utilizan la palabra reservada "function" y tienen la siguiente característica especial:
        Automáticamente crean una variable y automáticamente le asignan el dato de la función a esa variable.

    2)  Funciones Flecha (Lambda)
        Son el segundo tipo de función más común de todo Js.
        A diferencia de la función definida, NO crea ninguna variable y NO hace ninguna asignación.

        Mínima Expresión:   () => {}

    3)  Funcion Flecha Con Sintaxis Abreviada (Opcional)
        Las funciones flecha a veces se pueden escribir con menos caracteres.
        a)  Si la función flecha SÓLAMENTE recibe UN SÓLO PARÁMETRO, podemos no escribir los paréntesis.
        b)  Si la función flecha SÓLAMENTE tiene una línea de código y esa línea es un return:
            Podemos borrar las llaves y la palabra clave return
*/

function duplicar(x) {
    return 2 * x
}

const triplicar = (x) => { return 3 * x }

const cuadruplicar = x => 4 * x

// *************************************** ESTRUCTURAS CÍCLCICAS ***************************************
/*
    Loop For:

    ¿Qué es un loop for?
        Es una estructura que nos permite repetir la ejecución de un bloque de código una cierta cantidad de veces
        según configuremos el for.

        La "ejecución" de este loop va a depender de una variable que le vamos a llamar variable de control.
        Según una condición que utilice la variable de control, el loop continúa o se detiene

    ¿Cuál es la sintaxis del loop for?

        for ( inicialización ; condición ; actualización ) {}

        inicialización:
            Acá definimos la variable de control con let. (No olvidarse del valor inicial)
            Generalemente la variable de control la vamos a llamar i.

        condición:
            Si la condición es Truthy, el loop va a continuar ejecutandose.
            Si la condición es Falsy, el loop se detiene.
            La condición siempre debe depender de alguna forma de la variable de control.

        actualización:
            Es una línea de código que se ejecuta luego de cada ejecución de bloque de código.
            Se usa para cambiar el valor de i.

            Nota:
                i = i + 1 se puede escribir como i++
                i = i - 1 se puede escribir como i--

*/

for (let i = 0; i < 5; i++) {

    console.log("Esta es la repetición número #", i)

}


// *************************************** OBJETOS ***************************************
/*
    Un objeto en Js es una colección de datos (y métodos) que utiliza el sistema clave:valor.

    ¿Cuál es la mínima expresión del objeto?
    {}

    ¿Qué es un método?
    Un método es la forma que tenemos de llamar a una función almacenada dentro de un objeto.

    ¿Cómo almacenamos datos dentro de un objeto?
    Dentro de las llaves del objeto, vamos a escribir las duplas de clave:valor separadas por comas.

    ¿Cómo accedemos a los valores dentro de un objeto?
    Concatenamos el nombre del objeto, un punto y la clave deseada.
    Por ejemplo:
        persona.nombre
*/

const persona = {
    nombre: "Matias",
    edad: 22,
    egresado: true,

    saludar: (nombre) => { console.log("Hola ", nombre) },  //  Método por función anónima
    calcular: triplicar,                                    //  Método por referencia

    mascota: {
        nombre: "Pancho",
        especie: "Perro",
        saludar: () => { console.log("Guau guau") }
    }
}

// *************************************** ARRAYS (VECTORES) ***************************************
/*
    Un array en Js es una colección de datos que utiliza el sistema de indexado.

    ¿Cuál es la mínima expresión del array?
    []

    ¿Cómo funciona el sistema de indexado?
    A difercia de los objetos, los datos almacenados en los arrays NO tienen clave.
    Para distinguir un dato de otro, Js utiliza la POSICIÓN del dato individual.
    Es un sistema de datos ordenados.

    ¿Cómo almacenamos datos dentro de un array?
    Dentro de los corchetes del array, escribimos los datos separados por comas.
    El orden y la posición de los datos IMPORTA.

    ¿Cómo accedemos a los valores almacenados dentro de un array?
    Concatenamos el nombre del array con unos corchetes que contengan una posición.
    (La primera posición siempre es el número 0)

    Por ejemplo: comidas[0]
*/

const comidas = ["Milanesa", "Puré", "Papas", "Coca"]

// **************************************** EJERCICIO ****************************************

const arrayComplicado = [1, 2, () => { }, [
    "a", "b", ["c", "d"], () => {
        return {
            seguir: {
                seguirDeNuevo: () => {
                    return (
                        () => {
                            return {
                                salida: ["llegaste"]
                            }
                        }
                    )
                }
            }
        }
    }
]]

// Respuesta
// arrayComplicado[3][3]().seguir.seguirDeNuevo()().salida[0]