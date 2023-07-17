
function Input({type, name, onChange, minLength}) {

    return (
        <input
            type={type}
            name={name}
            onChange={onChange}
            minLength={minLength}
        />
    )
}

export default Input;