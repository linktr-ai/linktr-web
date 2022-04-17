import React from "react";
import {
  MDBContainer,
  MDBRow, MDBCol, MDBCard,
  MDBCardBody, MDBBtn
} from "mdbreact";
import Vultr from '../vultr'

import { useTranslation } from 'react-i18next';

const LTPricingPlans = () => {
  const { t } = useTranslation();

  return (
    <>
      <MDBContainer fluid>
        <section className="text-center my-5 black-text">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            {t('pricing.title')}
          </h2>
          <p className="grey-text text-center w-responsive mx-auto mb-5">
            {t('pricing.subtitle')}
          </p>
          <MDBRow>
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
              <MDBCard pricing className="white-text">
                <div className="aqua-gradient rounded-top">
                  <h4
                    className="option"
                    style={{
                      padding: "2.5rem",
                      marginBottom: 0,
                      fontWeight: 500
                    }}
                  >
                    {t('pricing.free')}
                  </h4>
                </div>
                <MDBCardBody className="striped green-striped card-background px-5 green-text">
                  <h2 className="my-4 pb-3 h1">
                    {t('pricing.free_forever')}
                  </h2>
                  <ul style={{ listStyle: '' }}>
                    <li>
                      <p>
                        <strong>{t('pricing.unlimited')}</strong>
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>{t('pricing.support')}</strong>
                      </p>
                    </li>
                  </ul>
                  <MDBBtn rounded gradient="aqua" className="mb-3 mt-3" tag='a' href='/signup'>
                    {t('action.signupAccount')}
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
              <MDBCard pricing className="white-text">
                <div className="peach-gradient rounded-top">
                  <h4
                    className="option"
                    style={{
                      padding: "2.5rem",
                      marginBottom: 0,
                      fontWeight: 500
                    }}
                  >
                    {t('pricing.pro')}
                  </h4>
                </div>
                <MDBCardBody className="striped orange-striped card-background px-5 orange-text">
                  <h2 className="my-4 pb-3 h1">5¥ / {t('pricing.month')}</h2>
                  <ul>
                    <li>
                      <p>
                        <strong>{t('pricing.unlimited')}</strong>
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>{t('pricing.reports')}</strong>
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>{t('pricing.support')}</strong>
                      </p>
                    </li>
                  </ul>
                  <MDBBtn rounded gradient="peach" className="mb-3 mt-3" tag='a' href='/signup'>
                    {t('action.buyNow')}
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
              <MDBCard pricing className="white-text">
                <div className="purple-gradient rounded-top">
                  <h4
                    className="option"
                    style={{
                      padding: "2.5rem",
                      marginBottom: 0,
                      fontWeight: 500
                    }}
                  >
                    {t('pricing.enterprise')}
                  </h4>
                </div>
                <MDBCardBody className="striped purple-striped card-background px-5 purple-text">
                  <h2 className="my-4 pb-3 h1">10¥ / {t('pricing.month')}</h2>
                  <ul>
                    <li>
                      <p>
                        <strong>{t('pricing.unlimited')}</strong>
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>{t('pricing.analytics')}</strong>
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>{t('pricing.customization')}</strong>
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>{t('pricing.integrations')}</strong>
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>{t('pricing.support')}</strong>
                      </p>
                    </li>
                  </ul>
                  <MDBBtn rounded gradient="purple" className="mb-3 mt-3" tag='a' href='/signup'>
                    {t('action.buyNow')}
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <Vultr />
    </>
  );
}

export default LTPricingPlans;
