import { Card, Col } from "react-bootstrap"
// import Divider from "../Divider/"
import "./cardStyle.css"

const { Header, Body, Footer } = Card

export default function CustomCard({header="header", footer="footer", children=null}) {
    return (
        <Col xs={12}>
            <Card>
                <Header className="fs-2">{header}</Header>
                <Body className="d-flex p-5">{children}</Body>
                <Footer className="fs-2">{footer}</Footer>
            </Card>
        </Col>
    )
}