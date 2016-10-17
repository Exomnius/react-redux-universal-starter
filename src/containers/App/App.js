import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import config from 'config';
import NavBar from 'components/NavBar/NavBar';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const styles = require('./App.scss');

    return (
      <div className={styles.app}>
        <Helmet {...config.app.head} />

        <NavBar>
          <a href="">test</a>
          <a href="">test</a>
          <a href="">test</a>
          <a href="">test</a>
        </NavBar>

        <div className={styles.appContent}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
