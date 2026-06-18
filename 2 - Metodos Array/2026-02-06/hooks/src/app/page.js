"use client"

import Tarjeta from "@/components/Tarjeta";
import { useRouter } from "next/navigation";


export default function Home() {

  const router = useRouter()

  function onClickSearchParams() {
    const nombre = prompt("Escriba su nombre")
    const edad = prompt("Escriba su edad")

    const string1 = "ejemplos/useSearchParams?nombre=" + nombre + "&edad=" + edad
    const string2 = `ejemplos/useSearchParams?nombre=${nombre}&edad=${edad}`

    router.push(string1)
  }

  return (
    <>
      <h1>Home</h1>
      <hr />
      <h3>Hooks</h3>

      <button
        onClick={() => { router.push("ejemplos/useState") }}
      >Ir a useState</button>

      <button
        onClick={() => { router.push("ejemplos/useEffect") }}
      >Ir a useEffect</button>

      <button
        onClick={() => { router.push("ejemplos/useRouter") }}
      >Ir a useRouter</button>

      <button
        onClick={onClickSearchParams}
      >Ir a useSearchParams</button>

      <hr />
      <Tarjeta nombre={"Alex"} apellido={"Ogan"} ></Tarjeta>
    </>
  );
}
