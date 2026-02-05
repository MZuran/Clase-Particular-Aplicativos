"use client"

import { PrimerComponente } from "@/components/primerComponente";
import { SegundoComponente } from "@/components/primerComponente";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()

  function onClickRedirigirSearchParams() {

    const nombre = prompt("Ingrese su nombre")
    const edad = prompt("Ingrese su edad")

    const searchParam = "?nombre=" + nombre + "&edad=" + edad

    router.push("/ejemplos/useSearchParams" + searchParam)
  }

  return (
    <>
      <h1>Página Home</h1>

      <hr />

      <h3>Hooks</h3>

      <button
        onClick={() => { router.push("/ejemplos/useState") }}
      >Ir al ejemplo de useState</button>

      <button
        onClick={() => { router.push("/ejemplos/useEffect") }}
      >Ir al ejemplo de useEffect</button>

      <button
        onClick={() => { router.push("/ejemplos/useRouter") }}
      >Ir al ejemplo de useRouter</button>

      <button
        onClick={onClickRedirigirSearchParams}
      >Ir al ejemplo de useSearchParams</button>

      <hr />

      <h3>Varios</h3>

      <button
        onClick={() => { router.push("/ejemplos/boton") }}
      >Ir al ejemplo de boton</button>

      <button
        onClick={() => { router.push("/ejemplos/conditionalRendering") }}
      >Ir al ejemplo de conditional rendering</button>

      <hr />

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
