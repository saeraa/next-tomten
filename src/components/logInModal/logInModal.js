import { useState } from "react";
import LogInForm from "../logInForm/LogInForm";
import RegisterForm from "../registerForm/RegisterForm";
import ForgotPasswordForm from "../forgotPasswordForm/ForgotPasswordForm";
import AnonymousUserForm from "../anonymousUserForm/AnonymousUserForm";
import styles from "@/styles/logInModal.module.scss";

const LogInModal = ({ showLogInModal, handleShowLogInModal }) => {
  const [form, setForm] = useState("login");
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
      <div className={styles.logInModal}>
        <LogInForm
          setToRegister={setToRegister}
          setToForgotPassword={setToForgotPassword}
          setToAnonymous={setToAnonymous}
        />
      </div>
    );
  } else if (form === "register") {
    return (
      <div className={styles.logInModal}>
        <RegisterForm />
      </div>
    );
  } else if (form === "password") {
    return (
      <div className={styles.logInModal}>
        <ForgotPasswordForm setToLogin={setToLogin} />
      </div>
    );
  } else if(form === "anonymous") {
    return (
      <div className={styles.logInModal}>
        <AnonymousUserForm setToLogin={setToLogin} />
      </div>
    );
  }
};

export default LogInModal;
