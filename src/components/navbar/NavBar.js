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
import { useSelector } from "react-redux";
import { selectAllCategories } from "../../store/sound/selectors";
import { useDispatch } from "react-redux";
import { fetchSearchedSounds } from "../../store/sound/actions";

export default function NavBar() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const allcategories = useSelector(selectAllCategories);

  function search(e) {
    e.preventDefault();
    dispatch(fetchSearchedSounds(text));
  }

  return (
    <div style={{ margin: "0 1em" }}>
      <Navbar bg="light" expand="lg" style={{ padding: "1.5em" }}>
        <Container>
          <Navbar.Brand href="/"> 🎙️ SOUNDLIKE 🎙️</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Form style={{ margin: "0 1em" }}>
                <Form.Group className="mb-3" controlId="formBasicSearch">
                  <Form.Control
                    type="text"
                    style={{ width: "700px", margin: "0 2em" }}
                    placeholder="Search for sounds, ex: friends, star wars..."
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                  />
                </Form.Group>
              </Form>
              <Button variant="success" onClick={search}>
                Search
              </Button>
              <NavDropdown
                title={category ? category : "Categories"}
                id="basic-nav-dropdown"
                // onChange={change_category}
                value={category}
              >
                {allcategories?.map((ctg) => {
                  return (
                    <NavDropdown.Item
                      value={ctg.name}
                      onClick={(e) => setCategory(ctg.name)}
                    >
                      {ctg.name}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
