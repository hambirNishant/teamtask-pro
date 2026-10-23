import Button from "../components/Button";

function DashboardPage() {
    const handleClick = () => {
        alert("Button Clicked");
    };

    return (
        <>
            <h1>Dashboard Page</h1>

            <br />

            <Button
                text="Primary Button"
                onClick={handleClick}
            />

            <br />
            <br />

            <Button
                text="Secondary Button"
                onClick={handleClick}
                variant="secondary"
            />

            <br />
            <br />

            <Button
                text="Delete"
                onClick={handleClick}
                variant="danger"
            />
        </>
    );
}

export default DashboardPage;