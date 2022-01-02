import React from 'react';
import { MDBContainer } from "mdbreact";
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';

import LTNavbar from './../../components/LTNavbar'
import LTFooter from './../../components/LTFooter';

const WithNavigationLayout = () => {
  return(
    <>
      <LTNavbar />

      <MDBContainer>
      </MDBContainer>

      <LTFooter />
    </>
  )
}

const LinksLayout = () => {
  return(
    <MDBContainer>
      <Switch>
      </Switch>
    </MDBContainer>
  )
}

export { WithNavigationLayout, LinksLayout };