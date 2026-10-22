import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

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
                    Main Content Area
                </main>
            </div>
        </>
    );
}

export default MainLayout;