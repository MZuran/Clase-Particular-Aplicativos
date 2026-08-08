/*
    Una "plantilla" de un objeto
    Un "molde" para crear objetos similares
    Las clases se utilizan para crear en masa muchos objetos similares

    Queremos modelar las personas
    ¿Que tiene una persona?
        1. Nombre
        2. Apellido
        3. Edad
        4. DNI

    ¿Que quiere decir instanciar (o crear una instancia de) una clase?
        Significa usar la clase para crear un objeto.

    ¿Cómo funcionan las clases?
        Las clases son una "función especial" que te arman y devuelven un  objeto según los datos 
        ingresados.

    ¿Cómo hacemos que una clase reciba parámetros?
        Los parámetros que recibe la clase los configuramos según los parámetros que recibe el
        método constructor. El método constructor es una función que se va a ejecutar tan pronto como
        se cree el objeto nuevo.

        Dentro del constructor, si queremos asignar una clave al objeto nuevo, lo hacemos usando
        this.clave

        Por ejemplo, queremos que los objetos tengan un nombre:
        Entonces el constructor tendrá la línea
        this.nombre = "Matías"

    ¿Cuál es la sintaxis de las clases?
        class Persona {
        
            constructor(nombre) {
                this.nombre = nombre
            }

            saludar() { console.log("Hola") }
        }
*/

const persona1 = {
    nombre: "Matias",
    apellido: "Zuran",
    edad: 23,
    DNI: 1092380912
}

class Persona {

    // Funciones (Métodos)

    // El constructor recibe los parámetros que recibe la clase
    constructor(nombre, apellido, edad, DNI) {
        // El constructor se ejecuta cada vez que instanciemos una clase
        console.log("Nueva persona creada")

        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.DNI = DNI
    }

    saludar() {
        console.log("Hola me llamo " + this.nombre)
    }

}

// ****************** CÓMO INSTANCIAR UNA CLASE ******************

const persona2 = new Persona("Alex", "Ogan", 24, 109238)

console.log(persona2)

persona2.saludar()

/*

    <div id="lista-historial">
        Todo esto es innerHTML
    </div>

*/