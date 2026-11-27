"use client"

import Boton from "@/components/buttonUseState";
import BotonUseEffect from "@/components/buttonUseEffect";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function Home() {

  const router = useRouter()
  const searchParams = useSearchParams()

  return (
    <div>
      <h1>Home</h1>
      <hr />
      <BotonUseEffect></BotonUseEffect>
      <hr />

      <button
        onClick={() => { router.push("https://es.wikipedia.org/wiki/Wikipedia:Portada") }}
      >Ir a wikipedia</button>

      <hr/>
      <p>
        La clave del searchParam nombre es { searchParams.get("nombre") }
      </p>

    </div>
  );
}
