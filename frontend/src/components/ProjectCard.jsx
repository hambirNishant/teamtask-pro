import Button from "./Button";

function ProjectCard({ project, onDelete }) {
    return (
        <div
            style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "16px",
                marginBottom: "12px",
                backgroundColor: "#fff",
            }}
        >
            <h3>{project.name}</h3>

            <p>
                Status: {project.status}
            </p>

            <Button
                text="Delete"
                variant="danger"
                onClick={() => onDelete(project.id)}
            />
        </div>
    );
}

export default ProjectCard;