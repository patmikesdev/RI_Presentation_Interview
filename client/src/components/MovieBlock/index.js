import { Link } from 'react-router-dom'
import { Card } from "react-bootstrap"
import "./styles.css"

const { Header, Body, Footer } = Card

export default function MovieBlock({ title, year, description, id }) {
    return (
        <Card className="movieBlock mb-5">
            <Header>
                <Link to="/">
                    <h3>{title}</h3>
                </Link>
            </Header>
            <Body className="p-5 fs-3">
                <p>{description}</p>
                <p className="text-end fst-italic">-{year}</p>
            </Body>
            <Footer className="fs-2">something</Footer>
        </Card>
    )
}