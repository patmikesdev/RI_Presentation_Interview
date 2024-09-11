import { Card } from "react-bootstrap"
// import Divider from "../Divider/"
import "./cardStyle.css"

const { Header, Body, Footer } = Card

export default function CustomCard({header="header", footer="footer", style=null, children=null}) {
    return (

            <Card style={{...style}}>
                <Header className="fs-2" style={{position: 'sticky', top: 0, zIndex:5}}>{header}</Header>
                <Body className="d-flex p-5" style={{zIndex: 0}}>{children}</Body>
                <Footer className="fs-2" style={{zIndex: 0}}>{footer}</Footer>
            </Card>

    )
}