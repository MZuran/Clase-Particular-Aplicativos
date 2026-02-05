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

function calcularPromedio(arrayNotas) {
    //  Debemos calcular el promedio del arrayNotas

    //  1) Sumar todas las notas en el array
    //  2) Dividir la sumatoria por la cantidad de notas

    let sumatoria = 0

    arrayNotas.forEach(
        (notaActual) => { sumatoria = sumatoria + notaActual }
    )

    const promedio = sumatoria / arrayNotas.length

    return promedio
}

/*
    {
        nombre: "Lucas",
        apellido: "Rodríguez",
        DNI: "56789012",
        edad: 30,
        genero: "M",
        notas: [6]
    }
*/

const personasTransformadas = personas.map(
    (objetoPersona) => {

        const nombreCompleto = objetoPersona.nombre + " " + objetoPersona.apellido
        const promedioNotas = calcularPromedio(objetoPersona.notas)

        return {
            nombreCompleto: nombreCompleto,
            edad: objetoPersona.edad,
            genero: objetoPersona.genero,
            promedioNotas: promedioNotas
        }
    }
)

/*
{
    "nombreCompleto": "Juan Pérez",
    "edad": 13,
    "genero": "M",
    "promedioNotas": 7.333333333333333
}

    AND -   &&
    OR  -   ||

    true && false == false
    true || false == true
*/

const personasFiltradas = personasTransformadas.filter(
    (objetoPersona) => {
        const esMayor = objetoPersona.edad >= 18
        const esMujer = objetoPersona.genero == "F"
        const promociono = objetoPersona.promedioNotas >= 8

        return esMayor && esMujer && promociono
    }
)