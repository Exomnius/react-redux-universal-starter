import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { IntlProvider, FormattedMessage } from 'react-intl';
import * as i18n from './i18n';

class About extends Component {
  static propTypes = {
    locale: PropTypes.string.isRequired
  };

  render() {
    const styles = require('./About.scss');
    const { locale } = this.props;

    const banner = require('./banner.png');

    return (
      <IntlProvider locale={locale} messages={i18n[locale]}>
        <div className={styles.about}>
          <Helmet title="About"/>

          <h2><FormattedMessage id="about.header"/></h2>

          <img src={banner} alt="React Redux starter" />

          <p><FormattedMessage id="about.description"/></p>
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

export default connect(mapStateToProps)(About);
