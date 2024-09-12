import { Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import Card from "../../components/Card/"
import useMemoDemonstration from "./memoDemonstrationHook"
import "./landing.css"

export default function Landing() {

    //Chose to employ the useNavigate hook because it was simplest way to implement navigate functionality with desired styling
    // For instance, wrapping the <Button>'s in <a> tags or <LinkContainers> tended to mess up their styling as flex items
    // see landing.css
    const navigate = useNavigate();

    //custom hook created to demonstrate why useMemo is useful. 
    const memoized_props = useMemoDemonstration(); 

    //memoized_props is an object with properties like 
    // {
    //     header: "Welcome!",
    //     footer: "Let's a go!",
    //     classes: "landing-card"
    // }

    return (
        <Card {...memoized_props} >
            <div className="d-flex justify-content-around landing-body">
                <Button className="fs-4" variant="outline-primary" onClick={() => navigate('/search')}>Search for a Movie</Button>
                <Button className="fs-4 mx-5" variant="outline-primary" onClick={() => navigate('/submit')}>Submit a New Movie</Button>
                <Button className="fs-4" variant="outline-primary" onClick={() => navigate('/edit')}>Edit a Movie</Button>
            </div>
        </Card>
    )
}