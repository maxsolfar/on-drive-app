import React from 'react';
import LoginForm from '../../containers/LoginForm/LoginForm';

import styles from "./Login.module.css";
import logo from "../../../assets/Logo/on-drive-logo.png";
import imageTop from "../../../assets/Login/vector-login.png";

const Login = () => {
  return (
    <section className={styles.MainContainer}>
      <section className={styles.ContainerLogin}>
        <div className={styles.ImageContainer}>
          <img className={styles.Image} src={imageTop} alt="img-top-login" />
          <img className={styles.LogoDesktop} src={logo} alt="logo-onDrive" />
          <p className={styles.Text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
        </div>
       {/*  <img className={styles.Logo} src={logo} alt="logo-onDrive" /> */}
      <LoginForm />
      </section>
    </section>
  )
}

export default Login;
