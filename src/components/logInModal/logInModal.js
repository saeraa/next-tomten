import LogInForm from "../logInForm/LogInForm";
import styles from "@/styles/logInModal.module.scss";

const LogInModal = ({ showLogInModal, handleShowLogInModal }) => {
  if (!showLogInModal) {
    return null;
  } else {
    return (
      <div className={styles.logInModal}>
        <LogInForm></LogInForm>
      </div>
    );
  }
};

export default LogInModal;
