/*
    SOCKET      -       Simboliza 1 única conección
                        Si se usa socket.emit, se emite sólamente al cliente que se detectó con socket.on

    IO          -       Simboliza TODAS las conecciones activas
                        Si se usa io.emit, todos los sockets reciben un evento

    IO.TO(ROOM) -       Simboliza a una sala
                        Si se usa io.to(room).emit, todos los sockets de la sala room reciben un evento
*/


socket.on("join_restaurante", ({ alumnoId }) => {
    const ROOM = Number(alumnoId);
    socket.join(ROOM);
    socket.data.room = ROOM;

    // ... código de inicialización ...

    // Emitir 'joined_OK_restaurante' SOLO a este socket
    // Debe enviar: { room: ROOM, restaurante: restauranteSalas[ROOM] }
    // COMPLETAR CON EL EVENTO ACÁ ABAJO:

    socket.emit("joined_OK_restaurante", { room: ROOM, restaurante: restauranteSalas[ROOM] })
});

socket.on("reservar_mesa", ({ mozo, cliente, capacidad }) => {
    const ROOM = socket.data.room;

    // ... validaciones y lógica ...

    // Emitir 'restaurante_actualizado' a TODA LA SALA
    // Debe enviar: { restaurante: restauranteSalas[ROOM] }
    // COMPLETAR CON EL EVENTO ACÁ ABAJO:

    io.to(ROOM).emit("restaurante_actualizado", { restaurante: restauranteSalas[ROOM] })
});

socket.on("liberar_mesa", ({ numeroMesa }) => {
    const ROOM = socket.data.room;

    // Buscar mesa
    const mesa = restaurante.mesas.find(
        m => m.numero === Number(numeroMesa)
    );

    if (!mesa) {
        // Emitir 'error_restaurante' SOLO a este socket
        // Debe enviar: { mensaje: "Mesa no encontrada" }
        // COMPLETAR CON EL EVENTO ACÁ ABAJO:

        socket.emit("error_restaurante", { mensaje: "Mesa no encontrada" })

        return;
    }

    // ... resto del código ...
});