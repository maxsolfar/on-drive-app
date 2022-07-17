import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useField } from '../../hooks/useInputField';
import styles from "./RecoveryPasswordForm.module.css";

import InputField from '../../sections/InputField/InputField';
import Button from '../../sections/Button/Button';
;

const RecoveryPasswordForm = () => {
  const navigate = useNavigate();

  const email = useField({type: "text"});
  
  function onSubmit(e){
    /* Function Submit del Botón, obtenemos los values de nuestros inputs y los añadimos al objeto */
    e.preventDefault();
    const Submit = {
      email: email.value,
    }
    console.log(Submit);
  }

  /* Funciones de prueba, solo para comprobar las rutas*/
  const registerPage = () => {
    onSubmit();
    navigate.push("/register");
  }

  const newPasswordPage = () => {
    navigate.push("/new-password");
  }

  return (
    <section className={styles.RecoveryFormContainer}>
      <h2 className={styles.TitleRecovery}>Recovery Password</h2>
      <InputField
        {...email}
        icon={"email"}
        label={"Email"}
        name={"email"}
        placeholder={"Type your email"}
      />
      <span className={styles.BackHome}>I want <Link to='/login'>back to Home</Link></span>
      <Button title={"SEND"} type={"primary"} size={"lg"} width={"Full"} onClick={newPasswordPage}/>
      <div className={styles.DividerText}>
        <span href="/">Don´t have an account?</span>
      </div>
      <Button title={"REGISTER"} type={"secondary"} size={"md"} width={"SemiFull"} onClick={registerPage}/>
    </section>
  )
}

export default RecoveryPasswordForm;