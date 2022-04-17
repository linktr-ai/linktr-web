import React from 'react';
import { withRouter } from 'react-router-dom';
import logo from './../../images/logo.svg';

import { MDBCard, MDBCardBody, MDBBtn } from "mdbreact";
import LTFeaturesPage from './../../components/LTFeaturesPage'
import Vultr from '../vultr'

import './LTHome.css'

import { useTranslation } from 'react-i18next';

const LTHome = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="home-intro bg-gray mb-5">
        <MDBCard className='home-header pt-5 mt-5 text-center'>
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <br />
          <MDBCardBody>
            <MDBBtn outline color="cyan" rounded href='/signup' tag='a'>
              {t('tip.freeSignUp')}
            </MDBBtn>

            <MDBBtn rounded gradient="aqua" tag='a' href='/login'>
              {t('tip.haveAccount')} - {t('action.login')}
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </section>

      <LTFeaturesPage />

      <Vultr />
    </>
  );
}

export default withRouter(LTHome);
