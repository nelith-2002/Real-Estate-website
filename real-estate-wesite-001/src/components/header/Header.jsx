import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { FaSignInAlt } from 'react-icons/fa'; // For Sign In icon
import { BiHomeAlt, BiListUl } from 'react-icons/bi'; // For icons (e.g., Home, My List)
import './Header.css'; // For styling

function Header() {
  return (
    <Navbar expand="lg" className="bg-light shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <BiHomeAlt size={30} className="me-2" style={{ color: 'green' }} />
          <span style={{ fontWeight: 'bold', fontSize: '1.5rem', color: 'green' }}>RentUP</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto ms-3">
            <Nav.Link href="#home" className="fw-bold">Home</Nav.Link>
            <Nav.Link href="#about" className="fw-bold">About Us</Nav.Link>
            <Nav.Link href="#properties" className="fw-bold">Property Details</Nav.Link>
            <Nav.Link href="#packages" className="fw-bold">Packages</Nav.Link>
            <Nav.Link href="#contact" className="fw-bold">Contact</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <div className="me-3 d-flex align-items-center">
              <BiListUl size={24} style={{ color: 'green' }} />
              <span className="ms-2 fw-bold">My List</span>
            </div>
            <Button variant="success" className="d-flex align-items-center">
              <FaSignInAlt className="me-2" />
              Sign In
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
