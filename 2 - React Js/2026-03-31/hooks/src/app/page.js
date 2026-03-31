"use client"

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function Home() {

  const router = useRouter()

  const searchParams = useSearchParams()

  return (
    <div>

      <h1>Home</h1>

      <p>
        Se espera que este url tenga escrito el search param <code>nombre=valor</code> <br/>
        El valor del nombre es: { searchParams.get("nombre") }
      </p>

    </div>
  );
}
