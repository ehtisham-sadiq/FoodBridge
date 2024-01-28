import React, { useContext } from 'react';
import { AuthContext } from '../context/auth-context';
import { Dropdown, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    const auth = useContext(AuthContext);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/"><span style={{ color: "red", fontWeight: "bold" }}>FoodSaver</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/home"><span style={{ color: "white" }}>Home</span></Nav.Link>
                    {auth.isLoggedIn && (<Nav.Link href="/donate"><span style={{ color: "white" }}>Donate</span></Nav.Link>)}
                    {auth.isLoggedIn && (<Nav.Link href="/reqforfood"><span style={{ color: "white" }}>Request For Food</span></Nav.Link>)}
                    <Nav.Link href="/contributors"><span style={{ color: "white" }}>Contributors</span></Nav.Link>
                    <Nav.Link href="/contact"><span style={{ color: "white" }}>Contact Us</span></Nav.Link>
                </Nav>
                <Nav >
                    {!auth.isLoggedIn && (<Link to="/login"><Button variant="danger">Login</Button></Link>)}
                    {!auth.isLoggedIn && (<Link to="/signup"><Button variant="danger">SignUp</Button></Link>)}
                    {auth.isLoggedIn && <Dropdown>
                        <Dropdown.Toggle variant="danger" id="dropdown-basic">
                            Profile
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item ><Link to="/viewprofile">View Profile</Link></Dropdown.Item>
                            <Dropdown.Item><Link to="/userdonfood">Donated Food</Link></Dropdown.Item>
                            <Dropdown.Item><Link to="/userrecfood">Received Food</Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>}
                    {auth.isLoggedIn && (
                        <Button variant="danger" onClick={auth.logout}>Logout</Button>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;