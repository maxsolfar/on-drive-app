import React from 'react';
import Card from "../Card/Card";

import trips from "./data";
import styles from "./CardsGrid.module.css";

const CardsGrid = () => {
  return (
    <section className={styles.ContainerCards}>
      {trips.map((trip, index) => (
        <Card
        key={index}
        origin={trip.origin}
        destination={trip.destination}
        price={trip.price}
        date={trip.date}
        capacity={trip.capacity}
        image={trip.image}
        driverName={trip.driver.name}
        driverLastName={trip.driver.lastName}
        driverImage={trip.driver.image}
        driverRating={trip.driver.rating}
        />
      ))}
     
    </section>
  )
}

export default CardsGrid;