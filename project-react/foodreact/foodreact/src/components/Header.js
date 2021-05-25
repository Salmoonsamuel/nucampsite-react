import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Ss-Foods</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="offset-4" navbar>
            <NavItem className="px-2" >
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">About</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Contact</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;