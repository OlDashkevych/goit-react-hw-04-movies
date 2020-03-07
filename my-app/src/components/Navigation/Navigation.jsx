import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import routes from '../../routes/routes';

const Navigation = () => (
  <ul className={styles.navList}>
    <li className={styles.navListItem}>
      <NavLink
        exact
        to={routes.HOME_PAGE.path}
        className={styles.navLink}
        activeClassName={styles.navLinkActive}
      >
        Home
      </NavLink>
    </li>
    <li className={styles.navListItem}>
      <NavLink
        to={routes.MOVIES_PAGE.path}
        className={styles.navLink}
        activeClassName={styles.navLinkActive}
      >
        About Us
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
