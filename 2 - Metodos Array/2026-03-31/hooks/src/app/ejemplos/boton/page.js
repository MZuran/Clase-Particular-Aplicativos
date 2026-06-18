"use client"

export default function Home() {

  function alertarUsuario() {
    alert("Hiciste click")
  }

  return (
    <div>
      <h1>Ejemplo botón</h1>

      <button onClick={alertarUsuario} >Callback Referencia</button>
      
      <button
        onClick={() => { alert("Hiciste click a la flecha") }}
      >Callback Función Flecha</button>

    </div>
  );
}
