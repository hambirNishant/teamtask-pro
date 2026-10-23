function Input({
    label,
    type = "text",
    placeholder,
    value,
    onChange,
    disabled = false,
}) {
    return (
        <div
            style={{
                marginBottom: "16px",
            }}
        >
            <label
                style={{
                    display: "block",
                    marginBottom: "6px",
                    fontWeight: "bold",
                }}
            >
                {label}
            </label>

            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                style={{
                    padding: "10px",
                    width: "300px",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                }}
            />
        </div>
    );
}

export default Input;