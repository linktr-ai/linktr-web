import React from 'react';
import { withRouter } from 'react-router-dom';
import { MDBContainer, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";
import LTImagesCarousel from './../../components/LTImagesCarousel'
import Vultr from '../vultr'

import { useTranslation } from 'react-i18next';

const LTAbout = () => {
  const { t } = useTranslation();

  return (
    <>
      <MDBContainer fluid className='text-center'>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
        </h2>
        <p className="grey-text text-center w-responsive mx-auto mb-5">
        </p>

        <hr />
        <LTImagesCarousel />

        <MDBCardBody className='m-5 black-text'>
          <MDBCardTitle>
            {t('pricing.title')}
          </MDBCardTitle>
          <MDBCardText>
            {t('tip.nearestWithWorld')}
          </MDBCardText>
          <MDBBtn outline color="cyan" rounded href='/signup' tag='a'>
            {t('action.joinUs')}
          </MDBBtn>
        </MDBCardBody>
      </MDBContainer>

      <Vultr />
    </>
  );
}

export default withRouter(LTAbout);
