import React from 'react';
import styles from "./LoginForm.module.css";
import { useField } from '../../hooks/useInputField';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import InputField from '../../sections/InputField/InputField';
import Button from '../../sections/Button/Button';


const LoginForm = () => {
  const navigate = useNavigate();
  const email = useField({type: "text"});
  const password = useField({type: "password"});
  
  function onSubmit(e){
    /* Function Submit del Botón, obtenemos los values de nuestros inputs y los añadimos al objeto */
    e.preventDefault();
    const Submit = {
      email: email.value,
      password: password.value 
    }
    navigate("/");
    console.log(Submit);
  }

  return (
    <section className={styles.LoginFormContainer}>
      <h2 className={styles.TitleLogin}>Sign In</h2>
      <InputField 
        {...email}
        icon={"email"}
        label={"Username or Email"}
        name={"email"}
        placeholder={"Type your email..."}
      />
      <InputField 
        {...password}
        icon={"password"}
        label={"Password"}
        name={"password"}
        placeholder={"Type your password"}
      />
      <Link to='/recovery-password' className={styles.ForgotPassword} >¿Forgot your password?</Link>
      <Button title={"SIGN IN"} type={"primary"} size={"lg"} width={"Full"} onClick={onSubmit}/>
      <div className={styles.DividerText}>
        <hr/>
        <span href="/">or sign in with</span>
        <hr/>
      </div>
      <Button title={"Sign In with Google"} type={"secondary"} size={"md"} width={"SemiFull"} icon={"google"} iconPosition={"left"}/>
      <span className={styles.NewAccount}>Not registered ?, <Link to='/register'>Create an Account</Link></span>

    </section>
  )
}

export default LoginForm;