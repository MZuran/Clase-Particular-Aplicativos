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

console.clear()

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

// 1)

function calcularPromedio(listaNotas) {

    let sumatoria = 0
    let cantidadNotas = listaNotas.length

    listaNotas.forEach(
        (nota) => {
            sumatoria = nota + sumatoria
        }
    )

    const promedio = sumatoria / cantidadNotas
    return promedio
}

// 2)
/*
        Elementos de la lista:
        { nombre, apellido, DNI, edad, genero, notas }

        {
            "nombre": "Juan",
            "apellido": "Pérez",
            "DNI": "34567890",
            "edad": 13,
            "genero": "M",
            "notas": [ 7, 9, 6 ]
        }
        
        Elementos de la lista transformada:
        { nombreCompleto, edad, genero, promedioNotas }
*/

const personasTransformadas = personas.map(

    (elementoPersona) => { 

        const nombreCompleto = elementoPersona.nombre + " " + elementoPersona.apellido
        const edad = elementoPersona.edad
        const genero = elementoPersona.genero
        const promedioNotas = calcularPromedio( elementoPersona.notas )
        
        // El elemento que recibe el callback se va a transformar en lo que se devuelva
        return { nombreCompleto: nombreCompleto, edad: edad, genero: genero, promedioNotas: promedioNotas } 
    }
)

// 3)
// Debemos filtrar a las personas transformadas para obtener un array de mujeres mayores de edad que hayan promocionado
/*
    Elementos de la lista transformada:
    { nombreCompleto, edad, genero, promedioNotas }
*/
const personasFiltradas = personasTransformadas.filter(
    (personaTransformada) => {

        const esMayor = personaTransformada.edad >= 18
        const esMujer = personaTransformada.genero === "F"
        const promociono = personaTransformada.promedioNotas >= 8

        return esMayor && esMujer && promociono
    }
)