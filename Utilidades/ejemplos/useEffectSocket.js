// Recordar que io se debe importar del paquete socket.io

const socket = io("http://localhost:4000/")

useEffect(() => {

    // Si nosotros queremos que el componente tenga un .on() generalmente irá dentro de este useEffect

    // Cuando un componente "muere" se ejecuta el return de su useEffect
    return () => {
        socket.removeAllListeners();
        socket.disconnect();
    }

}, [socket]);