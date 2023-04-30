import Link from "next/link";
import React from "react";
import styles from "@/styles/logInModal.module.scss";

const LogInForm = ({setToRegister, setToForgotPassword, setToAnonymous}) => {
  return (
    <>
      <h2>Logga in</h2>
      <h3 onClick={setToRegister}>Registrera ny användare</h3>
      <form>
        <input type="text"></input>
        <input type="password"></input>
        <a onClick={setToForgotPassword} className={styles.forgotPasswordLink}>Glömt lösenord?</a>
        <button className={styles.logInButton} type="submit">Logga in</button>
      </form>
      <a onClick={setToAnonymous} className={styles.continueLink}>Fortsätt utan att logga in</a>
    </>
  );
};

export default LogInForm;
