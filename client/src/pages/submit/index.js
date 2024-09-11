import Card from "../../components/Card/"

export default function SubmitPage() {
    const props2pass = {
        header: "Submit a new movie",
        footer: "---"
    }
    return (
        <Card {...props2pass} className="submit-card">
            <div>
                <h1 style={{color: 'white'}}>Page Still under Development</h1>
                <a href="/" style={{color: "var(--primaryText"}} className="mt-5 fs-3">Return Home</a>
            </div>
        </Card>
    )
}