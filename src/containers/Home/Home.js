import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { IntlProvider, FormattedMessage } from 'react-intl';
import * as i18n from './i18n';

class Home extends Component {
  static propTypes = {
    locale: PropTypes.string.isRequired
  };

  render() {
    const styles = require('./Home.scss');
    const { locale } = this.props;

    return (
      <IntlProvider locale={locale} messages={i18n[locale]}>
        <div className={styles.home}>
          <Helmet title="Home"/>
          <div className="container">
            <h1><FormattedMessage id="home.header"/></h1>

            <p>
              <FormattedMessage id="home.description"/>
            </p>

            <div className={styles.features}>
              <h2><FormattedMessage id="home.features"/></h2>
              <ul>
                <li><FormattedMessage id="home.features.css_modules"/></li>
                <li><FormattedMessage id="home.features.i18n"/></li>
                <li><FormattedMessage id="home.features.vendor_dll"/></li>
                <li><FormattedMessage id="home.features.ducks"/></li>
              </ul>
            </div>
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

export default connect(mapStateToProps)(Home);
