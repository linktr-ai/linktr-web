import React from "react";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBAnimation
} from "mdbreact";
import "./index.css";

import { useTranslation } from 'react-i18next';

const LTClassicFormPage = () => {
  const { t } = useTranslation();
  const email      = t('model.user.email.label');
  const password   = t('model.user.password.label');
  const username   = t('model.user.username.label');
  const smallStyle = { fontSize: '0.8rem'};

  return (
    <div id="classicformpage">
      <MDBView>
        <MDBMask className="d-flex justify-content-center align-items-center gradient">
          <MDBContainer>
            <MDBRow>
              <MDBAnimation
                type="fadeInLeft"
                delay=".3s"
                className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
              >
                <h1 className="h1-responsive font-weight-bold">
                  {t('tip.haveAccount')}
                </h1>
                <hr className="hr-light" />
                <h6 className="mb-4">
                  {t('tip.takeYouToTheWorld')}
                </h6>
                <MDBBtn outline rounded tag='a' href='/login' color='light'>
                  {t('action.login')}
                </MDBBtn>
              </MDBAnimation>

              <MDBCol md="6" xl="6" className="mb-4">
                <MDBAnimation type="fadeInRight" delay=".5s">
                  <MDBCard id="classic-card">
                    <MDBCardBody className="white-text">
                      <h3 className="text-center">
                        {t('tip.freeSignUp')}
                      </h3>
                      <hr className="hr-light" />
                      <MDBInput
                        className="white-text"
                        iconClass="white-text"
                        label={username}
                        icon="user"
                      />
                      <MDBInput
                        validate
                        type="email"
                        autoComplete='off'
                        className="white-text"
                        iconClass="white-text"
                        label={email}
                        icon="envelope"
                      />
                      <MDBInput
                        validate
                        type="password"
                        className="white-text"
                        iconClass="white-text"
                        autoComplete="off"
                        label={password}
                        icon="lock"
                      />
                      <div className="text-center pt-3 mb-3">
                        <MDBBtn type="button" gradient="blue" rounded className="btn-block z-depth-1a">{t('action.signup')}</MDBBtn>
                      </div>
                      <p className="white-text text-right d-flex justify-content-center mb-3 pt-2" style={smallStyle}> or Sign up with:</p>
                      <div className="row my-3 d-flex justify-content-center">
                        <MDBBtn type="button" gradient="white" rounded className="mr-md-2 z-depth-2" color='light'>
                          <MDBIcon fab icon="facebook-f" className="white-text fa-2x" />
                        </MDBBtn>
                        <MDBBtn type="button" gradient="white" rounded className="mr-md-2 z-depth-2" color='light'>
                          <MDBIcon fab icon="twitter" className="white-text fa-2x" />
                        </MDBBtn>
                        <MDBBtn type="button" gradient="white" rounded className="mr-md-2 z-depth-2" color='light'>
                          <MDBIcon fab icon="github" className="white-text fa-2x" />
                        </MDBBtn>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBMask>
      </MDBView>
    </div>
  );
}

export default LTClassicFormPage;