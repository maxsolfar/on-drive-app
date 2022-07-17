import React from 'react';
import styles from "./Card.module.css";

import Button from "../../sections/Button/Button";

import iconStar from "../../../assets/Card/icon-star.png";
import iconStarDark from "../../../assets/Card/icon-start-dark.png";
import iconCalendar from "../../../assets/Card/icon-calendar.png";
import iconRoad from "../../../assets/Card/icon-road-dark.png";

const Card = ({origin, destination, price, date, capacity, image, driverName, driverLastName, driverImage, driverRating}) => {
  return (
    <article className={styles.CardContainer}>
      <section className={styles.CarouselCard}>
        <img className={styles.ImgCarousel} src={image} alt="card-img-carousel" />
        <span className={styles.DateCard}>{date}<img src={iconCalendar} alt="alt-calendar-icon" /></span>
        <span className={styles.Availability}>{capacity} Slots Available</span>
      </section> 
      <section className={styles.DestinationCard}>
        <img className={styles.IconRoad} src={iconRoad} alt="alt-road-icon" />
        <div className={styles.TitlesCard}>
          <h3 className={styles.OriginTitle}><b>From: </b>{origin}</h3>
          <h3 className={styles.DestinationTitle}><b>To: </b>{destination}</h3>
        </div>
      </section>
      <section className={styles.DetailsCard}>
        <div className={styles.ContainerPrice}>
          <span className={styles.TitlePrice}>Price:</span>
          <h3 className={styles.Price}>${price}.00</h3>
          <span className={styles.TextPrice}>* price may change</span>
        </div>
        <Button title={"See Details"} type={"secondary"} size={"sm"} width={"Full"} icon={"pin"} iconPosition={"right"}/>
      </section>
      <footer className={styles.FooterCard}>
        <img className={styles.AvatarImg} src={driverImage} alt="alt-img-avatar" />
        <hr className={styles.Separator}/>
        <section className={styles.DriverInformation}>
          <span className={styles.NameDriver}>Driver: <b>{driverName} {driverLastName}</b></span>
          <div className={styles.ReviewContainer}>
            <div>
              <img className={styles.IconStar} src={iconStar} alt="alt-star-icon" />
              <img className={styles.IconStar} src={iconStar} alt="alt-star-icon" />
              <img className={styles.IconStar} src={iconStar} alt="alt-star-icon" />
              <img className={styles.IconStar} src={iconStar} alt="alt-star-icon" />
              <img className={styles.IconStar} src={iconStarDark} alt="alt-star-icon" />
            </div>
            
            <span className={styles.ReviewPoints}>{driverRating} (108)</span>
          </div>
        </section>
      </footer>
    </article>
  )
}

export default Card;