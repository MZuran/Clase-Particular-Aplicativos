// Estructuras de repetición / Estructuras cíclicas
/*
    Son estructuras de código que se pueden configurar para repetir un bloque de código muchas veces.
*/

// ************************** LOOP FOR **************************
/*
    Es una estructura de reptetición que se puede configurar para que el código repita algo
    un determinado número de veces.

    La característica principal del loop for es que se maneja según una "variable de control"

    for ( declaración ; condición ; actualización ) {
    
    }

    1)  Declaración:
        Declaramos con let la variable de control y le asignamos un valor inicial.
        Generalmente lo más común es poner

        let i = 0

    2)  Condición:
        Es una condición cuyo valor va a detener el loop en algún momento determinado.
        Si la condición es verdadera, el loop puede continuar
        Si la condición es false, el loop se detiene

        Generalmente se arma comparando el valor de la variable de control a algún otro valor
        i < 10

    3)  Actualización:
        Es una línea de código que se ejecuta entre cada repetición del loop.
        Cuando tenemos un bloque que se ejecuta muchas veces la secuencia de ejecución va a ser
            bloque > actualización > bloque > actualización > bloque > actualización > bloque > actualización 

        Generalmente se usa para aumentar el valor de i
        i = i + 1
        La línea de código de arriba tiene una sintaxis más corta que es
        i++

        Para restar por uno podemos hacer i--
*/

for ( let i = 0 ; i < 10 ; i = i + 1 ) {
    
    console.log("Soy el bloque del for. Mi valor de i es", i)

}