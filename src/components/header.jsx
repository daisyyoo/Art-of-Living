import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect className="color-nav" expand="md" sticky="top" >
        <Container fluid >
          <Navbar.Brand href="#" className="px-2 px-md-4">
            <img
              alt="hope-care-hospice-logo"
              src="/images/Hospice-logo-4.png"
              width="120"
              height="40"
              className="justify-content-start"
              />
          </Navbar.Brand>
          <div className="d-flex align-items-center">
            <a href="tel:+1-714-724-8033">
              <i className="fa-solid fa-phone phone-alone" />
            </a>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand"/>
          </div>
          <Navbar.Offcanvas id="offcanvasNavbar-expand" aria-labelledby="offcanvasNavbar-expand" placement="end">
            <Offcanvas.Header className="px-3 m-3 align-self-end" closeButton />
            <Offcanvas.Body className="px-4 p-0">
              <Nav className="justify-content-end flex-grow-1 pe-3" onSelect={(_, event) => { window.location.href = event.target.href; }} >
                <Nav.Link className="px-3 mx-1 menu-link" href="#">HOME</Nav.Link>
                <Nav.Link className="px-3 mx-1 menu-link" href="#newInquiry">REFERRALS</Nav.Link>
                <Nav.Link className="px-3 mx-1 menu-link" href="#aboutUs">ABOUT US</Nav.Link>
                <Button className="call-button-all" href="tel:+1-714-724-8033">
                  <i className="fa-solid fa-phone phone-logo-in-button" />714.724.8033</Button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    );
  }
}