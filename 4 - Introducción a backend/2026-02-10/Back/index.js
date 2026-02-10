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

/*
	"app" es el cerebro de nuestra aplicación backend.
	Controla cómo responder a cada una de las diferentes peticiones.

	Los métodos se utilizan para que el servidor se comunique con el usuario.

	Dentro de app, tenemos que aprender a utilizar los siguientes métodos:

	app.get()		-	Es el método "de lectura".
						Se usa cuando el usuario NO envía información al servidor.
						El servidor envía información al usuario.

						Siempre que usemos un navegador de internet para acceder a una url, estamos haciendo
						un pedido GET.

	app.post()		-	Es el método "de publicación"
						Se usa cuando el usuario QUIERE enviar información al servidor.
						El usuario envía la información dentro de un objeto llamado "body".
						El servidor puede enviar información al usuario como respuesta.

	app.put()		-	Es el método "de edición".
						Se usa cuando el usuario quiere MODIFICAR información almacenada en el servidor.
						El usuario envía información acerca de "qué cosa modificar" y "cómo hacerlo" en el body.
						El servidor puede enviar información al usuario como respuesta.

	app.delete()	-	Es el método "de borrar"
						Se usa cuando el usuario quiere BORRAR información almacenada en el servidor.
						El usuario envía información acerca de "qué cosa borrar" dentro del body.
						El servidor puede enviar información al usuario como respuesta.

	Un callback es una función (generalmente función flecha) que es un parámetro de una función.

	¿Qué reciben estos métodos?

	Los métodos reciben 2 parámetros:
		1)	Una ruta (string) para saber a qué dirección se debe hacer la peticion.
		2)	Un callback.

	¿Qué recibe el callback?
		1)	El objeto "req"		-	Es un objeto que contiene información del pedido (Información que entra)
		2)	El objeto "res"		-	Es un objeto que contiene infromación de respuesta (Información que sale)

	¿Qué hace el callback?
		El callback se va a ejecutar cada vez que se detecte una petición de cierto tipo a una ruta.
		Los callbacks SIEMPRE DEBEN TERMINAR con el comando res.json({})
*/

let datos = ["a", "b", "c", "d", "e", "f"]

app.get("/verDatos", (req, res) => {

	res.json({ datos: datos })
})

// El usuario nos debe enviar un body así:
// { nuevoDato }
app.post("/nuevoDato", (req, res) => {

	// El usuario envía información mediante el "body"
	// El objeto body es "Información que entra", por lo que está relacionada con el objeto req.
	// Para acceder al objeto body, hacemos req.body
	// Para extraer valores del body, por ejemplo, el del nuevo dato
	// hacemos req.body.nuevoDato

	const nuevoDato = req.body.nuevoDato

	// Si el usuario puso mal el body, entonces nuevoDato va a ser undefined
	if (nuevoDato == undefined) {

		res.json({ error: "Falta un nuevoDato en el body" })

	} else {

		datos.push(nuevoDato)
		res.json({ mensaje: "Dato ingresado correctamente" })

	}

})

// El usuario nos debe enviar un body así:
// { idDato, nuevoDato }
app.put("/modificarDato", (req, res) => {

	const idDato = req.body.idDato
	const nuevoDato = req.body.nuevoDato

	if ( idDato == undefined || nuevoDato == undefined ) {
		res.json({ error: "Body Inválido" })
	}

	datos[idDato] = nuevoDato
	res.json({ mensaje: "Dato modificado correctamente" })

})

// Java Script Object Notation
// res.json == "la respuesta del servidor va a ser el siguiente objeto de javascript"


// Peticiones HTTP
app.get('/mensaje', (req, res) => {
	res.send('Hola, este es un mensaje desde el servidor');
});

app.get('/usuarios', async (req, res) => {
	const query = "SELECT * FROM usuarios";
	const resultados = await realizarQuery(query);
	res.json(resultados);
});

// Comunicación Socket

io.on("connection", (socket) => {
	const req = socket.request;

	// Asignar room predeterminada si no está en ninguna room
	if (!req.session.room) {
		req.session.room = "1"; // Room predeterminada
		socket.join(req.session.room);
		console.log(`Cliente conectado sin room, asignada room por defecto: ${req.session.room}`);
	}

	// Acá abajo se escriben los eventos del socket
	socket.on(
		"mensaje",
		(data) => { 
			console.log("El front me mandó el mensaje: ", data.text)
			console.log("Emitiendo evento ping...")
			socket.emit("ping") 
		}
	)

});