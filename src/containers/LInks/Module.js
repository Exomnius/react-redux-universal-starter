import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import * as i18n from './i18n';

class Module extends Component {
  static propTypes = {
    locale: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired
  };

  render() {
    const { locale, children } = this.props;

    return (
      <IntlProvider locale={locale} messages={i18n[locale]}>
        {children}
      </IntlProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    locale: state.i18n.locale
  };
}

export default connect(mapStateToProps)(Module);

