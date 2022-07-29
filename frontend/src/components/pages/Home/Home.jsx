import React from "react";
import Banner from "../../containers/Banner/Banner";
/* import CardsGrid from '../../containers/CardsGrid/CardsGrid'; */
import CarouselTrips from "../../containers/CarouselTrips/CarouselTrips";
import NavBar from "../../containers/NavBar/NavBar";
import DriverAside from "../../sections/DriverAside/DriverAside";
import styles from "./Home.module.css";

import drivers from "../../sections/DriverAside/data";

const Home = () => {
  return (
    <section className={styles.MainContainer}>
      <NavBar />
      <main className={styles.Container}>
        <section className={styles.MidContainer}>
          <div className={styles.CarouselContainer}>
            <h2 className={styles.TitleCarousel}>
              Top <b>Trips</b>
            </h2>
            <CarouselTrips />
            <Banner />
          </div>
          <aside className={styles.Aside}>
            <h2 className={styles.TitleAside}>
              Top <b>Drivers</b>
            </h2>
            <section className={styles.Drivers}>
              {drivers.map((driver, index) => (
                <DriverAside
                  key={index}
                  position={index+1}
                  driverName={driver.name}
                  driverLastName={driver.lastName}
                  driverImage={driver.image}
                  driverRating={driver.rating}
                />
              ))}
              
            </section>
          </aside>
        </section>

        {/* <CardsGrid/> */}
      </main>
    </section>
  );
};

export default Home;
