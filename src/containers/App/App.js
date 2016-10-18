import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import config from 'config';
import NavBar from 'components/NavBar/NavBar';

// Global scss
import 'theme/app.scss';

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
          <a href=""><span className="h2">Home</span></a>
          <a href=""><span className="h2">Info</span></a>
          <a href=""><span className="h2">About</span></a>
        </NavBar>

        <div className={styles.container}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
