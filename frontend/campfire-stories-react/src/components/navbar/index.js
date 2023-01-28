// how to do the components
// https://www.geeksforgeeks.org/create-a-responsive-navbar-using-reactjs/
// https://stackoverflow.com/questions/69854011/matched-leaf-route-at-location-does-not-have-an-element


import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to='/home' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/CampfireSafety' activeStyle>
                        Campfire Safety
                    </NavLink>
                    <NavLink to='/about' activeStyle>
                        About
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
