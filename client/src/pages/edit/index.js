import Card from "../../components/Card/"

export default function EditPage() {
    const props2pass = {
        header: "Edit a movie",
        footer: "---"
    }
    return (
        <Card {...props2pass} className="edit-card">
            <div>
                <h1 style={{color: 'white'}}>Page Still under Development</h1>
                <a href="/" style={{color: "var(--primaryText"}} className="mt-5 fs-3">Return Home</a>
            </div>
        </Card>
    )
}