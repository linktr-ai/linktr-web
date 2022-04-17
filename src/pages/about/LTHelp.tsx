import React from 'react';
import { withRouter } from 'react-router-dom';
import { MDBContainer } from "mdbreact";
import LTJumbotronPage from './../../components/LTJumbotronPage';
import Vultr from '../vultr'

const LTHelp = () => {
  return (
    <>
      <MDBContainer fluid className='text-center'>
        <LTJumbotronPage />
      </MDBContainer>

      <Vultr />
    </>
  );
}

export default withRouter(LTHelp);
