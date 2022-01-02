import React from 'react';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav,
  MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink,
  MDBContainer, MDBIcon
} from 'mdbreact';
import logo from './../images/logo.svg';

import { withTranslation } from 'react-i18next';

class LTNavbarComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    const { t } = this.props;

    return (
      <MDBNavbar color="bg-primary" expand="md" light transparent>
        <MDBContainer className="text-md-left">
          <MDBNavbarBrand href="/">
            <span>
              <img className="img-fluid" alt="" src={logo} />
            </span>
          </MDBNavbarBrand>
          {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
          <MDBCollapse isOpen={this.state.collapse} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                {/*<MDBNavLink activeStyle={{ fontWeight: "bold", color: "#00bcd4" }} to="/">{t('menu.home')}</MDBNavLink>*/}
                <MDBNavLink activeClassName="active" to="/" exact>{t('menu.home')}</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink activeClassName="active" to="/about">{t('menu.about')}</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink activeClassName="active" to="/pricing">{t('menu.pricing')}</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink activeClassName="active" to="/team">{t('menu.team')}</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink activeClassName="active" to="/help">{t('menu.help')}</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>

            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink to="#!"><span className='blue-text'>Beta</span></MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/login"><MDBIcon fab icon="user" /></MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    );
  }
}

const LTNavbar = withTranslation()(LTNavbarComponent)

export default LTNavbar;
