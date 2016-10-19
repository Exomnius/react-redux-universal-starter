import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { IntlProvider, FormattedMessage } from 'react-intl';
import config from 'config';
import NavBar from 'components/NavBar/NavBar';
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
    locale: PropTypes.string.isRequired
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
    const { locale } = this.props;

    return (
      <IntlProvider key="intl" locale={locale} messages={i18n[locale]}>
        <div className={styles.app}>
          <Helmet {...config.app.head} />

          <NavBar locale={locale} locales={config.i18n.locales} onLocaleClick={this.onLocaleClick}>
            <Link to="/" className="h2"><FormattedMessage id="navigation.home"/></Link>
            <Link to="/links" className="h2"><FormattedMessage id="navigation.useful_links"/></Link>
            <Link to="/about" className="h2"><FormattedMessage id="navigation.about"/></Link>
          </NavBar>

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
    locale: state.i18n.locale
  };
}

export default connect(mapStateToProps)(App);
