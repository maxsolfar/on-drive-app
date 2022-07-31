import React from "react";
import InputField from "../../sections/InputField/InputField";
import Button from "../../sections/Button/Button";

import { useField } from '../../hooks/useInputField';
import styles from "./RegisterForm.module.css";

const RegisterForm = () => {
 
  const email = useField({type: "text"});
  const name = useField({type: "text"});
  const password = useField({type: "password"});
  const confirmPassword = useField({type: "password"});

  function onSubmit(e){
    /* Function Submit del Botón, obtenemos los values de nuestros inputs y los añadimos al objeto */
    e.preventDefault();
    const Submit = {
      email: email.value,
      name: name.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    }
    console.log(Submit);
  }

  return (
    <section className={styles.RegisterFormContainer}>
      <h2 className={styles.TitleRegister}>Register</h2>
      <InputField
        {...email}
        icon={"email"}
        label={"Email"}
        name={"email"}
        placeholder={"Type your email"}
      />

      <InputField
        {...name}
        icon={"user"}
        label={"Name"}
        name={"name"}
        placeholder={"Type your name"}
      />

      <InputField
        {...password}
        icon={"password"}
        label={"Password"}
        name={"password"}
        placeholder={"Type your password"}
      />

      <InputField
        {...confirmPassword}
        icon={"password"}
        label={"Confirm your Password"}
        name={"confirmPassword"}
        placeholder={"Type your password again"}
      />
 
      <label className={styles.CheckBox} htmlFor="terms">
        <input type="checkbox" value="Accepted" name="terms" />
        I accept the terms and conditions
      </label>

      <Button title={"REGISTER"} type={"primary"} size={"lg"} width={"Full"} onClick={onSubmit}/>
      <div className={styles.DividerText}>
        <hr/>
        <span href="/">or register with</span>
        <hr/>
      </div>
      <Button title={"Register with Google"} type={"secondary"} size={"md"} width={"SemiFull"} icon={"google"} iconPosition={"left"}/>

    </section>
  );
};

export default RegisterForm;
