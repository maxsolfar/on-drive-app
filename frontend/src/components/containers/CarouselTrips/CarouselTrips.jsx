import React from "react";
import Card from "../Card/Card";
import trips from "../CardsGrid/data";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import SwiperCore, { Pagination,Autoplay} from "swiper";
import styles from "./CarouselTrips.module.css";
// Import Swiper styles
import "swiper/css";
import "./CarouselTrips.css"

const CarouselTrips = () => {
  SwiperCore.use([Autoplay])
  return (
    <section className={styles.ContainerSlider}>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2200,
          disableOnInteraction: false
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1600: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        
      {trips.map((trip, index) => (
        <SwiperSlide key={index}>
        <Card
        
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
        </SwiperSlide>
      ))}
        
      </Swiper>
    </section>
  );
};

export default CarouselTrips;
