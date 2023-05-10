import styles from "@/styles/logInModal.module.scss";
import registerUser from "@/utils/registerUser";

const RegisterForm = ({
  setToLogin,
  setToAnonymous,
  setDisplayPopup,
  setPopupTitle,
  setPopupMessage
}) => {
  const handleClick = async (e) => {
    e.preventDefault();
    const username = document.querySelector("#user").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    let gotRegistered = await registerUser(username, email, password);
    if (gotRegistered == true) {
      setPopupTitle("Ny användare skapad");
      setPopupMessage("Välkommen till gänget, " + username);
      setToLogin();
    } else {
      setPopupTitle("Woops, något gick fel");
      setPopupMessage(gotRegistered);
      //Här kommer meddelandet om upptaget användarnamn eller mail
    }
    setDisplayPopup(true);
  };

  return (
    <>
      <a onClick={setToLogin} className={styles.logInModalLink}>
        Logga in
      </a>
      <h2>Registrera ny användare</h2>
      <form data-testid="registerForm">
        <label className={styles.screenReader} htmlFor="user">
          Användarnamn
        </label>
        <input
          id="user"
          name="user"
          required
          placeholder="Användarnamn"
          type="text"
        />
        <label className={styles.screenReader} htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          required
          placeholder="Email"
          type="email"
        />
        <label className={styles.screenReader} htmlFor="password">
          Lösenord
        </label>
        <input
          id="password"
          name="password"
          required
          placeholder="Lösenord"
          type="password"
        />
        <label className={styles.screenReader} htmlFor="repeatPassword">
          Repetera lösenord
        </label>
        <input
          id="repeatPassword"
          name="repeatPassword"
          required
          placeholder="Repetera lösenord"
          type="password"
        />
        <button
          onClick={(e) => handleClick(e)}
          className={styles.continueButton}
        >
          Registrera
        </button>
      </form>
      <a onClick={setToAnonymous} className={styles.backLink}>
        Fortsätt utan att logga in
      </a>
    </>
  );
};

export default RegisterForm;
