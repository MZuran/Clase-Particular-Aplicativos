
/*
  Todos los archivos page.js tienen un componente página.
*/

import { PrimerComponente } from "@/components/PrimerComponente";
import { Tarjeta } from "@/components/Tarjeta";

export default function Home() {


  return (<>

    <h1>Hola soy el home</h1>
    <p>Esta es mi primer página</p>
    <hr />

    <PrimerComponente></PrimerComponente>

    <Tarjeta
      nombre={"Matias"}
      edad={22}
    ></Tarjeta>


    <Tarjeta
      nombre={"Alex"}
      edad={22}
    ></Tarjeta>


    <Tarjeta
      nombre={"Ramiro"}
      edad={22}
    ></Tarjeta>


    <Tarjeta
      nombre={"Lucas"}
      edad={22}
    ></Tarjeta>

  </>);
}
