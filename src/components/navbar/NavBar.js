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
import {
  fetchSearchedSounds,
  fetchFilteredSounds,
} from "../../store/sound/actions";
import "./navbar.css";

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
    <div className="d-flex" style={{ margin: "0 1em" }}>
      <Navbar
        className="w-100"
        bg="light"
        expand="lg"
        style={{ padding: "1.5em" }}
      >
        <Container>
          <Navbar.Brand href="/"> 🎙️ SOUNDLIKE 🎙️</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          {/* <Navbar.Collapse id="basic-navbar-nav" className="collapsed-style"> */}
          <Nav className="mx-auto w-100 align-items-center">
            <Form className="search-form-style">
              <Form.Group style={{ width: "100%" }} controlId="formBasicSearch">
                <Form.Control
                  type="text"
                  placeholder="Search for sounds, ex: friends, star wars..."
                  value={text}
                  onChange={(event) => setText(event.target.value)}
                />
              </Form.Group>
            </Form>
            <Button
              variant="success"
              onClick={search}
              style={{ margin: "0 1em" }}
            >
              Search
            </Button>
            <NavDropdown
              title={category ? category : "Categories"}
              id="basic-nav-dropdown"
              value={category}
            >
              {allcategories?.map((ctg) => {
                return (
                  <NavDropdown.Item
                    value={ctg.name}
                    onClick={(e) => {
                      e.preventDefault();
                      setCategory(ctg.name);
                      dispatch(fetchFilteredSounds(ctg.id));
                    }}
                  >
                    {ctg.name}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </div>
  );
}
