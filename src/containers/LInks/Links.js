import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { IntlProvider, FormattedMessage } from 'react-intl';
import * as i18n from './i18n';

class Links extends Component {
  static propTypes = {
    locale: PropTypes.string.isRequired
  };

  render() {
    const styles = require('./Links.scss');
    const { locale } = this.props;

    return (
      <IntlProvider locale={locale} messages={i18n[locale]}>
        <div className={styles.home}>
          <Helmet title="Useful Links"/>
          <div className="container">
            <h2><FormattedMessage id="links.header"/></h2>
            <ul>
              <li><a href="">React</a></li>
              <li><a href="">Redux</a></li>
              <li><a href="">React Router</a></li>
              <li><a href="">React Intl</a></li>
            </ul>
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

export default connect(mapStateToProps)(Links);
