"use client"

import { useSearchParams } from "next/navigation";



export default function Home() {

  const searchParams = useSearchParams()

  return (
    <div>
      <h1>useSearchParams</h1>

      {
        searchParams.get("nombre") ?
        <p> El searchParam con la clave nombre es { searchParams.get("nombre") } </p> :
        <p> No hay un searchParam con la clave nombre </p>
      }
      

    </div>
  );
}