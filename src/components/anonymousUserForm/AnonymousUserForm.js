import styles from "@/styles/logInModal.module.scss";

const AnonymousUserForm = ({setToLogin}) => {
  return (
    <>
    <h2>Boka utan att logga in</h2>
    <form>
        <input placeholder="Emailadress" type="email"></input>
        <button className={styles.continueButton} type="submit">GÅ VIDARE</button>
    </form>
    <a onClick={setToLogin} className={styles.backLink}>Logga in</a>
    </>
  )
}

export default AnonymousUserForm