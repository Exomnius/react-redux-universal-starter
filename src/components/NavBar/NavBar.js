import React, { PropTypes } from 'react';


export default function NavBar({ children, locales, locale, onLocaleClick, logo }) {
  const styles = require('./NavBar.scss');

  return (
    <div className={styles.navBar}>
      { logo && <img src={logo} alt="" title="" className={styles.logo}/> }

      <ul className={styles.links}>
        { children && children.map((child, key) => <li key={key}>{child}</li>) }
      </ul>
      <ul className={styles.locales}>
        { locales && locales.map((configLocale, key) =>
          <li key={key} className={configLocale === locale ? 'active' : ''}>
            <button onClick={() => onLocaleClick(configLocale)}>{configLocale}</button>
          </li>) }
      </ul>
    </div>
  );
}

NavBar.propTypes = {
  children: PropTypes.array.isRequired,
  locales: PropTypes.array.isRequired,
  locale: PropTypes.string.isRequired,
  onLocaleClick: PropTypes.func.isRequired,
  logo: PropTypes.string
};
