import styles from "@/styles/logInModal.module.scss";

const LogInForm = ({setToRegister, setToForgotPassword, setToAnonymous}) => {
  return (
    <>
      <h2>Logga in</h2>
      <a onClick={setToRegister} className={styles.logInModalLink}>Registrera ny användare</a>
      <form data-testid="logInForm">
        <label className={styles.screenReader} htmlFor="user">Användarnamn</label>
        <input id="user" name="user" required placeholder="Användarnamn" type="text"/>
        <label className={styles.screenReader} htmlFor="password">Lösenord</label>
        <input id="password" name="password" required placeholder="Lösenord" type="password"/>
        <a onClick={setToForgotPassword} className={styles.forgotPasswordLink}>Glömt lösenord?</a>
        <button data-testid="logInButton" className={styles.continueButton} type="submit">Logga in</button>
      </form>
      <a onClick={setToAnonymous} className={styles.backLink}>Fortsätt utan att logga in</a>
    </>
  );
};

export default LogInForm;
