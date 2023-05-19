import styles from "@/styles/logInModal.module.scss";
import continueAsGuest from "@/utils/anonymousUser";
import { useRef } from "react";

const AnonymousUserForm = ({
  setToLogin,
  setDisplayPopup,
  setPopupTitle,
  setPopupMessage
}) => {
  const emailRef = useRef(null);

  const handleClick = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    if (await continueAsGuest(emailRef.current.value)) {
      setPopupTitle("Du bokar biljetter med e-postaddressen, " + email);
      setPopupMessage(
        "Till nästa gång kan du fundera på att skapa ett konto hos oss istället. Som medlem sparar du tid vid bokning samt får exklusiva nyheter och erbjudanden skickade till din e-post."
      );
    } else {
      setPopupTitle("Något gick fel.");
      setPopupMessage("Kom tillbaka lite senare och testa igen.");
    }
    setToLogin();
    setDisplayPopup(true);

    /*
    This needs to be changed, but for simplicty and since its a school project i used verify with exposing the key.
    const decoded = JWT.verify(getCookie("session"), "1234abcd");
    const email = decoded.email;
    In production,
     Buffer.from(getCookie("session").split(".")[1],"base64").toString(); 
     OR atob(getCookie("session")); 
     should be used instead !
    */
  };
  return (
    <>
      <h2>Boka utan att logga in</h2>
      <form data-testid="anonymousForm">
        <label className={styles.screenReader} htmlFor="email">
          Emailadress
        </label>
        <input
          ref={emailRef}
          id="email"
          name="email"
          required
          placeholder="Emailadress"
          type="email"
        />
        <button
          className={styles.continueButton}
          onClick={handleClick}
          type="submit"
        >
          Gå vidare
        </button>
      </form>
      <a onClick={setToLogin} className={styles.backLink}>
        Logga in
      </a>
    </>
  );
};

export default AnonymousUserForm;
