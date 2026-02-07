import { Tarjeta } from "@/components/Tarjeta";

const personas = [
  { nombre: "Juan", apellido: "Pérez", edad: 25, dni: "34567890", genero: "M" },
  { nombre: "María", apellido: "Gómez", edad: 17, dni: "45678901", genero: "F" },
  { nombre: "Carlos", apellido: "López", edad: 32, dni: "23456789", genero: "M" },
  { nombre: "Ana", apellido: "Martínez", edad: 15, dni: "56789012", genero: "F" },
  { nombre: "Lucía", apellido: "Fernández", edad: 19, dni: "67890123", genero: "F" }
];

// Si react intenta "renderizar" un array que tiene HTML o Componentes
// lo puede renderizar sin problema

const arrayPrueba = [<p>Hola</p>, <p>Hola</p>, <p>Hola</p>, <p>Hola</p>, <p>Hola</p>, <p>Hola</p>,]

// [ {...},{...},{...},{...},{...},{...} ]
// [ <Tarjetas/>,<Tarjetas/>,<Tarjetas/>,<Tarjetas/> ]

export default function Home() {
  return (
    <>
      <h1>Home</h1>

      {
        personas.map(
          (objetoPersona) => {
            return <Tarjeta
              nombre={objetoPersona.nombre}
              apellido={objetoPersona.apellido}
              edad={objetoPersona.edad}
              genero={objetoPersona.genero}
              key={objetoPersona.dni}
            />
          }
        )
      }

      <Tarjeta nombre={"Matias"} edad={22} />

    </>
  );
}
