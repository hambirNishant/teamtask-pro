function Sidebar() {
    return (
        <aside
            style={{
                width: "220px",
                backgroundColor: "#f4f4f4",
                padding: "20px",
            }}
        >
            <ul>
                <li>Dashboard</li>
                <li>Projects</li>
                <li>Tasks</li>
                <li>Settings</li>
            </ul>
        </aside>
    );
}

export default Sidebar;