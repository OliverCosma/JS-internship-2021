import React from 'react';
import './CardComponent'
import './NavbarComponent.css'
import Hook from "./Hook";
import { counter } from "./Counter";
import Remove from './Remove';

const NavbarComponent = (props) => 
 
{
    const [state] = Hook(counter.event);
    return (
    <div className="navbar">
        <p class="nav_logo bar_logo">EvoFashion</p>
        <Remove></Remove>
        <p class="nav_logo2 bar_logo2">Items: {state.counter}</p>
        
    </div>
    )
}
export default  NavbarComponent;