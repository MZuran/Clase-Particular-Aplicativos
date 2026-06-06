/*
    El backend tiene 3 objetos principales para emitir socket:

    socket.emit         -   Le emite un evento a ÚN sólo cliente.
                            El cliente que recibe esto va a ser el que emitió "join_restaurante" (en este caso)

    io.emit             -   Le emite un evento a TODOS los clientes

    io.to(room).emit    -   Le emite un evento a TODOS los clientes que estén en la sala llamada room
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