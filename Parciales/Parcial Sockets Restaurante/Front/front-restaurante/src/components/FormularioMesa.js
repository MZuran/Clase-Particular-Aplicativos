export function FormularioMesa({
    onClickReservarMesa,
    onClickLiberarMesa,
    onChangeInputMesa,
    onSelectCapacidad,
    onChangeInputCliente
}) {

    return (
        <>
            <div className="Reservar Mesa">

                <input
                    type="text"
                    placeholder="Ingrese Nombre del Cliente"
                    onChange={onChangeInputCliente}
                ></input>

                <select onChange={onSelectCapacidad} >
                    <option value={2}>2 Clientes</option>
                    <option value={4}>4 Clientes</option>
                    <option value={6}>6 Clientes</option>
                </select>

                <button onClick={onClickReservarMesa} >Reservar Mesa</button>

            </div>

            <br />

            <div className="Liberar Mesa">
                <input
                    type="number"
                    placeholder="Ingrese # Mesa"
                    defaultValue={0}
                    onChange={onChangeInputMesa}
                ></input>

                <button onClick={onClickLiberarMesa} >Liberar Mesa</button>
            </div>

            <hr/>
        </>
    )
}