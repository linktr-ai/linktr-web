import React from 'react';
import { withRouter } from 'react-router-dom';
import { MDBContainer } from "mdbreact";
import LTJumbotronPage from './../../components/LTJumbotronPage';

const LTHelp = () => {
  return (
    <MDBContainer fluid className='text-center'>
      <LTJumbotronPage />
    </MDBContainer>
  );
}

export default withRouter(LTHelp);
