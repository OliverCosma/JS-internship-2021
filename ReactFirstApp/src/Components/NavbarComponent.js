/* eslint-disable react/prop-types */
import React from 'react';
import './CardComponent';
import './NavbarComponent.css';

const NavbarComponent = (props) => {
    return (
        <div className="navbar">
            <p className="nav_logo bar_logo">EvoFashion</p>
            <p className="nav_logo2 bar_logo2">Price: {props.checkout}</p>
            <p className="nav_logo2 bar_logo2">Items: {props.counter}</p>
            <p onClick={props.clearCart} className="wanna_be_button nav_logo2 bar_logo2">
                Clear cart
            </p>
        </div>
    );
};
export default NavbarComponent;
