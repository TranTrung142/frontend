import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './Header.scss';

Header.propTypes = {

};

function Header(props) {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <div className="container-fluid">
            <div className="container">
                <Navbar color="faded" light>
                    <NavbarBrand href="/photos" className="mr-auto">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink >
                                    <Link to="/photos/add">Add Edit</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink >
                                    <Link to="/photos">main</Link>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>

        </div>
    );
}

export default Header;