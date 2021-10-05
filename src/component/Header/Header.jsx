import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <>
        <Navbar  expand="lg" fixed="top" className="navbar">
  <div className="container">
    <Navbar.Brand href="#">
      <NavLink to="/home" >
      <img src={'https://themepure.net/template/educal/educal/assets/img/logo/logo.png'} alt="logo" />
      </NavLink>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <NavLink to="/home" className="selected active"> Home </NavLink>
        <NavLink to="/about" className="selected"> About </NavLink>
        <NavLink to="/services" className="selected"> Services </NavLink>
        <NavLink to="/team" className="selected"> Team </NavLink>
        <NavLink to="/contacts" className="selected"> Contact us </NavLink>
        </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button className="btn btn-primary">Search</Button>
      </Form>
    </Navbar.Collapse>
    </div>
</Navbar>
    </>
    );
};

export default Header;