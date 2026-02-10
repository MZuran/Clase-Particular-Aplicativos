"use client"

import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()

  function onClickSearchParams() {

    const nombre = prompt("Ingrese un nombre")
    const edad = prompt("Ingrese una edad")

    const url1 = "/ejemplos/useSearchParams?nombre=" + nombre + "&edad=" + edad
    const url2 = `/ejemplos/useSearchParams?nombre=${nombre}&edad=${edad}`

    router.push(url1)
  }

  return (
    <div>
      <h1>Home</h1>
      <hr />

      <h2>Hooks</h2>
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
        onClick={ onClickSearchParams }
      >Ir al ejemplo de useSearchParams</button>

      <hr/>
      <h3>Otros</h3>

      <button
        onClick={() => { router.push("/ejemplos/conditionalRendering") }}
      >Ir al ejemplo de conditionalRendering</button>
    </div>
  );
}
