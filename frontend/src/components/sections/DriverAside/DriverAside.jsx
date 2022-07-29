import React from "react";
import styles from "./DriverAside.module.css";

import iconStar from "../../../assets/Card/icon-star.png";
import iconStarDark from "../../../assets/Card/icon-start-dark.png";

const DriverAside = ({driverName, driverLastName, driverImage, driverRating, position}) => {
  return (
    <>
    <article className={styles.DriversContainer}>


      <div className={styles.ContainerAvatar}>
        <img className={styles.AvatarImg} src={driverImage} alt="alt-img-avatar" />
        <span className={styles.Position}>{position}</span>
      </div>
      <div className={styles.DriverInfo}>
        <span className={styles.NameDriver}>
            {driverName} {driverLastName}
        </span>
        <div className={styles.ReviewContainer}>
          <div className={styles.StarsContainer}>
            <img className={styles.IconStar} src={iconStar} alt="alt-star-icon" />
            <img className={styles.IconStar} src={iconStar} alt="alt-star-icon" />
            <img className={styles.IconStar} src={iconStar} alt="alt-star-icon" />
            <img className={styles.IconStar} src={iconStar} alt="alt-star-icon" />
            <img
              className={styles.IconStar}
              src={iconStarDark}
              alt="alt-star-icon"
            />
          </div>
          <span className={styles.ReviewPoints}>{driverRating} (108)</span>
        </div>
      </div>
      
    </article>
    <hr className={styles.Separator}/>
    </>
  );
};

export default DriverAside;
