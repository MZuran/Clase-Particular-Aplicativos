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

const dbConfig = {
    host: 'localhost',
    user: '????',
    password: '????',
    database: '2024-5INF-Examenes'
};

const mysql = require('mysql2/promise')

// app.get NO TIENE EL OBJETO BODY
/* El objeto body es un objeto de Js que envía el cliente al servidor para mandar información */

// No existe el body
app.get('/libros', async (req, res) => {

	// Intentar conseguir todos los libros

	try {
		
		const connection = await mysql.createConnection(dbConfig)
		const [rows] = await connection.execute("SELECT * FROM libros")
		await connection.end()

		return res.json({ libros: rows })

	} catch (error) {
		return res.json({ error: error })
	}

} )

// body: { nombre, valoracion }
app.post('/nuevoLibro', async (req, res) => {

	const nombre = req.body.nombre
	const valoracion = req.body.valoracion

	//const {nombre, valoracion} = req.body

	// INTENTAR guardar un libro nuevo

	try {
		
		if (!nombre || !valoracion) {
			return res.json({ error: "Nombre o valoración inválidos" })
		}

		const connection = await mysql.createConnection(dbConfig)
		await connection.execute("INSERT INTO libros (nombre,valoracion) VALUES (?,?)", [nombre, valoracion] )
		await connection.end()

		return res.json({ mensaje: "Libro insertado con éxito" })

	} catch (error) {
		return res.json({ error: error })
	}

} )

// body: { nombre, valoracion }
app.put('/nuevaValoracion', async (req, res) => {

	const nombre = req.body.nombre
	const nuevaValoracion = req.body.valoracion

	try {
		
		if (!nombre || !nuevaValoracion) {
			return res.json({ error: "Nombre o valoración inválidos" })
		}

		const connection = await mysql.createConnection(dbConfig)
		await connection.execute("UPDATE libros SET valoracion = ? WHERE nombre = ?", [nuevaValoracion, nombre] )
		await connection.end()

		return res.json({ mensaje: "Valoración modificada con éxito" })

	} catch (error) {
		return res.json({ error: error })
	}

} )

// body: { nombre }
app.delete('/borrarLibro', async (req, res) => {

	const nombre = req.body.nombre

	try {
		
		if (!nombre) { return res.json({ error: "Nombre inválido" }) }

		const connection = await mysql.createConnection(dbConfig)
		await connection.execute("DELETE FROM libros WHERE nombre = ?", [nombre] )
		await connection.end()

		return res.json({ mensaje: "Libro eliminado con éxito" })

	} catch (error) {
		return res.json({ error: error })
	}

} )