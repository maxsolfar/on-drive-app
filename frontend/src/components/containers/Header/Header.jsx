import React from 'react';
import styles from "./Header.module.css";

import vectorCar from "../../../assets/Header/car-vector-header.png";
import SearchBarHome from "../../sections/SearchBarHome/SearchBarHome";

const Header = () => {
  return (
    <section className={styles.HeaderContainer}>
      <div className={styles.TextContainer}>
        <h2 className={styles.TitleHeader}>Travel that moves you</h2>
        <span className={styles.SubtitleHeader}>Discover how to get anywhere by onDrive</span>
      </div>
      <div className={styles.SearchBarContainer}>
        <SearchBarHome styleBar={"horizontal"} />
      </div>
      
      <div className={styles.Background}></div>
      <img className={styles.HeaderImg} src={vectorCar} alt="img-vector-header" />
    </section>
  )
}

export default Header;