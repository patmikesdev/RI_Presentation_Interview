import Card from "../../components/Card/"
import MovieForm from '../../components/MovieForm/'
import { Container, Row, Col } from "react-bootstrap"
import { useParams } from "react-router"
import { useEffect, useState, useMemo } from 'react'

export default function EditPage() {
    const { id } = useParams();

    const [movie, setMovie] = useState(null)

    useEffect(() => {
        fetch(`/api/edit/${id}`)
            .then(r => r.json())
            .then(r => setMovie(r.data))
    }, [id])

    const EditCardProps = useMemo(() => {
        return {
            header: "Edit This Movie",
            footer: <span>-- ❖ --</span>,
            classes: 'mb-5 movieForm'
        }
    }, [])

    return (
        <Container style={{ overflowY: "auto", marginTop: "50px", marginBottom: "50px" }}>
            <Row>
                <Col xs={12}>
                    {
                        movie
                            ? <Card {...EditCardProps}>
                                <MovieForm id="searchForm" route="/api/search" initialValues={movie}></MovieForm>
                            </Card>
                            : <Card header={"No Movie selected!"} footer='??' className="search-card">
                                <div>
                                    <h1 style={{ color: 'white' }}>Page Still under Development</h1>
                                    <a href="/" style={{ color: "var(--primaryText" }} className="mt-5 fs-3">Return Home</a>
                                </div>
                            </Card>
                    }
                </Col>
            </Row>
        </Container>
    )
}