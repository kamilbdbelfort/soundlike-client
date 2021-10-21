import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import { useState } from "react";

export default function NavBar() {
  const [text, setText] = useState("");
  return (
    <div style={{ margin: "0 1em" }}>
      <Navbar bg="light" expand="lg" style={{ padding: "1.5em" }}>
        <Container style={{ display: "flex" }}>
          <Navbar.Brand href="/"> 🎙️ SOUNDLIKE 🎙️</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Form style={{ margin: "0 1em" }}>
                <Form.Group className="mb-3" controlId="formBasicSearch">
                  <Form.Control
                    type="text"
                    style={{ width: "90%", margin: "0 2em" }}
                    placeholder="Search for sounds, ex: friends, star wars..."
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                  />
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>
              </Form>
              <Button variant="success">Search</Button>
              <NavDropdown
                title="Categories"
                id="basic-nav-dropdown"
                style={{ justifyContent: "flex-end" }}
              >
                <NavDropdown.Item href="/">Action</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
