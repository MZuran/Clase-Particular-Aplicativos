import React from 'react'
import FechaFundacion from './FechaFundacion'
import { useState } from 'react'

function Checkbox({ textoFecha }) {

    const [isChecked, setIsChecked] = useState(false)

    return (
        <div>
            <label>Mostrar País</label>

            <input
                type='checkbox'
                onChange={ (e) => { setIsChecked(e.target.checked) } }
            ></input>

            { isChecked && <FechaFundacion textoFecha={textoFecha} /> }
        </div>
    )
}

export default Checkbox
