import Link from "next/link";
import React from "react";
import styles from "@/styles/logInModal.module.scss";

const LogInForm = ({setToRegister, setToForgotPassword, setToAnonymous}) => {
  return (
    <>
      <h2>Logga in</h2>
      <h3 onClick={setToRegister} className={styles.logInModalLink}>Registrera ny användare</h3>
      <form>
        <input required placeholder="Användarnamn" type="text"></input>
        <input required placeholder="Lösenord" type="password"></input>
        <a onClick={setToForgotPassword} className={styles.forgotPasswordLink}>Glömt lösenord?</a>
        <button data-testid="logInButton" className={styles.continueButton} type="submit">LOGGA IN</button>
      </form>
      <a onClick={setToAnonymous} className={styles.backLink}>Fortsätt utan att logga in</a>
    </>
  );
};

export default LogInForm;
