import LogInForm from "../logInForm/LogInForm";
import styles from "@/styles/logInModal.module.scss";

const LogInModal = () => {
    return (
        <div className={styles.logInModal}>
            <LogInForm></LogInForm>
        </div>
    )
}

export default LogInModal;