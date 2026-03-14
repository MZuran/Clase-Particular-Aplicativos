import { MiComponente } from "@/components/primerComponente";
import { Persona } from "@/components/persona";

/*
  ¿Cómo y dónde usamos los componentes comunes importados?
  Los usamos como si fuera cualquier otro HTML
*/

export default function Home() {


  return (
    <div>
      <h1>Página home</h1>

      <Persona nombre={"Matias"} edad={22} > </Persona>
      <Persona nombre={"Alex"} edad={12} > </Persona>
      <Persona nombre={"Ramiro"} edad={80} > </Persona>
      <Persona nombre={"Luca"} edad={1} > </Persona>

    </div>
  );
}
