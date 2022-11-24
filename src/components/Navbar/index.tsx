import React from 'react';
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
    DropdownItem
} from 'reactstrap';

export default class NavBar extends React.Component {
    // constructor(props: any) {
    // super(props);

    // this.toggle = this.toggle.bind(this);
    // this.state = {
    // isOpen: false
    // };
    // }
    // toggle() {
    // this.setState({
    // isOpen: !this.state.isOpen
    // });
    // }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Admin Dashboard</NavbarBrand>
                    <NavbarToggler />
                    <Collapse navbar>
                        <Nav className="ms-auto px-3" navbar>
                            {/* <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem> */}
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    My Profile
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Configuration
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Sign out
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}