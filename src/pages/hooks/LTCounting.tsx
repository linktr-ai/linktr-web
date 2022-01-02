import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { MDBBtn, MDBAlert } from "mdbreact";

const LTCounting = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  // Effect Hook
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <MDBAlert color="info" >
      <h4 className="alert-heading">Counting</h4>
      <p>You clicked {count} times</p>
      <hr />
      <p className="mb-0">
        <MDBBtn onClick={() => setCount(count + 1)}>
          PLUS +1
        </MDBBtn>
      </p>
    </MDBAlert>
  );
}

export default withRouter(LTCounting);
