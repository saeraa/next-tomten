import styles from "@/styles/logInModal.module.scss";

const RegisterForm = ({setToLogin,setToAnonymous}) => {
  return (
    <>
      <a onClick={setToLogin} className={styles.logInModalLink}>Logga in</a>
      <h2>Registrera ny användare</h2>
      <form data-testid="registerForm">
        <label className={styles.screenReader} htmlFor="user">Användarnamn</label>
        <input id="user" name="user" required placeholder="Användarnamn" type="text"/>
        <label className={styles.screenReader} htmlFor="email">Email</label>
        <input id="email" name="email" required placeholder="Email" type="email"/>
        <label className={styles.screenReader} htmlFor="password">Lösenord</label>
        <input id="password" name="password" required placeholder="Lösenord" type="password"/>
        <label className={styles.screenReader} htmlFor="repeatPassword">Repetera lösenord</label>
        <input id="repeatPassword" name="repeatPassword" required placeholder="Repetera lösenord" type="password"/>
        <button className={styles.continueButton}>Registrera</button>
      </form>
      <a onClick={setToAnonymous} className={styles.backLink}>Fortsätt utan att logga in</a>
    </>
  );
};

export default RegisterForm;
