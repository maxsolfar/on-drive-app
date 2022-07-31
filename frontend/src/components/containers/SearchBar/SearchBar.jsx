import React from "react";
import styles from "./SearchBar.module.css";

import InputField from "../../sections/InputField/InputField";
import Button from "../../sections/Button/Button";
import { useField } from '../../hooks/useInputField';
import Logo from "../../../assets/Logo/on-drive-logo.png";

const SearchBar = () => {

  const origin = useField({type: "text"});
  const destination = useField({type: "text"});
  const calendar = useField({type: "text"});
  
  return (
    <section className={styles.SearchBarContainer}>
      <img className={styles.Logo} src={Logo} alt="search-vector-img" />
      <div className={styles.ContainerImg}>
        <h2 className={styles.TitleSearch}>
          Search your <b>Trip</b>
        </h2>
      </div>
      <div className={styles.InputsContainer}>
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
        <div className={styles.SearchBottom}>
          <InputField
            {...calendar}
            icon={"calendar"}
            name={"date"}
            placeholder={"MM/DD/YYYY"}
            theme={"dark"}
          />
          <div className={styles.ButtonSearch}>
            <Button type={"primary"} size={"md"} width={"Full"} icon={"arrowRight"} iconPosition={"left"}/>
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default SearchBar;
