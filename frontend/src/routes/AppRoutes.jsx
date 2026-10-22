import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import DashboardPage from "../pages/DashboardPage";
import ProjectsPage from "../pages/ProjectsPage";
import TasksPage from "../pages/TasksPage";
import SettingsPage from "../pages/SettingsPage";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<DashboardPage />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/tasks" element={<TasksPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;