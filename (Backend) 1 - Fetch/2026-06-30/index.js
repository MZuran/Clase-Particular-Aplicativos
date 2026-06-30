var express = require('express'); //Tipo de servidor: Express
var bodyParser = require('body-parser'); //Convierte los JSON
var cors = require('cors');
const { realizarQuery } = require('./modulos/mysql');

var app = express(); //Inicializo express
var port = process.env.PORT || 4000; //Ejecuto el servidor en el puerto 4000

// Convierte una petición recibida (POST-GET...) a objeto JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//Pongo el servidor a escuchar
app.listen(port, function () {
  console.log(`Server running in http://localhost:${port}`);
});

// *************************** LO DE ARRIBA ES CONFIGURACIÓN ***************************


/*

  app.get()

  Lo que hace:			Cuando el servidor recibe una petición de tipo GET
              a la dirección asociada, ejecuta el callback.

  Recibe:					Dirección (String), Callback (Asíncrono)

  Devuelve:				Nada importante.

  (Callback) Recibe:		req(objeto), res(objeto)

  (Callback) Devuelve:	Nada importante.

  Objetos req y res:
    Estos objetos simbolizan las "dos partes" relacionadas con el fetch.
    req viene de peticion (request)
    res viene de respuesta (response)

    Estos objetos tienen ciertos métodos y claves que son extremadamente importantes
    para el backend.

    El cliente SIEMPRE se va a quedar esperando una respuesta.
    Si el servidor no responde, el cliente se queda "atrapado" esperando.
    SIEMPRE hay que responder a todas las peticiones.

  Partes importantes de req:
    ¿Cómo puede el cliente enviar información al servidor?

    1)	Un body en el request. Se accede con req.body
    2)  Una searchQuery. Se accede con req.query

          Una searchQuery es un objeto que se puede escribir al final de cualquier URL.
          Siempre comienzan con un signo de pregunta ?
          Y después se escriben con la sintaxis clave=valor separados por ampersand &

          simpsons.com/?padre=homero&hijo=bart&hija=lisa

  Partes importantes de res:
    El objeto res "configura" la respuesta que le va a llegar al usuario.
    Generalmente se hace con alguno de sus muchos callbacks:

    res.send()	-	Devuelve un string
    res.json()	-	Devuelve un objeto
*/

// Siempre que hablamos del "body" en contexto del fetch, nos referimos a un objeto
// que viaja con la petición o con la respuesta

const personas = [
  {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 25,
    dni: "30123456",
  },
  {
    nombre: "María",
    apellido: "Gómez",
    edad: 22,
    dni: "28987654",
  },
];

// http://localhost:4000/home
app.get("/home", async (req, res) => {

  res.json({
    mensaje: "Hola como estás"
  })
})

app.get("/personas", async (req, res) => {

  res.json({
    mensaje: "Las personas son:",
    personas: personas
  })
})

app.get("/pruebaQuery", async (req, res) => {

  res.json({
    mensaje: "Las querys son:",
    queries: req.query
  })
})

// Vamos a configurar este body para que agregue una nueva persona
app.post("/personaNueva", async (req, res) => {

  const personaNueva = req.body

  if (personaNueva.nombre && personaNueva.apellido && personaNueva.dni && personaNueva.edad) {
    // Metemos el dato nuevo en nuestra información
    personas.push(personaNueva)

    res.json({
      message: "Persona ingresada exitosamente",
      listaPersonas: personas
    })
  } else {
    res.json({
      message: "Faltan Datos"
    })
  }

})

// Función realizarQuery
/*
    Que hace:     Ejecuta la query recibida en SQL según la configuración del objeto
                  en modulos/mysql.js

                  realizarQuery depende de que dos computadoras se hablen entre sí.
                  Debemos ESPERAR a que termine antes de continuar.
                  Recordemos que las únicas funciones que pueden ESPERAR son las asíncronas.
                  Para esperar, usamos la palabra await

                  await realizarQuery("SELECT * FROM Jugadores;")

    Recibe:       Una query de sql en forma de string
    Devuelve:     Devuelve los resultados de la query (string, objeto, lista)
*/
app.get("/pruebaSql", async (req, res) => {

  try {

    const response = await realizarQuery(`SELECT * FROM Jugadores WHERE cantGoles = ${req.query.goles}`)
    res.json({
      respuesta: response
    })

  } catch (error) {

    console.log(error)

    res.json({
      error: "Cantidad de goles invalida"
    })

  }
})