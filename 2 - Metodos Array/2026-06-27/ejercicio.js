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
        edad: 19,
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
        edad: 30,
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

/*
    Consigna:

    1)  Usando array.forEach(), crear una función llamada calcularPromedio( arrayNotas )
        La función recibe un array numérico de notas y devuelve por return el promedio

    2)  Usando array.map(), transformar el array de personas para pasar de:

        { nombre, apellido, DNI, edad, genero, notas }
        a
        { nombreCompleto, edad, genero, promedioNotas }

        Guardar el nuevo array transformado en una variable llamada "personasTransformadas"

    3)  Usando array.filter() (ya sea un filtro o muchos), filtrar a las personas para dejar sólamente
        a las mujeres mayores de edad que hayan promocionado.

        Mayor de edad quiere decir que edad >= 18
        Mujer quiere decir que genero == "M"
        Promocion quiere decir que promedioNotas >= 8

        Filtrar el array personasTransformadas y guardar el resultado en una variable llamada personasFiltradas
*/

//  1)

function calcularPromedio(arrayNotas) {

    //  Pasos para calcular un promedio
    //  Sumar cada nota
    //  Dividir la suma por la cantidad de notas

    let sumatoria = 0

    arrayNotas.forEach(
        (numero) => { sumatoria = sumatoria + numero }
    )

    let cantidadNotas = arrayNotas.length

    let promedio = sumatoria / cantidadNotas

    return promedio
}

//  2)

/*
    { nombre, apellido, DNI, edad, genero, notas }

    TRANSFOMAR lo de arriba

    { nombreCompleto, edad, genero, promedioNotas }
*/

const personasTransformadas = personas.map(

    (objetoPersona) => {


        return { 
            nombreCompleto: objetoPersona.nombre + " " + objetoPersona.apellido, 
            edad: objetoPersona.edad, 
            genero: objetoPersona.genero,
            promedioNotas: calcularPromedio( objetoPersona.notas )
        }

    }

)

const nombre = "Matias"
const apellido = "Zuran"

const nombreCompleto = nombre + " " + apellido

// 3)

/*
    Operadores de booleanos:
    &&      -   AND
    ||      -   OR
*/

const personasFiltradas = personasTransformadas.filter(

    (objetoPersona) => {

        let condicionMujer = objetoPersona.genero == "M"
        let condicionMayor = objetoPersona.edad >= 18
        let condicionPromedio = objetoPersona.promedioNotas >= 8

        return condicionMayor && condicionMayor && condicionPromedio
    }

)