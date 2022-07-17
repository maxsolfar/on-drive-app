import React from 'react';
import CardsGrid from '../../containers/CardsGrid/CardsGrid';
import NavBar from '../../containers/NavBar/NavBar';
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.MainContainer}>
      <NavBar/>
      <CardsGrid/>
    </div>
  )
}

export default Home;