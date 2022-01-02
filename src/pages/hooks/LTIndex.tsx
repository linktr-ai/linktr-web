import React from 'react';
import { withRouter } from 'react-router-dom';
import { MDBContainer } from "mdbreact";

import LTAnimationLogo from './../../components/LTAnimationLogo'
import LTCounting from './LTCounting'

const LTHookIndex = () => {

  return (
    <MDBContainer fluid className='container mt-5 pt-5'>
      <LTAnimationLogo />

      <br />
      <LTCounting />

      <br />
    </MDBContainer>
  );
}

export default withRouter(LTHookIndex);
