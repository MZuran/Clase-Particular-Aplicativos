export function FormularioReserva({
    onClickReservarMesa,
    onClickLiberarMesa,
    onChangeInputMesa,
    onSelectCapacidad,
    onChangeInputCliente
}) {

    return (
        <>

            <h4>Reservar Mesa</h4>

            <input
                type="text"
                placeholder="Ingrese su nombre"
                onChange={ onChangeInputCliente }
            ></input>

            <select
                onChange={ onSelectCapacidad }
            >
                <option value={2} >2 Personas</option>
                <option value={4} >4 Personas</option>
                <option value={6} >6 Personas</option>
            </select>

            <button
                onClick={ onClickReservarMesa }
            >Reservar Mesa</button>

            <h4>Liberar Mesa</h4>

            <input
                placeholder="Ingrese el número de mesa"
                type="number"
                onChange={ onChangeInputMesa }
            ></input>

            <button onClick={ onClickLiberarMesa } >Liberar Mesa</button>

        </>
    )
}