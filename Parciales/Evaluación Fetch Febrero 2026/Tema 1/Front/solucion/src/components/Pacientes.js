// {nombre: 'Martín Rivas', obraSocial: 'Galeno', nombreDoctor: 'Dr. Juan Pérez'}

export function Pacientes( { listaPacientes } ) {

    return (
        <>
        <select>
            {
                listaPacientes.map(
                    (elementoLista) => {
                        return <option>{elementoLista.nombre} - {elementoLista.obraSocial}</option>
                    }
                )
            }
        </select>
        </>
    )
}