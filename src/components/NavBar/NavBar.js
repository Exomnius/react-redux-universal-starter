import React, { Component, PropTypes } from 'react';

export default class NavBar extends Component {
  static propTypes = {
    children: PropTypes.array.isRequired,
    locale: PropTypes.string.isRequired,
    locales: PropTypes.array.isRequired,
    onLocaleClick: PropTypes.func.isRequired
  };

  render() {
    const styles = require('./NavBar.scss');
    const { children, locale, locales, onLocaleClick } = this.props;

    const logo = require('./../../../static/logo.jpg');

    return (
      <div className={styles.navBar}>
        <img src={logo} alt="" title="" className={styles.logo}/>
        <ul className={styles.navBar.links}>
          { children && children.map((child, key) => <li key={key}>{child}</li>) }
        </ul>
        <ul className={styles.navBar.locales}>
          { locales && locales.map((configLocale, key) =>
            <li
              key={key}
              className={configLocale === locale ? 'active' : ''}
            ><button onClick={() => onLocaleClick(configLocale)}>{configLocale}</button></li>) }
        </ul>
      </div>
    );
  }
}
