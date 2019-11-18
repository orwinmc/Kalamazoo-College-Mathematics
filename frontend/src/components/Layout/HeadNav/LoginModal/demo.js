import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export default class Demo extends Component{
  constructor(props){
    super(props);
  }

  render(){
    if (this.props.visible) {
      return(
          <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Please type in your ID and password
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div className="Container">

              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant ="danger" onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    } else {
      return null;
    }
  }
}
