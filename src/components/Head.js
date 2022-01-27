import React from 'react';
import {Navbar,Nav, Container } from 'react-bootstrap';

const Head = () => {
  return (
  <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">CRUD App</Navbar.Brand>
    <Nav className="mx-auto">
      <Nav.Link href="/AllData">All Data</Nav.Link>
      <Nav.Link href="/AddData">Add Data</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
     
  </>
  )
};

export default Head;
