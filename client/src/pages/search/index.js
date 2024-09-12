import Card from "../../components/Card/"
import { useEffect, useMemo, useState } from 'react'
import { Container, Row, Col, Button} from "react-bootstrap"
import MovieBlock from '../../components/MovieBlock/'
import MovieForm from '../../components/MovieForm/'

export default function SearchPage() {

    const [movies, setMovies] = useState(null)
    const [searchResult, setSearchResult] = useState(null);
    const backButton = useMemo(() => {
        return (
            <div className="d-flex justify-content-center my-2">
            <Button className="fs-4" variant="outline-primary" onClick={()=>setSearchResult(null)}>New Search</Button>
        </div>
        )
    }, [])

    useEffect(() => {
        fetch('/api/search')
            .then(r => r.json())
            .then(r => setMovies(r.data))
    }, [])

    const props2pass = useMemo(() => {
        return {
            header: "Search for a Movie",
            footer: "---",
            classes: "search-card"
        }
    }, [])

    const searchFormCardProps = useMemo(() => {
        return {
            header: "Search Terms",
            footer: <span>Scroll Down to View All</span>,
            classes: 'mb-5 movieForm'
        }
    }, [])

    return (
        <Container style={{ overflowY: "auto", marginTop: "50px", marginBottom: "50px" }}>
            <Row>
                <Col xs={12}>
                    <Card {...props2pass}>
                        <div>
                            {
                                searchResult
                                    ? <>
                                        <MovieBlock {...searchResult} footer={backButton}></MovieBlock>
                                    </>
                                    : <Card {...searchFormCardProps}>
                                        <MovieForm id="searchForm" route="/api/search" setSearchResult={setSearchResult}></MovieForm>
                                    </Card>
                            }
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
