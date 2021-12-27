import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'; 
import './navbar.css';
function navbar() {
    return (
        <div>
<Navbar bg="light" expand="lg">
  <Container className='navbar'>


        <Nav.Link href="#action1" className="item">Reality shows</Nav.Link>
        <Nav.Link href="#action1"  className="item">Movies </Nav.Link>
        <Nav.Link href="#action1" className="item" >Cartoons</Nav.Link>
        <Nav.Link href="#action1"  className="item">Series</Nav.Link>
        
  
    
  </Container>
</Navbar> 
        </div>
    )
}

export default navbar
