import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './header.css';
export default function AppHeader() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary header">
      <Container>
                <Navbar.Brand href="#home">
                    <img src={require('../../assets/logo.svg').default} alt="Fashion" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-dark navbar-dark"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navigation">
            <Nav.Link href="#home" className="nav-item">Catalogue</Nav.Link>
            <Nav.Link href="#link" className="nav-item">Fashion</Nav.Link>
            <Nav.Link href="#link" className="nav-item">Favourite</Nav.Link>
            <Nav.Link href="#link" className="nav-item">Lifestyle</Nav.Link>
            <Button variant='outline-dark' className="nav-button">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}