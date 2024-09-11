import { Navbar, Nav,} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useLocation } from 'react-router-dom';
import { useMemo } from 'react'; 
import './navbar.css'

export default function AppNav() {
    const location = useLocation();
    const page = useMemo(() => {
        //in order to handle nested routes, like /blog/Welcome, only want first path segment
        return '/' + location.pathname.split('/')[1]
    }, [location])

    //in each LinkContainer, couldn't just apply active as part of className, wasn't getting handled properly by React-router, made into a react prop 'active' instead
    return (
        <Navbar variant="dark" className={`ps-3 d-flex justify-content-between `} style={{ height: '9vh', position:'fixed', top: 0, width: '100vw' }}>
            <Nav  className="d-flex">
                <LinkContainer to="/" className={`align-self-center`} disabled={page === '/'} active={page === '/'}>
                    <Nav.Link id="homeLink" style={{ textDecoration: 'none' }}>
                        <h1 className="m-0" style={{fontSize: "40px"}}>🎬</h1>
                    </Nav.Link>
                </LinkContainer>
            </Nav>
            <Nav className="ms-auto me-2 d-flex wideNav align-self-center rocky" style={{borderBottom: '1px solid var(--medium)'}}>
                <LinkContainer to="/search" className={`${page === '/search' ? 'disabled': ''}`} active={page === '/search'}>
                    <Nav.Link className="px-3 pt-2 pb-1 textPrimary">
                        <i className="fa fa-magnifying-glass-arrow-right align-self-center me-2" style={{ width: '1.5rem' }} /><span>Search</span>
                    </Nav.Link>
                </LinkContainer>
                <div className="align-self-end mx-3" style={{backgroundColor:'var(--medium)', width: '1px', height: '12px'}}></div>
                <LinkContainer to="Submit" className={`${page === 'Submit' ? 'disabled' : ''}`} active={page === 'Submit'}>
                    <Nav.Link className="px-3 pt-2 pb-1 textPrimary">
                        <i className="fa fa-upload me-2 align-self-center" style={{ width: '1.5rem' }} /><span>Submit</span>
                    </Nav.Link>
                </LinkContainer>
                <div className="align-self-end mx-3" style={{backgroundColor:'var(--medium)', width: '1px', height: '12px'}}></div>
                <LinkContainer to="/edit" className={`${page === '/edit' ? 'disabled' : ''}`} active={page === '/edit'}>
                    <Nav.Link className="px-3 pt-2 pb-1 textPrimary me-3">
                        <i className="fa fa-tools me-2 align-self-center" style={{ width: '1.5rem' }} /><span>Edit</span>
                    </Nav.Link>
                </LinkContainer>
            </Nav>
        </Navbar>
    )
}