import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class Links extends Component {
  render() {
    const styles = require('./Links.scss');

    return (
      <div className={styles.home}>
        <Helmet title="Useful Links"/>
        <div className="container">
          <h2>Useful Links</h2>
          <ul>
            <li><a href="">React</a></li>
            <li><a href="">Redux</a></li>
            <li><a href="">React Router</a></li>
            <li><a href="">React Intl</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
