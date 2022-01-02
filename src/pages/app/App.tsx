import React from 'react';
import { MDBContainer } from "mdbreact";
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';

// Import i18n
import './../../utils/i18n';

import LTNavbar from './../../components/LTNavbar'

import LTHome from './../about/LTHome';
import LTAbout from './../about/LTAbout';
import LTHelp from './../about/LTHelp';
import LTSignIn from './../sessions/LTSignIn';
import LTSignUp from './../sessions/LTSignUp';
import LTYoutubeIDLookUp from './../social/LTLTYoutubeIDLookUp';
import LTPricingPlans from './../about/LTPricingPlans'
import LTHookIndex from './../hooks/LTIndex'
import LTMember from './../team/LTMember'
import LTError from './../../components/LTError';
import LTMyListGroup from './../links/LTMyListGroup'

import LTFooter from './../../components/LTFooter';

const App = () => {
  return (
    <BrowserRouter>
      <LTNavbar />

      <MDBContainer>
        <Switch>
          <Route path="/" component={withRouter(LTHome)} exact />
          <Route path="/about" component={withRouter(LTAbout)} />
          <Route path="/login" component={withRouter(LTSignIn)} />
          <Route path="/signup" component={withRouter(LTSignUp)} />
          <Route path="/help" component={withRouter(LTHelp)} />
          <Route path="/pricing" component={withRouter(LTPricingPlans)} />
          <Route path="/lookup" component={withRouter(LTYoutubeIDLookUp)} />
          <Route path="/hooks" component={withRouter(LTHookIndex)} />
          <Route path="/team" component={withRouter(LTMember)} />
          <Route path="/b/*" component={withRouter(LTMyListGroup)} />
          <Route path="*" component={withRouter(LTError)} />
        </Switch>
      </MDBContainer>

      <LTFooter />
    </BrowserRouter>
  );
}

export default App;
