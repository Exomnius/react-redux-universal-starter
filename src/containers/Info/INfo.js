import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { Container } from 'reactstrap';
import * as i18n from './i18n';

class Info extends Component {
  static propTypes = {
    locale: PropTypes.string.isRequired
  };

  render() {
    const styles = require('./Info.scss');
    const { locale } = this.props;

    return (
      <IntlProvider locale={locale} messages={i18n[locale]}>
        <div className={styles.info}>
          <Helmet title="Info"/>

          <Container>
            <h1>This is the info page!</h1>
          </Container>
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

export default connect(mapStateToProps)(Info);
