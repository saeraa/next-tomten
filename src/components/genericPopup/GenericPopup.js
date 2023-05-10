import styles from "@/styles/genericPopup.module.scss";

const GenericPopup = ({
  displayPopup,
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
    }
  };

  return displayPopup ? (
    <div className={styles.popup}>
      <h2>{popupTitle}</h2>
      <p>{popupMessage}</p>
      <button className="generic-button" onClick={handleClose}>
        Okej
      </button>
    </div>
  ) : (
    ""
  );
};

export default GenericPopup;
