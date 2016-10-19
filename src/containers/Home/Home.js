import React, { Component } from 'react';
import config from 'config';
import Helmet from 'react-helmet';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');

    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div className="container">
          <h1>{config.app.title}</h1>

          <h2>{config.app.description}</h2>

          <p>
            This is a starter for a Universal React Redux project!
          </p>

          <div className={styles.features}>
            <h2>Features</h2>
            <ul>
              <li>CSS Modules</li>
              <li>Internationalization</li>
              <li>Localized routes (i18n-router branch)</li>
              <li>Vendor DLL's</li>
              <li>Ducks</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
