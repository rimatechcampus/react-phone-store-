import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import Logo from "../logo.svg";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
          <Link to="/">
            <img
              src={Logo}
              class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
              alt=""
            />
          </Link>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link">
                products
              </Link>
            </li>
          </ul>

          <Link to="/cart" className="ml-auto">
            {/* styled components  */}
            <ButtonContainer>
              <span className="mr-2">
                {" "}
                <i
                  style={{
                    color: "#fff",
                  }}
                  class="fa fa-shopping-cart"
                ></i>
              </span>
              my cart
            </ButtonContainer>
          </Link>
        </NavWrapper>
      </div>
    );
  }
}

// todo

const NavWrapper = styled.nav`
  background: var(--mainRed);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.2rem;
    text-transform: capitalize;
  }
`;
