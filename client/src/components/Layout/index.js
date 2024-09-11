import { Outlet } from "react-router"
import { Container, Row } from "react-bootstrap"
import "./layout.css"
import Navbar from "../Navbar/"

export default function Layout() {
    return (
        <div className="Layout">
            <Navbar></Navbar>
            <main>
                <Container>
                    <Row>
                        <Outlet></Outlet>
                    </Row>
                </Container>
            </main>
        </div>
    )
}