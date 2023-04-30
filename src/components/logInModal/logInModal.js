import { useState } from "react";
import LogInForm from "../logInForm/LogInForm";
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
        <LogInForm></LogInForm>
      </div>
    );
  }
};

export default LogInModal;
