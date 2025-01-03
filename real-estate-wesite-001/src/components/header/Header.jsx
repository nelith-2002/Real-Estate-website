import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { FaSignInAlt } from 'react-icons/fa'; // For Sign In icon
import { BiHomeAlt, BiListUl } from 'react-icons/bi'; // For icons (e.g., Home, My List)
import { NavLink } from 'react-router-dom'; // For React Router links
import './Header.css'; // For styling

function Header() {
  return (
    <Navbar expand="lg" className="bg-light shadow-sm">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <BiHomeAlt size={30} className="me-2" style={{ color: 'green' }} />
          <div>
            <h3 className="fw-bold text-success">KeyNest</h3>
            <h5 className="fw-bold text-muted" style={{ fontSize: '0.8rem' }}>
              Unlock Your Perfect Nest
            </h5>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto ms-3">
            {/* Replace href with React Router's NavLink */}
            <NavLink to="/" className="nav-link fw-bold">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link fw-bold">
              About Us
            </NavLink>
            <NavLink to="/properties" className="nav-link fw-bold">
              Property Details
            </NavLink>
            <NavLink to="/packages" className="nav-link fw-bold">
              Packages
            </NavLink>
            <NavLink to="/contact" className="nav-link fw-bold">
              Contact
            </NavLink>
          </Nav>
          <div className="d-flex align-items-center">
            <div className="me-3 d-flex align-items-center">
              <BiListUl size={24} style={{ color: 'green' }} />
              <NavLink to="/favourites" className="ms-2 fw-bold text-decoration-none text-success">
                My List
              </NavLink>
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
 