import React from 'react'
import { Navbar, Nav, container } from 'react-bootstrap'
const Header = () => {
 

  return  <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
      <container>
            <Navbar.Brand>Anteneh Shopping</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='/cart'><i className='fas fa-shoping-cart'></i>Cart </Nav.Link>
              <Nav.Link href='/Login'><i className='fas fa-user'></i>Sign In </Nav.Link>
              
                
            
              
            </Nav>
          </Navbar.Collapse>
          </container>
      </Navbar>
    </header>
  
}

export default Header