import React from 'react'

import {Nav,Navbar, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default function Navigation() {
    return (
      <>
       
  <Navbar bg="success" variant="danger">
    <Container>
    <Navbar.Brand href="#home">Rp Tech</Navbar.Brand><br />
    <Nav>
      <Link to="/products">Products</Link><br />
      <Link to="/courses">Courses</Link><br />
      {/* <Link href="#enquiry">Enquiry</Link><br /> */}
    </Nav>
    </Container>
  </Navbar>
        </>
    )
}