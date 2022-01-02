import React from 'react';
import { MDBContainer, MDBMask, MDBView, MDBRow } from 'mdbreact';
import { withRouter } from 'react-router-dom';

const LTError = () => {
    return (
      <MDBContainer className="mt-5 m-auto text-center ">
        <MDBRow className='pb-5 mb-5 mt-5' />
        <MDBView rounded roundedCircle>
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
            className="img-fluid"
            alt="Linktr.cn"
          />
          <MDBMask pattern={0} className="rgba-teal-slight" rounded style={{ paddingTop: '10%'}}>
            <h1 style={{ fontSize: '5rem' }}>
              <span className="yellow-text" style={{ fontFamily: 'fantasy', padding: '0 5px' }}>4</span>
              <span className="blue-text" style={{ fontFamily: 'monospace', padding: '0 5px' }}>0</span>
              <span className="yellow-text" style={{ fontFamily: 'fantasy', padding: '0 5px' }}>4</span>
            </h1>
            <br />
            <br />
            <br />
            <h2 className="white-text">We are sorry, the page you requested cannot be found.</h2>
            <h5 className="white-text">
              The URL may be misspelled or the page you're looking for is no longer available.
            </h5>
          </MDBMask>
        </MDBView>

        <MDBRow className='pb-5 mb-5' />
     </MDBContainer>
  );
}

export default withRouter(LTError);
