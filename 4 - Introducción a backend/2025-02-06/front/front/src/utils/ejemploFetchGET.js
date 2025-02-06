const customFetch = async () => {
    const url = "http://localhost:4000"
    const ruta = url + "/req/2?q=banana"
    const metodo = "GET" // puede ser "GET", "POST", etc

    try {
        const response = await fetch(ruta, {
            method: metodo,
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const responseData = await response.json();

        /* ************************************ A PARTIR DE ACÁ PROGRAMAR ************************************ */

        console.log('Respuesta del servidor:', responseData);
        
        /* ************************************ DEJAR DE PROGRAMAR ************************************ */

    } catch (error) { console.error('Hubo un error en la solicitud:', error); }
}

customFetch()