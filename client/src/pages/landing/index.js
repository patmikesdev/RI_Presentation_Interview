import Card from "../../components/Card/"
import { Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import "./landing.css"

export default function Landing() {

    const navigate = useNavigate();
    //Chose to employ the useNavigate hook because it was simplest way to implement navigate functionality with desired styling
    // For instance, wrapping the <Button>'s in <a> tags or <LinkContainers> tended to mess up their styling as flex items
    // see landing.css

    const props2pass = {
        header: "Welcome!",
        footer: "Let's a go!"
    }
    return (
        <Card {...props2pass} className="landing-card">
            <div className="d-flex justify-content-around landing-body">
                <Button className="fs-4" variant="outline-primary" onClick={() => navigate('/search')}>Search for a Movie</Button>
                <Button className="fs-4 mx-5" variant="outline-primary" onClick={() => navigate('/submit')}>Submit a New Movie</Button>
                <Button className="fs-4" variant="outline-primary" onClick={() => navigate('/edit')}>Edit a Movie</Button>
            </div>
        </Card>
    )
}