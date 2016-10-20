import React, { Component, } from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

export default class About extends Component {
  render() {
    const styles = require('./About.scss');

    const banner = require('./banner.png');

    return (
      <div className={styles.about}>
        <Helmet title="About"/>

        <h2><FormattedMessage id="about.header"/></h2>

        <img src={banner} alt="React Redux starter" />

        <p><FormattedMessage id="about.description"/></p>
      </div>
    );
  }
}
