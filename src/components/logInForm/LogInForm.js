import styles from "@/styles/logInModal.module.scss";
import loginUser from "@/utils/loginUser";
import { useRef } from "react";

const LogInForm = ({
  setToRegister,
  setToForgotPassword,
  setToAnonymous,
  setIsLoggedIn,
  setDisplayPopup,
  setPopupTitle,
  setPopupMessage
}) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const clickHandler = async (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    let isLoggedIn = await loginUser(username, password);
    if (isLoggedIn == true) {
      setIsLoggedIn(true);
      setPopupTitle("Nu är du inloggad");
      setPopupMessage("Välkommen tillbaka, " + username);
    } else {
      //kommer in hit ifall användaren inte finns eller lösenordet är fel.
      setPopupTitle("Woops! Något gick fel!");
      setPopupMessage(isLoggedIn);
    }
    setDisplayPopup(true);
  };
  return (
    <>
      <h2>Logga in</h2>
      <a onClick={setToRegister} className={styles.logInModalLink}>
        Registrera ny användare
      </a>
      <form data-testid="logInForm">
        <label className={styles.screenReader} htmlFor="user">
          Användarnamn
        </label>
        <input
          ref={usernameRef}
          id="user"
          name="user"
          required
          placeholder="Användarnamn"
          type="text"
        />
        <label className={styles.screenReader} htmlFor="password">
          Lösenord
        </label>
        <input
          ref={passwordRef}
          id="password"
          name="password"
          required
          placeholder="Lösenord"
          type="password"
        />
        <a onClick={setToForgotPassword} className={styles.forgotPasswordLink}>
          Glömt lösenord?
        </a>
        <button
          data-testid="logInButton"
          onClick={clickHandler}
          className={styles.continueButton}
          type="submit"
        >
          Logga in
        </button>
      </form>
      <a onClick={setToAnonymous} className={styles.backLink}>
        Fortsätt utan att logga in
      </a>
    </>
  );
};

export default LogInForm;
