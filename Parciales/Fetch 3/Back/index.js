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

// ----- DATOS EN MEMORIA -----

let equipos = [
	{ nombre: "River", fundacion: "25/05/1901", pais: "Argentina" },
	{ nombre: "Boca", fundacion: "03/04/1905", pais: "Argentina" },
	{ nombre: "Independiente", fundacion: "01/01/1905", pais: "Argentina" },
	{ nombre: "Racing", fundacion: "25/03/1903", pais: "Argentina" },
	{ nombre: "San Lorenzo", fundacion: "01/04/1908", pais: "Argentina" },

	{ nombre: "Barcelona", fundacion: "29/11/1899", pais: "España" },
	{ nombre: "Real Madrid", fundacion: "06/03/1902", pais: "España" },
	{ nombre: "Atletico Madrid", fundacion: "26/04/1903", pais: "España" },

	{ nombre: "Manchester City", fundacion: "16/04/1880", pais: "Inglaterra" },
	{ nombre: "Manchester United", fundacion: "05/03/1878", pais: "Inglaterra" },
	{ nombre: "Liverpool", fundacion: "03/06/1892", pais: "Inglaterra" },
	{ nombre: "Chelsea", fundacion: "10/03/1905", pais: "Inglaterra" },

	{ nombre: "Juventus", fundacion: "01/11/1897", pais: "Italia" },
	{ nombre: "Milan", fundacion: "16/12/1899", pais: "Italia" },
	{ nombre: "Inter", fundacion: "09/03/1908", pais: "Italia" },

	{ nombre: "PSG", fundacion: "12/08/1970", pais: "Francia" },
	{ nombre: "Bayern Munich", fundacion: "27/02/1900", pais: "Alemania" }
];

let jugadores = [
	{ nombre: "Messi", equipo: "Barcelona" },
	{ nombre: "Suarez", equipo: "Barcelona" },
	{ nombre: "Xavi", equipo: "Barcelona" },
	{ nombre: "Iniesta", equipo: "Barcelona" },

	{ nombre: "Ronaldo", equipo: "Real Madrid" },
	{ nombre: "Benzema", equipo: "Real Madrid" },
	{ nombre: "Modric", equipo: "Real Madrid" },

	{ nombre: "Mbappe", equipo: "PSG" },
	{ nombre: "Neymar", equipo: "PSG" },
	{ nombre: "Hakimi", equipo: "PSG" },

	{ nombre: "Haaland", equipo: "Manchester City" },
	{ nombre: "De Bruyne", equipo: "Manchester City" },
	{ nombre: "Foden", equipo: "Manchester City" },

	{ nombre: "Salah", equipo: "Liverpool" },
	{ nombre: "Van Dijk", equipo: "Liverpool" },
	{ nombre: "Alisson", equipo: "Liverpool" },

	{ nombre: "Riquelme", equipo: "Boca" },
	{ nombre: "Palermo", equipo: "Boca" },
	{ nombre: "Tevez", equipo: "Boca" },

	{ nombre: "Gallardo", equipo: "River" },
	{ nombre: "Alvarez", equipo: "River" },
	{ nombre: "Enzo Perez", equipo: "River" },

	{ nombre: "Milito", equipo: "Racing" },
	{ nombre: "Licha Lopez", equipo: "Racing" },

	{ nombre: "Bochini", equipo: "Independiente" },
	{ nombre: "Aguero", equipo: "Independiente" },

	{ nombre: "Ibrahimovic", equipo: "Milan" },
	{ nombre: "Lautaro Martinez", equipo: "Inter" },

	{ nombre: "Kimmich", equipo: "Bayern Munich" },
	{ nombre: "Muller", equipo: "Bayern Munich" }
];


// ----- GET /jugadores -----
// Devuelve un objeto con el vector de jugadores
app.get("/jugadores", (req, res) => {
	res.json({ jugadores });
});


// ----- GET /equipo -----
// Recibe nombre del equipo por query (?nombre=River)
app.get("/equipo", (req, res) => {
	const { nombre } = req.query;

	if (!nombre) {
		return res.status(400).json({ error: "Falta nombre del equipo" });
	}

	const equipo = equipos.find(
		e => e.nombre.toLowerCase() === nombre.toLowerCase()
	);

	if (!equipo) {
		return res.status(404).json({ error: "Equipo no encontrado" });
	}

	res.json(equipo);
});


// ----- PUT /traspaso -----
// Cambia el equipo de un jugador
app.put("/traspaso", (req, res) => {
	const { jugador, equipo } = req.body;

	if (!jugador || !equipo) {
		return res.json({
			modified: false,
			mensaje: "Faltan datos"
		});
	}

	const jugadorEncontrado = jugadores.find(
		j => j.nombre.toLowerCase() === jugador.toLowerCase()
	);

	const equipoExiste = equipos.find(
		e => e.nombre.toLowerCase() === equipo.toLowerCase()
	);

	if (!jugadorEncontrado) {
		return res.json({
			modified: false,
			mensaje: "Jugador no encontrado"
		});
	}

	if (!equipoExiste) {
		return res.json({
			modified: false,
			mensaje: "Equipo no encontrado"
		});
	}

	jugadorEncontrado.equipo = equipoExiste.nombre;

	res.json({
		modified: true,
		mensaje: "Traspaso realizado correctamente"
	});
});

const vectorJugadores = [
	{
		"nombre": "Aguero",
		"equipo": "Independiente"
	},
	{
		"nombre": "Ibrahimovic",
		"equipo": "Milan"
	},
	{
		"nombre": "Lautaro Martinez",
		"equipo": "Inter"
	},
	{
		"nombre": "Kimmich",
		"equipo": "Bayern Munich"
	},
]