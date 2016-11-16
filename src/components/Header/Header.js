import React, { Component, PropTypes } from 'react';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Header extends Component {
  static propTypes = {
    children: PropTypes.array.isRequired,
    locales: PropTypes.array.isRequired,
    locale: PropTypes.string.isRequired,
    onLocaleClick: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const { children, locales, locale, onLocaleClick } = this.props;
    const styles = require('./Header.scss');

    return (
      <Navbar color="faded" full light>
        <NavbarToggler className="pull-sm-right hidden-lg-up collapsed" onClick={this.toggleNavbar} />
        <Collapse className="navbar-toggleable-md" isOpen={!this.state.collapsed}>
          <Container className={styles.header}>
            <NavbarBrand href="/">Reactstrap</NavbarBrand>
            <Nav navbar>
              { children && children.map((child, index) =>
                <NavItem key={index}>
                  {child}
                </NavItem>
              )}
            </Nav>
            <Nav navbar className="pull-xs-right">
              { locales && locales.map((configLocale) =>
                <NavItem key={configLocale}>
                  <NavLink active={configLocale === locale} onClick={() => onLocaleClick(configLocale)}>
                    {configLocale}
                  </NavLink>
                </NavItem>
              )}
            </Nav>
          </Container>
        </Collapse>
      </Navbar>
    );
  }
}
