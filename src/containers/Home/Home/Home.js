import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');

    return (
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
    );
  }
}
