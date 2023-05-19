import styles from "@/styles/logInModal.module.scss";

const ForgotPasswordForm = ({setToLogin}) => {
  return (
    <>
      <h2>Glömt lösenord?</h2>
      <form data-testid="passwordForm">
        <label className={styles.screenReader} htmlFor="email">email</label>
        <input id="email" name="email" required type="email" placeholder="email"></input>
        <button className={styles.continueButton} type="submit">Skicka lösenord</button>
      </form>
      <a onClick={setToLogin} className={styles.backLink}>Tillbaka till logga in</a>
    </>
  )
}

export default ForgotPasswordForm;