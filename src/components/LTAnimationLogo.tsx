import React from 'react';
import { MDBAnimation, MDBCol, MDBRow } from 'mdbreact';
import { withRouter } from 'react-router-dom';

import logo from '../images/logo.svg';

const LTAnimationLogo = () => {
    return (
      <MDBRow className="pb-2">
        <MDBCol lg="12" className="text-center">
          <MDBAnimation type="bounce" infinite>
            <img className="img-fluid" src={logo} style={{ height: "100px" }} alt="logo" />
          </MDBAnimation>
        </MDBCol>
      </MDBRow>
  );
}

export default withRouter(LTAnimationLogo);
