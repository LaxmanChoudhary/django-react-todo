import React, { Component, Fragment } from "react";
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
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../redux/ActionCreators";

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
      <span className="navbar-text mr-3">
        <strong>{user ? `Welcome ${user.username}` : "" }</strong>
      </span>
      <NavItem>
        <Button color="info" size="sm" onClick={this.props.logoutUser}>Logout</Button>
      </NavItem>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <NavItem>
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </NavItem>
      </Fragment>
    );

    return (
      <div className="container-md">
        <Navbar color="light" light expand="sm">
          <NavbarBrand href="/">Django-React-Todo</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {isAuthenticated ? authLinks : guestLinks}
              <NavItem>
                <NavLink href="https://github.com/LaxmanChoudhary/django-react-todo">
                  <i className="fab fa-github fa-lg"></i>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => {
    dispatch(logoutUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);