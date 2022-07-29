import React from 'react';
import Button from '../../sections/Button/Button';

import bannerImg from "../../../assets/Banner/img-banner.png";
import styles from "./Banner.module.css";
const Banner = () => {
  return (
    <section className={styles.ContainerBanner}>
      <div className={styles.TextContainer}>
        <h2 className={styles.TitleBanner}>Be an On<b>Driver</b></h2>
        <p className={styles.TextBanner}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
        <div className={styles.ButtonContainer}>
          <Button title={"Join Us"} type={"accent"} size={"sm"} width={"Full"} icon={"right"} iconPosition={"right"}/>
        </div>
      </div>
      <img className={styles.ImgBanner} src={bannerImg} alt="alt-img-banner" />
      
    </section>
  )
}

export default Banner;