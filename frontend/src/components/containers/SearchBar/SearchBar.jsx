import React, { useState } from "react";
import styles from "./SearchBar.module.css";

import InputField from "../../sections/InputField/InputField";
import Button from "../../sections/Button/Button";
import { useField } from "../../hooks/useInputField";
import Logo from "../../../assets/Logo/on-drive-logo.png";

import changeIcon from "../../../assets/SearchBar/icon-change-dark.png";

const SearchBar = () => {
  const origin = useField({ type: "text" });
  const destination = useField({ type: "text" });

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
          <section className={styles.InputsContainer}>
            <h2 className={styles.TitleSearch}>
              Search your <b>Trip</b>
            </h2>
            <div className={styles.ContainerSearchInputs}>
              <div className={styles.Inputs}>
                <InputField
                  {...origin}
                  icon={"origin"}
                  name={"origin"}
                  placeholder={"Your location"}
                  theme={"dark"}
                />
                <InputField
                  {...destination}
                  icon={"destination"}
                  name={"destination"}
                  placeholder={"Your destination"}
                  theme={"dark"}
                />
              </div>
              <div className={styles.ChangeIcon}>
                <img src={changeIcon} alt="img-change-inputs" />
              </div>
            </div>
            
            <div className={styles.SearchBottom}>
              <Button
                title={"Search"}
                type={"primary"}
                size={"md"}
                width={"Full"}
                icon={"send"}
                iconPosition={"left"}
              />
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default SearchBar;
