import React, {Component} from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './HeadNav.css'
//import LoginModal from './LoginModal/LoginModal';
import LoginModal from './LoginModal/LoginModal';
import Button from 'react-bootstrap/Button';

class HeadNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false
    }
  }

  showModal() {
    this.setState({
      modalVisible: true
    });
  }

  hideModal() {
    this.setState({
      modalVisible: false
    });
  }

  render() {
    return (
      <Navbar fixed variant="dark" className="HeadNav">
        <Navbar.Brand href="/">Kalamazoo College Mathematics</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link onClick={() => this.showModal()}> Log In </Nav.Link>
          <LoginModal visible={this.state.modalVisible} closeModal={() => this.hideModal()} />
        </Nav>
      </Navbar>
    );
  }
}

export default HeadNav;
