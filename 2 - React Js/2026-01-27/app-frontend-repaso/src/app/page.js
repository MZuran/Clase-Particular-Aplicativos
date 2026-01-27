import { PrimerComponente } from "@/components/primerComponente";
import { SegundoComponente } from "@/components/primerComponente";

export default function Home() {

  return (
    <>
      <h1>Página Home</h1>
      <p>Soy el componente página de <code>/app/page.js</code></p>

      <SegundoComponente
        nombre={"Matias"}
        apellido={"Zuran"}
        edad={22}
      ></SegundoComponente>

      <SegundoComponente
        nombre={"Alex"}
        apellido={"Ogan"}
        edad={22}
      ></SegundoComponente>

      <SegundoComponente
        nombre={"Ramiro"}
        apellido={"Molina"}
        edad={22}
      ></SegundoComponente>

    </>
  );
}
