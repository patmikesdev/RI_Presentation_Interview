import Card from "../../components/Card/"
import { Container, Row, Col } from "react-bootstrap"

export default function EditPage() {
    const props2pass = {
        header: "Edit a movie",
        footer: "---"
    }
    return (
        <Container style={{ overflowY: "auto", marginTop: "50px", marginBottom: "50px" }}>
            <Row>
                <Col xs={12}>
                    <Card {...props2pass} className="search-card">
                        <div>
                            <h1 style={{ color: 'white' }}>Page Still under Development</h1>
                            <a href="/" style={{ color: "var(--primaryText" }} className="mt-5 fs-3">Return Home</a>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}