import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class About extends Component {
  render() {
    const styles = require('./About.scss');

    const banner = require('./banner.png');

    return (
      <div className={styles.about}>
        <Helmet title="About"/>

        <img src={banner} alt="React Redux starter" />

        <p>
          This project showcases the most used react plugins in a basic React Redux app.
        </p>
      </div>
    );
  }
}
