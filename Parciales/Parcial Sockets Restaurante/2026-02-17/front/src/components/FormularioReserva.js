import React from 'react'

export function FormularioReserva(props) {

    // props.onClickReservarMesa        (Callback)  -   Usado
    // props.onClickLiberarMesa         (Callback)  -   Usado
    // props.onChangeInputMesa          (Callback)  -   Usado
    // props.onChangeInputCliente       (Callback)  -   Usado
    // props.onSelectCapacidad          (Callback)  -   Usado

    return (
        <div>
            <h4>Reservar Mesa</h4>

            <input
                type='text'
                placeholder='Ingrese el nombre del cliente'
                onChange={props.onChangeInputCliente}
            ></input>

            <select
                onChange={props.onSelectCapacidad}
            >
                <option value={2} >2 personas</option>
                <option value={4} >4 personas</option>
                <option value={6} >6 personas</option>
            </select>

            <button
                onClick={props.onClickReservarMesa}
            > Reservar Mesa </button>

            <hr />
            <h4>Liberar Mesa</h4>

            <input
                type='number'
                placeholder='Ingrese numero de mesa'
                onChange={ props.onChangeInputMesa }
            ></input>

            <button
                onClick={ props.onClickLiberarMesa }
            >Liberar Mesa</button>

        </div>
    )
}