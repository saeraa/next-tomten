import styles from "@/styles/genericPopup.module.scss";

const GenericPopup = ({
  popupTitle,
  popupMessage,
  setDisplayPopup,
  setShowLogInModal
}) => {
  const handleClose = () => {
    setDisplayPopup(false);
    if (
      popupTitle.includes("Nu är du inloggad") ||
      popupTitle.includes("Du bokar biljetter med e-posta")
    ) {
      setShowLogInModal(false);
    } else if (popupTitle.includes("Din session har gått")) {
      setShowLogInModal(true);
    }
  };

  let smiley = popupTitle.includes("Tack för denna gång") ? true : false;

  return (
    <div onClick={handleClose} className={styles.container}>
      <div className={styles.popup}>
        <h2>{popupTitle}</h2>
        <p>
          {popupMessage} {smiley && <span>✌️</span>}
        </p>
        <button className="generic-button" onClick={handleClose}>
          Okej
        </button>
      </div>
    </div>
  );
};

export default GenericPopup;
