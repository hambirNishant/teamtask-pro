import { Link } from "react-router-dom";

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
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>

                <br />

                <li>
                    <Link to="/projects">Projects</Link>
                </li>

                <br />

                <li>
                    <Link to="/tasks">Tasks</Link>
                </li>

                <br />

                <li>
                    <Link to="/settings">Settings</Link>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;