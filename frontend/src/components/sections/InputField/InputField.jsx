import React from "react";
import styles from "./InputField.module.css";

import emailIcon from "../../../assets/Forms/email-icon.png";
import userIcon from "../../../assets/Forms/user-icon.png";
import passwordIcon from "../../../assets/Forms/password-icon.png";
import documentIcon from "../../../assets/Forms/document-icon.png";
import originIcon from "../../../assets/Forms/icon-origin.png";
import destinationIcon from "../../../assets/Forms/icon-destination.png";
import calendarIcon from "../../../assets/Forms/icon-calendar.png";

const InputField = ({ icon, value, label, name, placeholder, type, onChange, error, theme }) => {

  const icons = {
    email: emailIcon,
    password: passwordIcon,
    user: userIcon,
    document: documentIcon,
    origin: originIcon,
    destination: destinationIcon,
    calendar: calendarIcon,
  };

  return (
    <section className={styles.Container}>
      {label && <label className={styles.InputLabel} htmlFor="input-field">{label}</label>}
      <div className={styles.InputContainer}>
        {icon && <img src={icons[icon]} className={styles.IconInputField} alt="input-icon"/>}
        <input
          className={theme === "dark" ? styles.InputDark : styles.InputField}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
      {error && <span className={styles.ErrorInputField}>Escriba un email valido</span> }
    </section>
  );
};

export default InputField;
