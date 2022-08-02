import React from 'react';
import styles from "./Header.module.css";

import vectorCar from "../../../assets/Header/car-vector-header.png";

const Header = () => {
  return (
    <section className={styles.HeaderContainer}>
      <h2 className={styles.TitleHeader}>Travel that moves you</h2>
      <span className={styles.SubtitleHeader}>Discover how to get anywhere by onDrive</span>
      <img className={styles.HeaderImg} src={vectorCar} alt="img-vector-header" />
    </section>
  )
}

export default Header;