import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
//import { useMatch, useResolvedPath, Link } from "react-router-dom";
import {Link} from "react-router-dom";
import sun from "/Users/retina15/Desktop/SWEKnowledge/frontend/src/assets/sun.jpeg";

function NavBar() {
return(
  <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
            <Link className='nav-link active' to="/home">
              <img
                alt="SWE Knowledge"
                src={sun}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              SWE Knowledge
             </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Link className='nav-link active' to="/home">Home</Link>
                <Link className='nav-link active' to="/leetcode">Leet Code</Link>
                <NavDropdown className='dsa' title="DSA" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    <Link className='nav-link' to="/datastructures">Data Structures</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    <Link className='nav-link' to="/algorithms">Algorithms</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    <Link className='nav-link' to="/patterns">Common Patterns</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    <Link className='nav-link' to="/bigo">Big-O</Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      );
}
export default NavBar;

/*function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}*/

//<CustomLink to="/home">Home</CustomLink>