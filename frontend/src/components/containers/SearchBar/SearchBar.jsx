import React, { useState } from "react";
import styles from "./SearchBar.module.css";

import Logo from "../../../assets/Logo/on-drive-logo.png";

import SearchBarHome from "../../sections/SearchBarHome/SearchBarHome";

const SearchBar = () => {

  const [openToggle, setOpenToggle] = useState(false);

  const actionToggle = () => {
    setOpenToggle(!openToggle);
    console.log(openToggle);
  };

  return (
    <>
      <section className={styles.TopBar}>
        <img className={styles.Logo} src={Logo} alt="search-vector-img" />
        <button
          className={
            openToggle ? `${styles.ButtonClose}` : `${styles.ButtonOpen}`
          }
          onClick={actionToggle}
        >
          {/* <img src={openButton} alt="openButtonImg" /> */}
        </button>
      </section>
      <section className={styles.SearchBarContainer}>
        <section
          className={
            !openToggle ? `${styles.SearchBar}` : `${styles.SearchBarClose}`
          }
        >
          <SearchBarHome styleBar={"vertical"}/>
          
        </section>
      </section>
    </>
  );
};

export default SearchBar;
