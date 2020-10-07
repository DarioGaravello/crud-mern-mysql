import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, ButtonGroup } from "react-bootstrap";

export default function NaviBar() {
  const [user, setUser] = useState();
  const fetching = async() => {
    const res = await fetch('/profile/access');
    const data = await res.json();
    setUser(data);
  };

  useEffect(() => {
    fetching();
  },[])

  return (
    <Navbar bg="dark" expand="lg">
      <Container>
      <Navbar.Brand href="/" className="nav-link text-white">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {user ?
          <Nav className="ml-auto">
            <Nav.Link href="/profile" className="nav-link text-white">{user.fullname}</Nav.Link>
            <Nav.Link href="/todolist" className="nav-link text-white">Todos</Nav.Link>
            <Nav.Link href="/create" className="nav-link text-white">Create Todo</Nav.Link>
            <Nav.Link href="/logout" className="nav-link text-white">Logout</Nav.Link>
          </Nav> :
          <Nav className="ml-auto">
            <ButtonGroup>
              <Nav.Link href="/signin" className="nav-link text-white m-2">Sign In</Nav.Link>
              <Nav.Link href="/signup" className="nav-link text-white btn btn-success p-3">SignUp</Nav.Link>
            </ButtonGroup>
          </Nav>
        }
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
