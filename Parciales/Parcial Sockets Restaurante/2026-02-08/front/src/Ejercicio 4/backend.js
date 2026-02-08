/*
    SOCKET          -   Dentro de un socket.on, el objeto socket simboliza a "UNA SÓLA CONECCIÓN."
                        Si un cliente "x" me emitió el evento "mensaje" y el backend lo recibió, el socket será el cliente "x"

    IO              -   Dentro de un socket.on, el objeto io simboliza a "TODAS LAS CONECCIONES"
                        Si el backend hace un io.emit, entonces lo recibiran TODOS LOS CLIENTES

    IO.TO(ROOM)     -   Dentro de un socket.on, io.to(room) simboliza a "TODAS LAS COLECCIONES EN UNA DETERMINADA ROOM"
                        Por ejemplo, io.to(2).emit() emite un evento a todos los clientes en la room "2".
*/

socket.on("join_restaurante", ({ alumnoId }) => {
    const ROOM = Number(alumnoId);
    socket.join(ROOM);
    socket.data.room = ROOM;

    // ... código de inicialización ...

    // Emitir 'joined_OK_restaurante' SOLO a este socket
    // Debe enviar: { room: ROOM, restaurante: restauranteSalas[ROOM] }
    // COMPLETAR CON EL EVENTO ACÁ ABAJO:

    socket.emit('joined_OK_restaurante', { room: ROOM, restaurante: restauranteSalas[ROOM] })
});

socket.on("reservar_mesa", ({ mozo, cliente, capacidad }) => {
    const ROOM = socket.data.room;

    // ... validaciones y lógica ...

    // Emitir 'restaurante_actualizado' a TODA LA SALA
    // Debe enviar: { restaurante: restauranteSalas[ROOM] }
    // COMPLETAR CON EL EVENTO ACÁ ABAJO:

    io.to(ROOM).emit('restaurante_actualizado', { restaurante: restauranteSalas[ROOM] })
});

ocket.on("liberar_mesa", ({ numeroMesa }) => {
    const ROOM = socket.data.room;

    // Buscar mesa
    const mesa = restaurante.mesas.find(
        m => m.numero === Number(numeroMesa)
    );

    if (!mesa) {
        // Emitir 'error_restaurante' SOLO a este socket
        // Debe enviar: { mensaje: "Mesa no encontrada" }
        // COMPLETAR CON EL EVENTO ACÁ ABAJO:

        socket.emit('error_restaurante', { mensaje: "Mesa no encontrada" })

        return;
    }

    // ... resto del código ...
});