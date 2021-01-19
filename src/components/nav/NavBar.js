import React, { useState } from 'react';
import { Link } from "react-router-dom"
import "./NavBar.css"

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
  NavbarText
} from 'reactstrap';

export const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">GamerRater</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/games">Games</NavLink>
                        </NavItem>
                    </Nav>
                    {            
                        (localStorage.getItem("lu_token") !== null) ?
                            <li className="nav-item">
                                <button className="log-link fakeLink"
                                    onClick={() => {
                                        localStorage.removeItem("lu_token")
                                        localStorage.removeItem("user_id")
                                        props.history.push({ pathname: "/" })
                                    }}
                                >Logout</button>
                            </li> : ''
                    }
                        
                
                </Collapse>
            </Navbar>       
        </div>
    )
}
