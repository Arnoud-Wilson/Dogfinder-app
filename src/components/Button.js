
function Button({className, onClick, type, name}) {
    return (
        <button
            className={className}
            onClick={onClick}
            type={type}
        >
            {name}
        </button>
    )
}

export default Button;
