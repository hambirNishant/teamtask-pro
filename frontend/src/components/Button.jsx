function Button({
    text,
    variant = "primary",
    disabled = false,
    onClick,
}) {
    const styles = {
        primary: {
            backgroundColor: "#2563eb",
            color: "white",
        },

        secondary: {
            backgroundColor: "#6b7280",
            color: "white",
        },

        danger: {
            backgroundColor: "#dc2626",
            color: "white",
        },
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            style={{
                padding: "10px 20px",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                ...styles[variant],
            }}
        >
            {text}
        </button>
    );
}

export default Button;