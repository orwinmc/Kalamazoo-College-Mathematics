import React, {Component} from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './HeadNav.css'

class HeadNav extends Component {
  /*constructor(props) {
    super(props);

    this.state = {}
  }*/

  render() {
    return (
      <Navbar variant="dark" className="HeadNav">
        <Navbar.Brand href="/">Kalamazoo College Mathematics</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/home">Login</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default HeadNav;
