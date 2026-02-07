export function Input(props) {

    // props.onChange
    // props.placeholder
    // props.type

    // (Opcional) Agregar un prop para props.type

    return (
        <input
            onChange={props.onChange}
            placeholder={props.placeholder}
            type={props.type}
        ></input>
    )
}