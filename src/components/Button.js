
function Button({className, onClick, type, name, disabled}) {
    return (
        <button
            className={className}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {name}
        </button>
    )
}

export default Button;
