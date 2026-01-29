/*
    Consigna:

    Filtrar el array personas para que sólo se muestren las mujeres menores de edad.

    1)  Filtrar personas para obtener el array personasMenores
    2)  Filtrar personasMenores para obtener el array personasMenoresMujeres

    3) (Opcional) filtrar personas para conseguir el array de mujeresMenores en un sólo filtro
*/

console.log(personas)

const filtro1 = personas.filter(
    (persona) => {
        return persona.edad < 18
    }
)

const filtro2 = filtro1.filter(
    (persona) => {
        return persona.genero === "F"
    }
)

const filtro3 = personas.filter(
    (persona) => {

        const esMenor = persona.edad < 18
        const esMujer = persona.genero === "F"
        const esAna = persona.nombre == "Ana"

        return esMenor && esMujer && esAna
        //return persona.edad < 18 && persona.gener === "F" && persona.nombre == "Ana"
    }
)

/*
    &&      -       "AND"
    ||      -       "OR"
*/

console.clear()

// ********************************* EJERCICIO INTEGRADOR *********************************
/*
    1)  Crear una función llamada calcularPromedio.

        calcularPromedio(arrayNotas) recibe un array numérico de notas de cualquier largo.
        Usando .forEach, hacer que la funciíon calcularPromedio devuelva el promedio de las notas
        ingresadas.

    2)  Usando array.map, "transformar" el array de personas para que todos los objetos tengan sólo la siguiente
        información:

        { nombreCompleto, DNI, promedioNotas }

        callback(persona) === { nombreCompleto, DNI, promedioNotas }

    3)  Usando array.filter, filtrar a las personas del ejercicio anterior que cumplan la condición de promoción.
        (Promedio mayor o igual a 8)
*/

// [1,2,3,4,5]
function calcularPromedio(arrayNotas) {

    //  Calcular la sumatoria de TODAS LAS NOTAS (guardar en una variable)
    //  Dividir la sumatoria por la cantidad de notas (guardar en una variable)

    let sumatoria = 0
    const cantidadNotas = arrayNotas.length

    // Sumamos todas las notas en la variable sumatoria
    arrayNotas.forEach(
        (nota) => {
            sumatoria = sumatoria + nota
        }
    )

    return sumatoria / cantidadNotas
}

const personaEjemplo =
{
    nombre: "María",
    apellido: "Gómez",
    DNI: "45678901",
    edad: 17,
    genero: "F",
    notas: [10, 8, 9, 7]
}

const personasTransformadas = personas.map(
    (persona) => {

        const nombreCompleto = persona.nombre + " " + persona.apellido
        const DNI = persona.DNI
        const promedioNotas = calcularPromedio(persona.notas)

        return { nombreCompleto: nombreCompleto, DNI: DNI, promedioNotas: promedioNotas }
    }
)

const personasPromocionadas = personasTransformadas.filter(
    (persona) => {
        return persona.promedioNotas >= 8
    }
)