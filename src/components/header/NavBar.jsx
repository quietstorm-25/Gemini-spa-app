// NavBar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavDropdown,
  Offcanvas,
  Container,
} from 'react-bootstrap';
import Logo from '../../assets/favicon.ico'; // Adjust the path as necessary
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="top-banner">
        <div className="top-banner-text">
          10% Discount For Registered Users & Free Shipping For Orders Over $70 Plus Free Returns
        </div>
      </div>

      <Navbar expand="lg" className="navbar" sticky="top">
        <Container fluid>
          <Navbar.Brand onClick={() => navigate('/')}>
            <img src={Logo} alt="logo" height="40" style={{ marginRight: '8px' }} />
            Gemini Spa
          </Navbar.Brand>


          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
            className="offcanvas-menu"
          >
            <Offcanvas.Header closeButton>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 main-nav">
                <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
                <Nav.Link onClick={() => navigate("/about")}>About</Nav.Link>

                <NavDropdown title="Shop" id="shop-dropdown" className="nav-dropdown dropdown-hover">
                  <NavDropdown.Item>Shop All Skincare</NavDropdown.Item>
                  <NavDropdown.Item>Best Sellers</NavDropdown.Item>
                  <NavDropdown.Item>Mini Bliss</NavDropdown.Item>
                  <NavDropdown.Item>Cleansers</NavDropdown.Item>
                  <NavDropdown.Item>Moisturizers + SPF</NavDropdown.Item>
                  <NavDropdown.Item>Serums</NavDropdown.Item>
                  <NavDropdown.Item>Eye & Lip</NavDropdown.Item>
                  <NavDropdown.Item>Exfoliators & Treatments</NavDropdown.Item>
                  <NavDropdown.Item>Toners</NavDropdown.Item>
                  <NavDropdown.Item>Face Masks</NavDropdown.Item>
                  <NavDropdown.Item>Accessories</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link onClick={() => navigate("/blog")}>Blog</Nav.Link>

                <NavDropdown title="Others" id="others-dropdown" className="nav-dropdown dropdown-hover">
                  <NavDropdown.Item onClick={() => navigate("/faq")}>FAQ</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate("/wishlist")}>Wishlist</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate("/contact")}>Contact</NavDropdown.Item>
                </NavDropdown>
              </Nav>

              <Nav.Link className='deskuser' onClick={() => navigate("/account")} aria-label="Profile">
              <FontAwesomeIcon icon={faUser}/> <span >Log In</span> 
              </Nav.Link>
            </Offcanvas.Body>

          </Navbar.Offcanvas>
          <Nav className="ms-auto d-flex gap-4 nav-icons">
            <div className="toggler-center">
              <Navbar.Toggle aria-controls="offcanvasNavbar" />
            </div>
            <Nav.Link onClick={() => navigate("/search")} aria-label="Search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Nav.Link>
            <Nav.Link className='mobuser' onClick={() => navigate("/account")} aria-label="Profile">
              <FontAwesomeIcon icon={faUser} />
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/cart")} aria-label="Cart">
              <FontAwesomeIcon icon={faBagShopping} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
