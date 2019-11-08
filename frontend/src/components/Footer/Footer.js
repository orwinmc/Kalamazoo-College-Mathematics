import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="stylish-color-dark" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Contact information</h5>
            <p>
                Mailing address:<br />
                Department of Mathematics<br />
                Kalamazoo College<br />
                1200 Academy Street<br />
                Kalamazoo, MI 49006
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Physical address</h5>
            <p>
                <a href="https://map.concept3d.com/?id=198#!m/183148">1131 Academy Street</a><br />
                Kalamazoo, MI 49006<br />
                Room: 203 Olds/Upton Building
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Phone</h5>
            <p>
              269.337.7100
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Department Chair</h5>
            <p>
                <a href="mailto:Eric.Nordmoe@kzoo.edu">Eric Nordmoe</a>
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Office Coordinator</h5>
            <p>
                <a href="mailto:Kristen.Eldred@kzoo.edu">Kristen Eldred</a>
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;