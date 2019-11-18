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

    this.state = {
      modalVisible: false
    }
  }

  modalShow() {
    this.setState({
      modalVisible: true
    });
  }

  modalHide() {
    this.setState({
      modalVisible: false
    });
  }

  render() {
    return (
      <Navbar fixed variant="dark" className="HeadNav">
        <Navbar.Brand href="/">Kalamazoo College Mathematics</Navbar.Brand>
        <Nav className="ml-auto">
          {/* <Nav.Link href="/home">Login</Nav.Link> */}
          <ButtonToolbar>
            <Button variant ='primary' onClick={() => this.modalShow}> Log In </Button>
            <Demo visible={this.state.modalVisible} closeModal={() => this.modalHide} />
          </ButtonToolbar>
        </Nav>
      </Navbar>
    );
  }
}

export default HeadNav;
