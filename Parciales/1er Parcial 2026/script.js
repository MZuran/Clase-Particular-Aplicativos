// Javascript Puro

function costoPorPeso(kg) {
    return kg * 1500
}

function costoPorDistancia(km) {
    return km * 85.5
}

function costoInternacional(pesos, cotizacion) {
    return pesos / cotizacion
}

function redondear(numero, decimales) {
    const factor = Math.pow(10, decimales);
    return Math.round(numero * factor) / factor
}

console.log(redondear(costoPorPeso(2.5), 2))
console.log(redondear(costoInternacional(10000, 1350), 3))

// Clases

class Envio {

    constructor(id, tipo, valorOriginal, costo, fecha) {
        this.id = id
        this.tipo = tipo
        this.valorOriginal = valorOriginal
        this.costo = costo
        this.fecha = fecha
    }

}

class HistorialEnvios {

    constructor() {
        this.envios = []
    }

    agregar(envio) {
        this.envios.push(envio)
    }

    obtenerPorTipo(tipo) {

        let arrayResultante = []

        // Queremos recorrer TODO el array this.envios
        for (let i = 0; i < this.envios.length; i++) {

            const elementoActual = this.envios[i]

            /*
                "Si el tipo del elemento actual es igual al
                tipo filtrado, lo metemos al array resultante"
            */

            if (elementoActual.tipo === tipo) {
                arrayResultante.push(elementoActual)
            }

        }

        return arrayResultante
    }
}

const historial = new HistorialEnvios();

/*
    El enunciado nos pide agregar envíos.
    Pero para agregar un envío, tenemos que crearlo (Instanciarlo)
*/

historial.agregar(
    new Envio(1, "peso", 2.5, 3750, new Date().toLocaleDateString())
)

historial.agregar(
    new Envio(2, "distancia", 12, 1026, new Date().toLocaleDateString())
)

historial.agregar(
    new Envio(3, "internacional", 10000, 7.41, new Date().toLocaleDateString())
)

let nextId = 4;

// DOM
function cotizarEnvio() {

    const selectTipo = document.getElementById("select-tipo");
    // selectTipo es TODO EL COMPONENTE DEL SELECT
    // para tomar la opción seleccionada por el usuario, usamos selectTipo.value

    const input = document.getElementById("input-valor");
    // para tomar la opción seleccionada por el usuario, usamos input.value

    const valorInput = Number(input.value)        //  Valor ingresado
    const valorSelect = selectTipo.value            //  Tipo seleccionado

    if (valorInput == NaN || valorInput == "") {
        alert("Valor inválido")
    }

    let costo = 0

    // "Si el tipo seleccionado es peso, el costo va a ser igual a costoPorPeso(valor)"

    if (valorSelect == "peso") {
        costo = costoPorPeso(valorInput)
    }

    if (valorSelect == "distancia") {
        costo = costoPorDistancia(valorInput)
    }

    if (valorSelect == "internacional") {
        costo = costoInternacional(valorInput, 1350)
    }

    // Ejercicio 3.1.5
    costo = redondear(costo, 2)

    // Ejercicio 3.1.6
    const envioFinal = new Envio(nextId, valorSelect, valorInput, costo, new Date().toLocaleDateString())
    nextId++

    // Ejercicio 3.1.7
    historial.agregar(envioFinal)

    // Ejercicio 3.1.8
    const cajaResultado = document.getElementById("resultado")
    cajaResultado.innerHTML = costo

    // Ejercicio 3.1.9
    mostrarEnvios()
}

function mostrarEnvios() {

    // Ejercicio 3.2.1
    const cajaHistorial = document.getElementById("lista-historial");

    const arrayEtiquetas = []

    // Ejercicio 3.2.2
    for (let i = 0; i < historial.envios.length; i++) {

        const envioActual = historial.envios[i];
        const tipo = envioActual.tipo
        const valorOriginal = envioActual.valorOriginal
        const costo = envioActual.costo
        const fecha = envioActual.fecha

        const etiquetaNueva = `<p>${tipo} — ${valorOriginal} → $${costo} (${fecha})</p>`
        arrayEtiquetas.push(etiquetaNueva)
    }

    // Ejercicio 3.2.4
    cajaHistorial.innerHTML = arrayEtiquetas

}

// Ejercicio 3.2.5
window.onload(mostrarEnvios())

// Ejercicio 3.3
function limpiarEnvios() {
    historial.envios = []
    mostrarEnvios()
}

// [envioA, envioB, ...] -> [etiquetaA, etiquetaB, ...]