import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../logo.png";
export default class Navbar extends Component {
  render() {
    return (
      <Nav className="navbar navbar-expand-sm  navbar-dark px-sm-5">
 
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand p-0 " />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>


        

        <li>
          <Link to="/cart" className="ml-auto">
            <button>
              <span className="mr-2">
                <i className="fas fa-cart-plus " />
              </span>
             My Cart
            </button>
          </Link>
        </li>

        </ul>

      </Nav>
    );
  }
}

const Nav = styled.nav`
  background: var(--navBackground);
  .navbar-brand {

    width:120px;
  }
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;

