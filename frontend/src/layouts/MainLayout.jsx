import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
function MainLayout() {
    return (
        <>
            <Navbar />

            <div
                style={{
                    display: "flex",
                    minHeight: "calc(100vh - 60px)",
                }}
            >
                <Sidebar />

                <main
                    style={{
                        flex: 1,
                        padding: "20px",
                    }}
                >
                    <Outlet />
                </main>
            </div>
        </>
    );
}

export default MainLayout;