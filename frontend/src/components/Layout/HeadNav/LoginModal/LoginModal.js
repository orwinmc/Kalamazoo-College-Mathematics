import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

class LoginModal extends Component {
  constructor(props){
    super(props);
  }

  moveToDashboard() {
    document.location.href = '/home';
  }

  render() {
    return (
      <Modal size="lg" show={this.props.visible} onHide={this.props.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Start Exploring Mathematics</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="loginForm">
            <Form.Group>
              <Form.Label>Enter Username:</Form.Label>
              <Form.Control type="username" placeholder="johndoe" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Enter Password:</Form.Label>
              <Form.Control type="password" placeholder="12345" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.closeModal}>
            Cancel
          </Button>
          <Button form="loginForm" variant="primary" onClick={() => this.moveToDashboard()}>
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default LoginModal;
