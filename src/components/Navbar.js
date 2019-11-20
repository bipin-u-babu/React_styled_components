import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg'
import ButtonContainer from "../styledComponents/ButtonContainer";
import NavWrapper from "../styledComponents/NavWrapper";

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar fixed-top navbar-expand-sm navbar-dark px-sm-5">
                <Link to='/'>
                    <img src={logo} alt='store' className='navbar-brand' />
                </Link>

                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">Product</Link>
                    </li>
                </ul>

                <Link to = "/cart" className= "ml-auto">
                    <ButtonContainer>
                        <i className = "fas fa-cart-plus"/>My cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}
