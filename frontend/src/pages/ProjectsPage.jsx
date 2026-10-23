import { useState } from "react";

import Input from "../components/Input";
import Button from "../components/Button";

function ProjectsPage() {
    const [projectName, setProjectName] = useState("");

    const [projects, setProjects] = useState([]);

    const createProject = () => {
        if (!projectName.trim()) return;

        const newProject = {
            id: Date.now(),
            name: projectName,
        };

        setProjects([...projects, newProject]);

        setProjectName("");
    };

    return (
        <div>
            <h1>Projects</h1>

            <br />

            <Input
                label="Project Name"
                placeholder="Enter project name"
                value={projectName}
                onChange={(e) =>
                    setProjectName(e.target.value)
                }
            />

            <Button
                text="Create Project"
                onClick={createProject}
            />

            <hr />

            <h2>Project List</h2>

            {projects.map((project) => (
                <div
                    key={project.id}
                    style={{
                        padding: "10px",
                        border: "1px solid #ddd",
                        marginBottom: "10px",
                    }}
                >
                    {project.name}
                </div>
            ))}
        </div>
    );
}

export default ProjectsPage;