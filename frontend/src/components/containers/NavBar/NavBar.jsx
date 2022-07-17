import React from 'react';
import {Link} from "react-router-dom";
import styles from "./NavBar.module.css";

import iconHome from "../../../assets/NavBar/icon-home.svg";
import iconSearch from "../../../assets/NavBar/icon-search.svg";
import iconCart from "../../../assets/NavBar/icon-cart.svg";
import iconSettings from "../../../assets/NavBar/icon-user.svg";
import shortLogo from "../../../assets/Logo/on.png";
import notifications from "../../../assets/NavBar/icon-bell.png";
import avatarImg from "../../../assets/Card/avatar-img.jpg";

const NavBar = () => {
  return (
    <nav className={styles.ContainerNavBar}>
      <img src={shortLogo} className={styles.Logo} alt="logo-on-drive" />
      <ul className={styles.NavBar}>
        <li className={styles.NavItem}><Link to={"/"}><img src={iconHome} alt="icon-navbar-img" /></Link></li>
        <li className={styles.NavItem}><Link to={"/search"}><img src={iconSearch} alt="icon-navbar-img" /></Link></li>
        <li className={styles.NavItem}><Link to={"/cart"}><img src={iconCart} alt="icon-navbar-img" /></Link></li>
        <li className={styles.NavItem}><Link to={"/profile"}><img src={iconSettings} alt="icon-navbar-img" /></Link></li>
      </ul>
      <section className={styles.ProfileIcons}>
        <Link to={"/"}><img className={styles.Notifications} src={notifications} alt="icon-notification-img" /><span className={styles.NotificationsNumber}>3</span></Link>
        <Link to={"/profile"}><img className={styles.Avatar} src={avatarImg} alt="avatar-img" /></Link>
      </section>
    </nav>
  )
}

export default NavBar;