// Paquetes instalados: -g nodemon, express, body-parser, socket.io
// Agregado al archivo "package.json" la línea --> "start": "nodemon index"

// Proyecto "Node_base"
// Desarrollo de Aplicaciones Informáticas - Proyecto de Producción - 5to Informática

// Docentes: Nicolás Facón, Matías Marchesi, Martín Rivas

// Revisión 5 - Año 2024

// Cargo librerías instaladas y necesarias
const express = require('express');						// Para el manejo del web server
const bodyParser = require('body-parser'); 				// Para el manejo de los strings JSON
const session = require('express-session');				// Para el manejo de las variables de sesión
const cors = require('cors');


const app = express();                                  // Inicializo express para el manejo de las peticiones

app.use(cors());            							// Inicializo express para el manejo de las peticiones

app.use(bodyParser.urlencoded({ extended: false }));	// Inicializo el parser JSON
app.use(bodyParser.json());

const LISTEN_PORT = 4000;								// Puerto por el que estoy ejecutando la página Web

const server = app.listen(LISTEN_PORT, () => {
	console.log(`Servidor NodeJS corriendo en http://localhost:${LISTEN_PORT}/`);
});;

const io = require('socket.io')(server, {
	cors: {
		// IMPORTANTE: REVISAR PUERTO DEL FRONTEND
		//origin: ['http://localhost:3000',"http://localhost:3001"],            	// Permitir el origen localhost:3000
		origin: "*",
		methods: ["GET", "POST", "PUT", "DELETE"],  	// Métodos permitidos
		credentials: true                           	// Habilitar el envío de cookies
	}
});

const sessionMiddleware = session({
	//Elegir tu propia key secreta
	secret: "supersarasa",
	resave: false,
	saveUninitialized: false
});

app.use(sessionMiddleware);

io.use((socket, next) => {
	sessionMiddleware(socket.request, {}, next);
});

// A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
// A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
// A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
// A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
// A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
// A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
// A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
// A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
// A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
// ================= SISTEMA DE MOZOS Y MESAS =================

// Estado del restaurante por sala (alumnoId)
const restauranteSalas = {};

// Función para crear un restaurante nuevo
function crearRestaurante() {
	const mesas = [];
	let numero = 1;

	// 12 mesas: 4 de 2, 4 de 4, 4 de 6
	[2, 4, 6].forEach(capacidad => {
		for (let i = 0; i < 4; i++) {
			mesas.push({
				numero: numero++,
				capacidad,
				estado: "libre",
				cliente: null
			});
		}
	});

	return {
		mesas,
		totalReservas: 0,
		mesasLibres: mesas.length
	};
}

io.on("connection", (socket) => {
	console.log("Cliente conectado:", socket.id);

	// Unirse a restaurante (sala)
	socket.on("join_restaurante", ({ alumnoId }) => {
		const ROOM = Number(alumnoId);
		socket.join(ROOM);
		socket.data.room = ROOM;

		// Inicializar restaurante si no existe
		if (!restauranteSalas[ROOM]) {
			restauranteSalas[ROOM] = crearRestaurante();
		}

		// Emitir estado inicial SOLO al cliente
		socket.emit("joined_OK_restaurante", { room: ROOM, restaurante: restauranteSalas[ROOM] });
	});

	// Reservar mesa
	socket.on("reservar_mesa", ({ mozo, cliente, capacidad }) => {
		const ROOM = socket.data.room;
		if (!ROOM) return;

		const restaurante = restauranteSalas[ROOM];

		// Buscar mesa libre con la capacidad pedida
		const mesa = restaurante.mesas.find(
			m => m.capacidad === Number(capacidad) && m.estado === "libre"
		);

		if (!mesa) {
			socket.emit("error_restaurante", {
				mensaje: "No hay mesas disponibles para esa capacidad"
			});
			return;
		}

		// Reservar mesa
		mesa.estado = "reservada";
		mesa.cliente = cliente;
		restaurante.totalReservas++;
		restaurante.mesasLibres--;

		// Notificar a TODA la sala
		io.to(ROOM).emit("restaurante_actualizado", { restaurante });
	});

	// Liberar mesa
	socket.on("liberar_mesa", ({ numeroMesa }) => {
		const ROOM = socket.data.room;
		if (!ROOM) return;

		const restaurante = restauranteSalas[ROOM];

		const mesa = restaurante.mesas.find(
			m => m.numero === Number(numeroMesa)
		);

		if (!mesa) {
			// Error SOLO al cliente que lo intentó
			socket.emit("error_restaurante", {
				mensaje: "Mesa no encontrada"
			});
			return;
		}

		if (mesa.estado === "libre") {
			socket.emit("error_restaurante", {
				mensaje: "La mesa ya está libre"
			});
			return;
		}

		// Liberar mesa
		mesa.estado = "libre";
		mesa.cliente = null;
		restaurante.mesasLibres++;

		// Notificar a TODA la sala
		io.to(ROOM).emit("restaurante_actualizado", {
			restaurante
		});
	});

	socket.on("disconnect", () => {
		console.log("Cliente desconectado:", socket.id);
	});

	socket.on("enviarMensajeBack", (data) => {
		console.log("Se recibió el mensaje", data.mensaje)
		socket.emit("enviarMensajeFront", { mensaje: "Hola soy el back", mensajeOriginal: data.mensaje } )
	})
});
