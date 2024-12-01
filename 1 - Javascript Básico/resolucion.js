// Hace las resoluciones acá

/* --------------------------- EJERCICIO 1 --------------------------- */

console.log(personas)

/* --------------------------- EJERCICIO 2 --------------------------- */

console.log(productos)

const productosMapeados = productos.map(
    elemento => (
        { nombre: elemento.nombre, precio_ajustado: elemento.precio - (elemento.precio * elemento.descuento()) }
    )
)
console.log(productosMapeados)

productos.forEach(
    elemento => {
        console.log(elemento.nombre + " tiene un descuento de " + elemento.precio * elemento.descuento() );
    }
)

/* --------------------------- EJERCICIO 3 --------------------------- */

function sumaDeNotas(estudiante) {
    
    let sumaTotal = 0;

    estudiante.notas.forEach(
        elemento => sumaTotal = sumaTotal + elemento
    );

    return sumaTotal;
}

// Acordarse que en el mapeo, el parámetro puede tener cualquier nombre
// Generalmente le ponemos "elemento", pero aquí se llama "estudiante"

const estudiantesMapeados = estudiantes.map(
    estudiante => ({ nombre: estudiante.nombre, promedio: sumaDeNotas(estudiante) / estudiante.notas.length })
);

/* --------------------------- EJERCICIO 4 --------------------------- */