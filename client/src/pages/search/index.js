import Card from "../../components/Card/"
import { useEffect, useMemo, useState } from 'react'
import { Container, Row, Col } from "react-bootstrap"
import MovieBlock from '../../components/MovieBlock/'

export default function SearchPage() {

    const [movies, setMovies] = useState(null)

    useEffect(() => {
        fetch('/api/search')
            .then(r => r.json())
            .then(r => setMovies(r.data))
    }, [])

    const props2pass = useMemo(() => {
        return {
            header: "Search for a Movie",
            footer: "---",
        }
    }, [])

    return (
        <Container style={{ overflowY: "auto", marginTop: "50px", marginBottom: "50px" }}>
            <Row>
                <Col xs={12}>
                    <Card {...props2pass} className="search-card">
                        <div>
                            {movies && Array.isArray(movies)
                                ? movies.map((el, i) => <MovieBlock key={i} {...el}></MovieBlock>)
                                : 0}
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
