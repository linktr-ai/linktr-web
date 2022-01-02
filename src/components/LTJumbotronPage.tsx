import React from "react";
import {
  MDBJumbotron, MDBBtn, MDBContainer,
  MDBRow, MDBCol,  MDBCardImage, MDBCardHeader, MDBCardBody,
  MDBCardTitle, MDBCardText
} from "mdbreact";

import { useTranslation } from 'react-i18next';

const LTJumbotronPage = () => {
  const { t } = useTranslation();

  return (
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="p-0" rounded>
            <MDBCardHeader className="bg-white">
              <h2 className="h1-responsive font-weight-bold my-5 black-text">
                构思 - 执行 - 迭代
              </h2>
              <p className="grey-text w-responsive mx-auto mb-5">
                我们独特的流程每天都在创造价值。
              </p>
            </MDBCardHeader>

            <MDBCardImage
              className="img-fluid"
              // src="https://images.unsplash.com/photo-1479920252409-6e3d8e8d4866?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              src="https://cdn.ekohe.com/4b59/Diagram.png"
            />

            <MDBCardBody>
              <MDBCardTitle className="h3 black-text">链</MDBCardTitle>
              <MDBCardText className="black-text">
                {t('tip.nearestWithWorld')}
              </MDBCardText>
              <MDBBtn outline color="cyan" rounded href='/signup' tag='a'>
                {t('action.joinUs')}
              </MDBBtn>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default LTJumbotronPage;
