import { useState } from "react";
import LogInForm from "../logInForm/LogInForm";
import RegisterForm from "../registerForm/RegisterForm";
import ForgotPasswordForm from "../forgotPasswordForm/ForgotPasswordForm";
import AnonymousUserForm from "../anonymousUserForm/AnonymousUserForm";
import styles from "@/styles/logInModal.module.scss";

const LogInModal = ({ showLogInModal, handleShowLogInModal, formToShow }) => {
  const [form, setForm] = useState(formToShow);
  const setToRegister = () => {
    setForm("register");
  };
  const setToForgotPassword = () => {
    setForm("password");
  };
  const setToAnonymous = () => {
    setForm("anonymous");
  };
  const setToLogin = () => {
    setForm("login");
  };

  if (!showLogInModal) {
    return null;
  } else if (form === "login") {
    return (
      <div data-testid="logInForm" onClick={handleShowLogInModal} className={styles.logInModalContainer}>
        <div onClick={(e)=>{e.stopPropagation();}} className={styles.logInModal}>
          <LogInForm
            setToRegister={setToRegister}
            setToForgotPassword={setToForgotPassword}
            setToAnonymous={setToAnonymous}
          />
        </div>
      </div>
    );
  } else if (form === "register") {
    return (
      <div data-testid="registerForm" className={styles.logInModal}>
        <RegisterForm setToLogin={setToLogin} setToAnonymous={setToAnonymous} />
      </div>
    );
  } else if (form === "password") {
    return (
      <div data-testid="passwordForm" className={styles.logInModal}>
        <ForgotPasswordForm setToLogin={setToLogin} />
      </div>
    );
  } else if (form === "anonymous") {
    return (
      <div data-testid="anonymousForm" className={styles.logInModal}>
        <AnonymousUserForm setToLogin={setToLogin} />
      </div>
    );
  }
};

export default LogInModal;
