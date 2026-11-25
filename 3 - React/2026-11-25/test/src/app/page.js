
import PrimerComponente from "@/components/primerComponente"
import Dni from "@/components/dni"

export default function Home() {
  return (
    <div>
      <h1>Página Home</h1>
      <PrimerComponente></PrimerComponente>
      <hr />

      <Dni
        nombre={"Matías"}
        apellido={"Zuran"}
        fechaNacimiento={"17/06/2003"}
      ></Dni>

      <Dni
        nombre={"Alex"}
        apellido={"Ogan"}
        fechaNacimiento={"15/05/2003"}
      ></Dni>

    </div>
  )
}