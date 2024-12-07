// Esto para importar
import { io } from "socket.io-client"

// Usa SÓLO UNO DE ESTOS POR PAGINA, pasale por prop el socket a quienes lo necesiten

//const socket = io(url)

// Esto para recibir emits

useEffect(() => {
    socket.on("newMessage", (data) => {
        console.log("Llegó un nuevo mensaje!", data)
    })

    return () => {
        socket.removeAllListeners("newMessage")
        socket.disconnect()
    }
}, [])

// Funcion de marche
import { useSocket } from "@/hooks/useSocket"
const { socket, isConnected } = useSocket();

useEffect(() => {
    if (!socket) return;
    
    //aca pongo los socket.on

}, [socket, isConnected]);