import React from "react";
import Banner from "../../containers/Banner/Banner";
import CardsGrid from '../../containers/CardsGrid/CardsGrid';
import CarouselTrips from "../../containers/CarouselTrips/CarouselTrips";
import Loader from "../../sections/Loader/Loader";
/* import NavBar from "../../containers/NavBar/NavBar"; */
import DriverAside from "../../sections/DriverAside/DriverAside";
import styles from "./Home.module.css";

import drivers from "../../sections/DriverAside/data";
import SearchBar from "../../containers/SearchBar/SearchBar";
import NewNavBar from "../../containers/NewNavBar/NewNavBar";
import Header from "../../containers/Header/Header";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    }, 3500)
  },[])
  return (
    <>
    {loading ? <Loader/> :
    <section className={styles.MainContainer}>
      <NewNavBar />
      <SearchBar />
      
      <main className={styles.Container}>
        <div className={styles.ContainerHeader}>
          <Header />
        </div>
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
        <section className={styles.BottomContainer}>
          <h2 className={styles.TitleWeekend}>
              Top <b>Trips</b> for the Weekend
          </h2>
          <CardsGrid/>
        </section>
      </main>
    </section>}
    </>
  );
};

export default Home;
