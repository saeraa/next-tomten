import styles from "@/styles/logInModal.module.scss";
import { useRef, useContext } from "react";
import { LoggedInContext } from "@/pages/_app";

const ForgotPasswordForm = ({ setToLogin }) => {
  const emailRef = useRef(null);
  const { setDisplayPopup, setPopupMessage, setPopupTitle } =
    useContext(LoggedInContext);

  const recoverPassword = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const resp = await fetch("/api/recover", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email
      })
    });
    if (resp.status == 200) {
      setPopupTitle("Lösenordet återställt!");
      setToLogin();
    } else {
      setPopupTitle("Något gick fel!");
    }
    setPopupMessage(await resp.json());
    setDisplayPopup(true);
  };
  return (
    <>
      <h2>Glömt lösenord?</h2>
      <form data-testid="passwordForm">
        <label className={styles.screenReader} htmlFor="email">
          email
        </label>
        <input
          ref={emailRef}
          id="email"
          name="email"
          required
          type="email"
          placeholder="email"
        ></input>
        <button
          onClick={recoverPassword}
          className={styles.continueButton}
          type="submit"
        >
          Skicka lösenord
        </button>
      </form>
      <a onClick={setToLogin} className={styles.backLink}>
        Tillbaka till logga in
      </a>
    </>
  );
};

export default ForgotPasswordForm;
