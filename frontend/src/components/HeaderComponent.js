import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import {Link} from "react-router-dom";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container-md">
      <Navbar color="light" light expand="sm">
        <NavbarBrand href="/">Django-React-Todo</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/register">Register</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/login">Login</Link>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/LaxmanChoudhary/django-react-todo"><i className="fab fa-github fa-lg"></i></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;