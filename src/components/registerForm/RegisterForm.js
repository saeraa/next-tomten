import styles from "@/styles/logInModal.module.scss";

const RegisterForm = ({setToLogin,setToAnonymous}) => {
  return (
    <>
      <h3 onClick={setToLogin}>Logga in</h3>
      <h2>Registrera ny användare</h2>
      <form>
        <input required placeholder="Användarnamn" type="text"></input>
        <input required placeholder="Email" type="email"></input>
        <input required placeholder="Lösenord" type="password"></input>
        <input required placeholder="Repetera lösenord" type="password"></input>
        <button className={styles.continueButton}>REGISTRERA</button>
      </form>
      <a onClick={setToAnonymous} className={styles.backLink}>Fortsätt utan att logga in</a>
    </>
  );
};

export default RegisterForm;
