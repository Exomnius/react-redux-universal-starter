import React, { Component, PropTypes } from 'react';

export default class NavBar extends Component {
  static propTypes = {
    children: PropTypes.array.isRequired
  };

  render() {
    const styles = require('./NavBar.scss');
    const { children } = this.props;

    const logo = require('./../../../static/logo.jpg');

    return (
      <div className={styles.navBar}>
        <img src={logo} alt="" title="" className={styles.logo}/>
        <ul className={styles.navBar.links}>
          { children && children.map((child, key) => <li key={key}>{child}</li>) }
        </ul>
      </div>
    );
  }
}
