import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';

const Footer = () => {
  return (
      <Container fluid id ="container">
          <Row>
              <Col>
                  <h5 className="title">Contact information</h5>
                  <p>
                      Mailing address:<br />
                      Department of Mathematics<br />
                      Kalamazoo College<br />
                      1200 Academy Street<br />
                      Kalamazoo, MI 49006
                    </p>
              </Col>
              <Col>
                  <h5 className="title">Physical address</h5>
                  <p>
                      <a href="https://map.concept3d.com/?id=198#!m/183148">1131 Academy Street</a><br />
                      Kalamazoo, MI 49006<br />
                      Room: 203 Olds/Upton Building
                    </p>
              </Col>
              <Col>
                  <h5 className="title">Phone</h5>
                  <p>
                      269.337.7100
                    </p>
              </Col>
              <Col>
                  <h5 className="title">Department Chair</h5>
                  <p>
                      <a href="mailto:Eric.Nordmoe@kzoo.edu">Eric Nordmoe</a>
                  </p>
              </Col>
              <Col>
                  <h5 className="title">Office Coordinator</h5>
                  <p>
                      <a href="mailto:Kristen.Eldred@kzoo.edu">Kristen Eldred</a>
                  </p>
              </Col>
          </Row>
      </Container>
  );
}

export default Footer;