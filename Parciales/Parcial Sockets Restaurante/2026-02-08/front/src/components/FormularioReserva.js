export function FormularioReserva(props) {

    /*
        props.onClickReservarMesa       -   usado
        props.onClickLiberarMesa        -   usado
        props.onChangeInputMesa         -   USADO
        props.onSelectCapacidad         -   USADO
        props.onChangeInputCliente      -   USADO
    */

    return (
        <>
            <div>
                <h4>Reservar Mesa</h4>

                <input
                    type="text"
                    placeholder="Ingrese Nombre"
                    onChange={ props.onChangeInputCliente }
                ></input>

                <select
                    onChange={ props.onSelectCapacidad }
                >
                    <option value={2} >2 Personas</option>
                    <option value={4} >4 Personas</option>
                    <option value={6} >6 Personas</option>
                </select>

                <button onClick={ props.onClickReservarMesa } >Reservar Mesa</button>

            </div>

            <div>
                <h4>Liberar Mesa</h4>

                <input
                    type="number"
                    placeholder="Ingrese numero de mesa"
                    onChange={props.onChangeInputMesa}
                    defaultValue={0}
                ></input>

                <button onClick={props.onClickLiberarMesa} >Liberar Mesa</button>
            </div>
        </>
    )
}