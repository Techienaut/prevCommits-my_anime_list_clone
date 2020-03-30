import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
  Dropdown
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./Header.css";
import { animeGenreList, mangaGenreList } from "../../data/GenreData";

// forwardRef again here!
// NavDropdown needs access to the DOM of the Menu to measure it
let animeGenreItems = animeGenreList.map((genre, index) => {
  return (
    <LinkContainer key={index} to={`/anime-genre/${genre.toLowerCase()}`}>
      <NavDropdown.Item eventKey={`1.${index + 1}`}>{genre}</NavDropdown.Item>
    </LinkContainer>
  );
});
let mangaGenreItems = mangaGenreList.map((genre, index) => {
  return (
    <LinkContainer key={index} to={`/manga-genre/${genre.toLowerCase()}`}>
      <NavDropdown.Item eventKey={`1.${index + 1}`}>{genre}</NavDropdown.Item>
    </LinkContainer>
  );
});
export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navColor" variant="dark">
      <Router>
        <Navbar.Brand href="#home">MyAnimeClone</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Top Anime</Nav.Link>
            <Nav.Link href="#features">Top Manga</Nav.Link>
            <NavDropdown title="Anime Genres" id="nav-dropdown">
              <NavDropdown.Item eventKey="1.0">ALL</NavDropdown.Item>
              <NavDropdown.Divider />
              {animeGenreItems}
            </NavDropdown>
            <NavDropdown title="Manga Genres" id="nav-dropdown2">
              <NavDropdown.Item eventKey="2.0">ALL</NavDropdown.Item>
              <NavDropdown.Divider />
              {mangaGenreItems}
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Router>
    </Navbar>
  );
}
