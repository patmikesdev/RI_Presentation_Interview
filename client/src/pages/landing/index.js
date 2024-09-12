import { Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import {useMemo} from 'react'
import Card from "../../components/Card/"
// import useMemoDemonstration from "./memoDemonstrationHook"
import "./landing.css"

export default function Landing() {

    //Chose to employ the useNavigate hook because it was simplest way to implement navigate functionality with desired styling
    // For instance, wrapping the <Button>'s in <a> tags or <LinkContainers> tended to mess up their styling as flex items
    // see landing.css
    const navigate = useNavigate();

    //often times, if I have a lot of props I'm trying to pass to a component, it can be neater to 
    //specify them in their own object and spreading that rather than hardcoding them inline in the jsx. 
    //see {...memoized_props}
    //memoizing these props saves me from having them redeclared on every single render of this component
    const memoized_props = useMemo(() => {
        return {
            header: "Welcome!",
            footer: "Let's a go!",
            classes: "landing-card"
        }
    }, [])

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

    //Code for demonstrating useMemo hook. Deferred for this Lesson
    //custom hook created to demonstrate why useMemo is useful. 
    //const memoized_props = useMemoDemonstration(); 

    //memoized_props is an object with properties like 
    // {
    //     header: "Welcome!",
    //     footer: "Let's a go!",
    //     classes: "landing-card"
    // }