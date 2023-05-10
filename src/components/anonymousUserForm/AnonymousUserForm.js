import styles from "@/styles/logInModal.module.scss";
import continueAsGuest from "@/utils/anonymousUser";

const AnonymousUserForm = ({
  setToLogin,
  setDisplayPopup,
  setPopupTitle,
  setPopupMessage
}) => {
  const handleClick = async (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    if (await continueAsGuest(email)) {
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
  };
  return (
    <>
      <h2>Boka utan att logga in</h2>
      <form data-testid="anonymousForm">
        <label className={styles.screenReader} htmlFor="email">
          Emailadress
        </label>
        <input
          id="email"
          name="email"
          required
          placeholder="Emailadress"
          type="email"
        />
        <button
          className={styles.continueButton}
          onClick={(e) => handleClick(e)}
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
