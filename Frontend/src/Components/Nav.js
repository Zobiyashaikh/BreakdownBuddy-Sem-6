import {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {removeCookie, getCookie} from '../utils/cookie';
import { useLocation } from "react-router-dom"
import { Button, Flex } from 'antd';
import { MainLogo } from './images';
import Cardrawer from './Dashboard/Cardrawer';

const loginbtn = {
  width:'100px',
  marginLeft:"50px"
};
const loginbtn1 = {
  width:'100px',
  marginLeft:"5px"
};
function GlobalNav({title}) {
    const [username, setUsername] = useState('')
    const [userDetails, setUserDetails] = useState('')
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
      if(getCookie('AT') && localStorage.getItem('userDetails')){
        let userDetails = JSON.parse(localStorage.getItem('userDetails'))
        setUserDetails(userDetails)
        setUsername(userDetails?.userName)
        setAuthenticated(true)
      }
    }, []);
    
    const location = useLocation();
    const { pathname } = location;

    const handleLogout = () => {
      removeCookie('AT');
      localStorage.clear()
      if(userDetails?.isMechanic){
        window.location = '/mechanic/login';
      }
      else{
        window.location = '/';
      }
    }
  return (
    <Navbar className="navbar navbar-dark bg-primary fixed-top" expand="lg"  style={{backgroundColor:"#FFBF00 ",color: '#fff', 
    // width:"1345px"
    }}>
      <img style={{width:"50px",height:"50px" }} src={MainLogo}></img>
        <Navbar.Brand href="#home" style={{color:'#fff'}}>Breakdown Buddy</Navbar.Brand>
      <Container className='d-flex justify-content-between'>
     <Cardrawer/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-aut">
            <Nav.Link href="/" style={{color:'#fff'}}>Home</Nav.Link>
            <Nav.Link href="/about" style={{color:'#fff'}}>About</Nav.Link>
            {authenticated && <NavDropdown style={{color:'#fff'}} title={username.toUpperCase()} id="basic-nav-dropdown" className="dropdown-menu-right">
              {authenticated && <NavDropdown.Item  href={userDetails?.isAdmin?"/admin-dashboard":"/dashboard"} active={pathname == "/dashboard" || pathname == '/admin-dashboard'?true:false}>Dashboard</NavDropdown.Item>}
              {authenticated && <NavDropdown.Item href="/profile" active={pathname == "/profile"?true:false}>Profile</NavDropdown.Item>}
              {authenticated && <NavDropdown.Item  href="/cart" active={pathname == "/cart"?true:false}>Cart</NavDropdown.Item>}
              {/* <NavDropdown.Item href="/settings">
                Settings
              </NavDropdown.Item> */}
              <NavDropdown.Item href="/services">
                Services
              </NavDropdown.Item>
              <NavDropdown.Item href="/faq">
                FAQ
              </NavDropdown.Item>
              {userDetails?.isAdmin && 
                <NavDropdown.Item href="/add-mechanics">
                  Add Mechanics
                </NavDropdown.Item>
              }
              <NavDropdown.Divider />
              {authenticated && <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>}
              {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>}
          </Nav>
        </Navbar.Collapse>
      
        {!authenticated && <Button href="/intro"  type="primary" style={loginbtn}>Login</Button>}
        {!authenticated && <Button  href="/intro" style={loginbtn1}>Sign Up</Button>}

      </Container>
    </Navbar>
  );
}

export default GlobalNav;