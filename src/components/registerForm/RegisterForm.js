import styles from "@/styles/logInModal.module.scss";

const RegisterForm = ({setToLogin,setToAnonymous}) => {
  return (
    <>
      <h3 onClick={setToLogin}>Logga in</h3>
      <h2>Registrera ny användare</h2>
      <form>
        <input placeholder="Användarnamn" type="text"></input>
        <input placeholder="Email" type="email"></input>
        <input placeholder="Lösenord" type="password"></input>
        <input placeholder="Repetera lösenord" type="password"></input>
        <button className={styles.continueButton}>REGISTRERA</button>
      </form>
      <a onClick={setToAnonymous} className={styles.backLink}>Fortsätt utan att logga in</a>
    </>
  );
};

export default RegisterForm;
