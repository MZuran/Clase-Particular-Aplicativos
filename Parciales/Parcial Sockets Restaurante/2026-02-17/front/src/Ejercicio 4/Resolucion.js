/*
    SOCKET          -   Una conexión entre UN cliente y UN servidor

                        Si el backend recibe un evento y hace un socket.emit, sólo el cliente que emitió el evento original
                        recibe el nuevo evento

    IO              -   TODOS los sockets conectados de UN servidor   

    IO.TO(ROOM)     -   TODOS los sockets conectados de UN servidor que estan en una room en particular
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

t.on("liberar_mesa", ({ numeroMesa }) => {
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