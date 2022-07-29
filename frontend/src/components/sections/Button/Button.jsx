import React from "react";
import styles from "./Button.module.css";

import iconGoogle from "../../../assets/Buttons/icon-google.png";
import iconGoogleDark from "../../../assets/Buttons/icon-google-dark.png";
import iconArrowRight from "../../../assets/Buttons/icon-arrow-right.png";
import iconArrowRightDark from "../../../assets/Buttons/icon-arrow-right-dark.png";
import iconPin from "../../../assets/Buttons/icon-pin.png";
import iconPinDark from "../../../assets/Buttons/icon-pin-dark.png";
import iconRight from "../../../assets/Buttons/icon-right.png";
import iconRightDark from "../../../assets/Buttons/icon-right-dark.png";

const Button = ({ title, type, size, width, onClick, icon, iconPosition }) => {
  const buttonType = {
    primary: styles.PrimaryButton,
    secondary: styles.SecondaryButton,
    accent: styles.AccentButton,
  };

  const buttonSize = {
    sm: styles.SmallButton,
    md: styles.MidButton,
    lg: styles.LargeButton,
  };

  const icons = {
    google: iconGoogle,
    googleDark: iconGoogleDark,
    arrowRight: iconArrowRight,
    arrowRightDark: iconArrowRightDark,
    pin: iconPin,
    pinDark: iconPinDark,
    right: iconRight,
    rightDark: iconRightDark,
  };

  return (
    <section className={styles[width]}>
      <button
        className={`${styles.Button} ${buttonType[type]} ${buttonSize[size]}`}
        onClick={onClick}
      >
        {icon && iconPosition === "left" &&
          <img
            className={styles.ButtonIcon}
            src={
              type === "secondary" || type === "accent"
              ?  icons[icon]
              : icons[`${icon}Dark`]
            }
            alt="icon-button"
          />
        }
        {title}
        {icon && iconPosition === "right" &&
          <img
            className={styles.ButtonIcon}
            src={
              type === "secondary" || type === "accent"
              ?  icons[icon]
              : icons[`${icon}Dark`]
            }
            alt="icon-button"
          />
        }
      </button>
    </section>
  );
};

export default Button;
