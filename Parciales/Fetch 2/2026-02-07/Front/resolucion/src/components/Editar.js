import { Input } from "./Input"
import { Button } from "./Button"
import { useState } from "react"

export function Editar(props) {

    // Este componente debe modificar un producto mediante un PUT a /modificarProducto  
    // El body del put debe tener la siguiente pinta: { nombre: "?", stock: "?" }
    // El nombre y el stock que irán dentro del body deben ser obtenidos desde los inputs
    // Al hacer click al botón, se realiza el pedido PUT con el body creado

    const [nombreProducto, setNombreProducto] = useState("")
    const [stockProducto, setStockProducto] = useState(0)

    function onClickActualizar() {

        const body = { nombre: nombreProducto, stock: stockProducto };

        fetch('http://localhost:4000/modificarProducto', {
            method: 'PUT', //  Cambiar por PUT, o DELETE si es necesario
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .then(response => {

                console.log(response)
                // Acá adentro hacemos lo que querramos con lo que nos llega del POST
                // Se puede por ejemplo usar el setter de una variable de estado

            });

    }

    return (
        <div>
            <Input type={"text"} placeholder={"Nombre del producto"} onChange={(e) => { setNombreProducto(e.target.value) }} />
            <Input type={"number"} placeholder={"Stock del producto"} onChange={(e) => { setStockProducto(e.target.value) }} />
            <Button text={"Actualizar Stock"} onClick={onClickActualizar} />
        </div>
    )
}