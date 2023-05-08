import styles from "@/styles/logInModal.module.scss";

const AnonymousUserForm = ({setToLogin}) => {
  return (
    <>
    <h2>Boka utan att logga in</h2>
    <form data-testid="anonymousForm">
        <label className={styles.screenReader} htmlFor="email">Emailadress</label>
        <input id="email" name="email" required placeholder="Emailadress" type="email"/>
        <button className={styles.continueButton} type="submit">Gå vidare</button>
    </form>
    <a onClick={setToLogin} className={styles.backLink}>Logga in</a>
    </>
  )
}

export default AnonymousUserForm