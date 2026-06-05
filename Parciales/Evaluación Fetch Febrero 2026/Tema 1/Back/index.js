//  Proyecto de Producción - 5to Informática

// Docentes: Matías Marchesi, Martín Rivas

// Año 2025

// Cargo librerías instaladas y necesarias
const express = require('express');						// Para el manejo del web server
const bodyParser = require('body-parser'); 				// Para el manejo de los strings JSON
const cors = require('cors');


const app = express();                                  // Inicializo express para el manejo de las peticiones

app.use(cors());            							// Inicializo express para el manejo de las peticiones

app.use(bodyParser.urlencoded({ extended: false }));	// Inicializo el parser JSON
app.use(bodyParser.json());

const LISTEN_PORT = 4000;								// Puerto por el que estoy ejecutando la página Web

const server = app.listen(LISTEN_PORT, () => {
	console.log(`Servidor NodeJS corriendo en http://localhost:${LISTEN_PORT}/`);
});;


const doctores = [
    { nombre: "Dr. Juan Pérez", especialidad: "Cardiología" },
    { nombre: "Dra. Ana Gómez", especialidad: "Clinica" },
    { nombre: "Dr. Luis Fernández", especialidad: "Neurología" },
    { nombre: "Dra. María López", especialidad: "Dermatología" },
    { nombre: "Dr. Carlos Ruiz", especialidad: "Traumatología" }
];

let pacientes = [
    { nombre: "Martín Rivas", obraSocial: "Galeno", nombreDoctor: "Dr. Juan Pérez" },
    { nombre: "Matias Marchesi", obraSocial: "Swiss Medical", nombreDoctor: "Dra. Ana Gómez" },
    { nombre: "Santiago Romero", obraSocial: "Galeno", nombreDoctor: "Dr. Luis Fernández" },
    { nombre: "Valeria Martínez", obraSocial: "Medicus", nombreDoctor: "Dra. María López" },
    { nombre: "Federico González", obraSocial: "OSDE", nombreDoctor: "Dr. Carlos Ruiz" },
    { nombre: "Camila Suárez", obraSocial: "Swiss Medical", nombreDoctor: "Dr. Juan Pérez" },
    { nombre: "Martín Castro", obraSocial: "Galeno", nombreDoctor: "Dra. Ana Gómez" },
    { nombre: "Florencia Díaz", obraSocial: "Medicus", nombreDoctor: "Dr. Luis Fernández" },
    { nombre: "Joaquín Herrera", obraSocial: "OSDE", nombreDoctor: "Dra. María López" },
    { nombre: "Agustina Benítez", obraSocial: "Swiss Medical", nombreDoctor: "Dr. Carlos Ruiz" }
];

app.get('/doctores', function (req, res) {
	res.send({ doctores: doctores })
})

app.post('/pacientesDoctor', function (req, res) {
	let entro = false
	let vectorPacientes = []
	for (let i = 0; i < pacientes.length; i++) {
		const element = pacientes[i];
		if (element.nombreDoctor == req.body.nombreDoctor) {
			entro = true;
			vectorPacientes.push(element)
		}
	}
	if (entro) {
		
		res.send({ pacientes: vectorPacientes })
	} 
	if (!entro) {
		res.send({ pacientes: "No se encontraron pacientes" })
	}
})

app.delete('/eliminarPaciente', function (req, res) {
    let entro = false
	
	for (let i = 0; i < pacientes.length; i++) {
		const element = pacientes[i];
		if (element.nombreDoctor == req.body.nombreDoctor && element.nombre == req.body.nombrePaciente) {
            entro = true;
			pacientes.splice(i, 1);
            res.send({ ok: true, mensaje: "Paciente eliminado correctamente." });
		}
	}

    if (!entro) {
        res.send({ ok: false, mensaje: "No se encontró el paciente para ese doctor." });
    }
});
