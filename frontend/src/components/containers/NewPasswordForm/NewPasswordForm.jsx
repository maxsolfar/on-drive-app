import React from 'react';
import styles from "./NewPasswordForm.module.css";

import InputField from '../../sections/InputField/InputField';
import Button from '../../sections/Button/Button';

import { useField } from '../../hooks/useInputField';

const NewPasswordForm = ({UserEmail}) => {

  const password = useField({type: "password"});
  const confirmPassword = useField({type: "password"});
  
  function onSubmit(e){
    /* Function Submit del Botón, obtenemos los values de nuestros inputs y los añadimos al objeto */
    e.preventDefault();
    const Submit = {
      password: password.value,
      confirmPassword: confirmPassword.value 
    }
    console.log(Submit);
  }
  
  return (
    
    <section className={styles.NewPasswordFormContainer}>
      <h2 className={styles.TitleNewPassword}>New Password</h2>
      <div className={styles.UserName}>
        <span>username:</span>
        <span>{UserEmail}</span>
      </div>
      <InputField
        {...password}
        icon={"password"}
        label={"New Password"}
        name={"password"}
        placeholder={"Type your new password"}
      />
      <InputField
        {...confirmPassword}
        icon={"password"}
        label={"Confirm your Password"}
        name={"password"}
        placeholder={"Type your new password"}
      />
      <Button title={"CONFIRM"} type={"primary"} size={"lg"} width={"Full"} onClick={(e)=>onSubmit(e)}/>

    </section>
  )
}

export default NewPasswordForm;