import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import config from 'config';
import NavBar from 'components/NavBar/NavBar';
import { Link } from 'react-router';

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
          <Link to="/" className="h2">Home</Link>
          <Link to="/links" className="h2">Useful links</Link>
          <Link to="/about" className="h2">About</Link>
        </NavBar>

        <div className={styles.container}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
