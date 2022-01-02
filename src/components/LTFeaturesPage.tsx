import React from "react";
import {
  MDBRow, MDBCol,
  MDBCard, MDBCardBody,
  MDBMask, MDBView
} from "mdbreact";

import { useTranslation } from 'react-i18next';

const LTFeaturesPage = () => {
  const { t } = useTranslation();

  return (
    <MDBCard className="mb-5">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold my-5 text-center black-text">
          {t('tip.onlyOneLink')}
        </h2>
        <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
          {t('tip.takeYouToTheWorld')}
        </p>
        <MDBRow>
          <MDBCol md="12" lg="4" className="mb-lg-0 mb-5">
            <MDBView hover rounded className="z-depth-1-half mb-4">
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" className="waves-light" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol md="12" lg="4" className="mb-lg-0 mb-5">
            <MDBView hover rounded className="z-depth-1-half mb-4">
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" className="waves-light" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol md="12" lg="4" className="mb-lg-0 mb-5">
            <MDBView hover rounded className="z-depth-1-half mb-4">
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1932&q=80"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" className="waves-light" />
              </a>
            </MDBView>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default LTFeaturesPage;
