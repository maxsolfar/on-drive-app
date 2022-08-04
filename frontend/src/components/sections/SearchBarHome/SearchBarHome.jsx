import React from "react";
import styles from "./SearchBarHome.module.css";

import InputField from "../../sections/InputField/InputField";
import Button from "../../sections/Button/Button";
import { useField } from "../../hooks/useInputField";

import changeIcon from "../../../assets/SearchBar/icon-change-dark.png";

const SearchBarHome = ({ styleBar }) => {
  const origin = useField({ type: "text" });
  const destination = useField({ type: "text" });

  return (
    <section className={styles.InputsContainer}>
      <h2 className={styles.TitleSearch}>
        Search your <b>Trip</b>
      </h2>
      <div className={styles.ContainerSearchInputs}>
        <div
          className={
            styleBar === "vertical" ? styles.Inputs : styles.InputsHorizontal
          }
        >
          <InputField
            {...origin}
            icon={"origin"}
            name={"origin"}
            placeholder={"Your location"}
            theme={"dark"}
          />
          {styleBar === "horizontal" && (
            <div className={styles.ChangeIcon}>
              <img src={changeIcon} alt="img-change-inputs" />
            </div>
          )}
          <InputField
            {...destination}
            icon={"destination"}
            name={"destination"}
            placeholder={"Your destination"}
            theme={"dark"}
          />
          {styleBar === "horizontal" && (
            <div className={styles.SearchBottom}>
              <Button
                type={"primary"}
                size={"md"}
                width={"Small"}
                icon={"send"}
                iconPosition={"left"}
              />
            </div>
          )}
        </div>
        {styleBar === "vertical" && (
          <div className={styles.ChangeIcon}>
            <img src={changeIcon} alt="img-change-inputs" />
          </div>
        )}
      </div>

      {styleBar === "vertical" && (
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
      )}
    </section>
  );
};

export default SearchBarHome;
