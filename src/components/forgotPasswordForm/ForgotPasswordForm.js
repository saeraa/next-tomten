import styles from "@/styles/logInModal.module.scss";

const ForgotPasswordForm = ({setToLogin}) => {
  return (
    <>
      <h2>Glömt lösenord?</h2>
      <form>
        <input type="email" placeholder="email"></input>
        <button className={styles.continueButton} type="submit">SKICKA LÖSENORD</button>
      </form>
      <a onClick={setToLogin} className={styles.backLink}>Tillbaka till logga in</a>
    </>
  )
}

export default ForgotPasswordForm;