import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import { useTranslation } from 'react-i18next';

// https://mdbootstrap.com/docs/react/css/colors/

const LTFooter = () => {
  const { t } = useTranslation();

  return (
    <MDBFooter color="unique-color-dark" className="font-small pt-5">
      <MDBContainer fluid className="container text-center text-md-left">
        <MDBRow>
          <MDBCol>
            <h5 className="title">{t('about_us.title')}</h5>
            <p>
              {t('about_us.content')}
            </p>
          </MDBCol>

          <MDBCol md="3">
            <h5 className="title">链接</h5>
            <ul className='mt-0'>
              <li className="list-unstyled mt-1">
                <a href="https://www.icmoc.com">Encore</a>
              </li>
              <li className="list-unstyled mt-1">
                <a href="/b/encore">Encore - 链</a>
              </li>
              <li className="list-unstyled mt-1">
                <a href="https://ekohe.com/encore">Encore - Ekohe</a>
              </li>
              <li className="list-unstyled mt-1">
                <a href="https://erp.icmoc.com">Encore - Free ERP</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">&nbsp;</h5>
            <ul className='mt-0'>
              <li className="list-unstyled mt-1">
                <a href="https://blog.icmoc.com">Encore - Blog</a>
              </li>
              <li className="list-unstyled mt-1">
                <a href="https://github.com/encoreshao">Encore - Github</a>
              </li>
              <li className="list-unstyled mt-1">
                <a href="https://linkedin.com/in/encore-shao">Encore - LinkedIn</a>
              </li>
              <li className="list-unstyled mt-1">
                <a href="https://www.facebook.com/encore.shao">Encore - Facebook</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <hr className="container pt-3" />
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          Copyright &copy; {new Date().getFullYear()} - <a href={t('domain')}> {t('title')} </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default LTFooter;
