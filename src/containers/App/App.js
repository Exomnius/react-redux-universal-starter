import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { IntlProvider, FormattedMessage } from 'react-intl';
import config from 'config';
import { Header } from 'components';
import { NavLink } from 'reactstrap';
import { changeLocale } from 'redux/modules/i18n';

import * as i18n from './i18n';

// Intl Polyfill for Internet Explorer
import Intl from 'intl'; // eslint-disable-line

// Global scss
import 'theme/app.scss';

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired,
    locale: PropTypes.string.isRequired,
    locales: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);

    this.onLocaleClick = this.onLocaleClick.bind(this);
  }

  onLocaleClick(locale) {
    this.props.dispatch(changeLocale(locale));
  }

  render() {
    const styles = require('./App.scss');
    const { locale, locales } = this.props;

    return (
      <IntlProvider key="intl" locale={locale} messages={i18n[locale]}>
        <div className={styles.app}>
          <Helmet {...config.app.head} />

          <Header locale={locale} locales={locales} onLocaleClick={this.onLocaleClick}>
            <NavLink tag={Link} to="/info"><FormattedMessage id="navigation.info"/></NavLink>
            <NavLink tag={Link} to="/about"><FormattedMessage id="navigation.about"/></NavLink>
          </Header>

          <div className={styles.container}>
            {this.props.children}
          </div>
        </div>
      </IntlProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    locale: state.i18n.locale,
    locales: state.i18n.locales
  };
}

export default connect(mapStateToProps)(App);
