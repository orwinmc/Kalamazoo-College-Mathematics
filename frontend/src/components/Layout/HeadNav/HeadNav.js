import React, {Component} from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './HeadNav.css'
//import LoginModal from './LoginModal/LoginModal';
import Demo from './LoginModal/demo';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {Redirect } from 'react-router-dom';

class HeadNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let addModalClose = () => this.setState({ addModalShow: false })

    return (
      <Navbar fixed variant="dark" className="HeadNav">
        <Navbar.Brand href="/">Kalamazoo College Mathematics</Navbar.Brand>
        <Nav className="ml-auto">
          {/* <Nav.Link href="/home">Login</Nav.Link> */}
          <ButtonToolbar>
            <Button 
            variant ='primary' 
            onClink={()=> <Redirect to='/demo' />}
            >Log In
            </Button>

            <Demo 
              show={this.state.addModalShow}
              onHide={addModalClose}
            />

          </ButtonToolbar>
        </Nav>
      </Navbar>
    );
  }
}

export default HeadNav;
