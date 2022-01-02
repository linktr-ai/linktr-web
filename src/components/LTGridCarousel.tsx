import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBContainer
} from "mdbreact";

class LTGridCarousel extends Component {
  render() {
    const images = [
      "https://images.unsplash.com/photo-1584698048102-bbedb5811cba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3267&q=80",
      "https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
      "https://images.unsplash.com/photo-1582458391132-4cfd4382b46f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2084&q=80",
      "https://images.unsplash.com/photo-1578117813019-7925d71d5b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
      "https://images.unsplash.com/photo-1523281855495-b46cf55b1e7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80",
      "https://images.unsplash.com/photo-1440330033336-7dcff4630cef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1942&q=80",
      "https://images.unsplash.com/photo-1497048502537-9e5719098e2b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
      "https://images.unsplash.com/photo-1588571610381-feb9bba63067?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2249&q=80"
    ];

    return (
      <MDBContainer fluid className='p-5'>
        <MDBRow>
          {[images[0]].map(
            (url: any, index: number) => (
              <MDBCol key={index} md="12" className="mb-3">
                <img src={url} className="img-fluid z-depth-1" alt="LinkTR" />
              </MDBCol>
            )
          )}
        </MDBRow>
        <MDBRow>
          {[images[6], images[7]].map(
            (url: any, index: number) => (
              <MDBCol key={index} md="6" className="mb-3">
                <img src={url} className="img-fluid z-depth-2" alt="LinkTR" />
              </MDBCol>
            )
          )}
        </MDBRow>
        <MDBRow>
          {[images[1], images[2], images[3]].map(
            (url: any, index: number) => (
              <MDBCol key={index} lg="4" md="12" className="mb-3">
                <img src={url} className="img-fluid z-depth-3" alt="LinkTR" />
              </MDBCol>
            )
          )}
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default LTGridCarousel;
