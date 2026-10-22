import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <aside
            style={{
                width: "220px",
                backgroundColor: "#f4f4f4",
                padding: "20px",
            }}
        >
            <ul style={{ listStyle: "none" }}>
                <NavLink
                    to="/dashboard"
                    style={({ isActive }) => ({
                        color: isActive ? "#2563eb" : "#000",
                        fontWeight: isActive ? "bold" : "normal",
                        textDecoration: "none",
                    })}
                >
                    Dashboard
                </NavLink>

                <br />

                <NavLink
                    to="/projects"
                    style={({ isActive }) => ({
                        color: isActive ? "#2563eb" : "#000",
                        fontWeight: isActive ? "bold" : "normal",
                        textDecoration: "none",
                    })}
                >
                    Projects
                </NavLink>

                <br />

                <NavLink
                    to="/tasks"
                    style={({ isActive }) => ({
                        color: isActive ? "#2563eb" : "#000",
                        fontWeight: isActive ? "bold" : "normal",
                        textDecoration: "none",
                    })}
                >
                    Tasks
                </NavLink>

                <br />

                <NavLink
                    to="/settings"
                    style={({ isActive }) => ({
                        color: isActive ? "#2563eb" : "#000",
                        fontWeight: isActive ? "bold" : "normal",
                        textDecoration: "none",
                    })}
                >
                    Settings
                </NavLink>
            </ul>
        </aside>
    );
}

export default Sidebar;