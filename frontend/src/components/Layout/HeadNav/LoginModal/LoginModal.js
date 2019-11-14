// NOT DONE

import React, {Component} from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import './HeadNav.css'

class LoginModal extends Component {
  constructor(props) {
    super(props);
  }

  handleOpen() {

  }

  handleClose() {

  }

  render() {
    return (
      <div class="LoginModal">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Log In</Modal.Title>
          </Modal.Header>
          <Modal.Body>ID, PS</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Log In
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
