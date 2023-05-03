import { useState } from "react";
import "@/styles/globals.scss";
import Navbar from "@/components/navBar/navBar";
import Footer from "@/components/footer/footer";
import LogInModal from "@/components/logInModal/logInModal";

export default function App({ Component, pageProps }) {
  const [showLogInModal, setShowLogInModal] = useState(false);
  const handleShowLogInModal = () => {
    setShowLogInModal(!showLogInModal);
  };
  const [formToShow, setFormToShow] = useState("login");

  return (
    <>
      <Navbar setShowLogInModal={setShowLogInModal} />
      <LogInModal
        showLogInModal={showLogInModal}
        handleShowLogInModal={handleShowLogInModal}
        formToShow={formToShow}
      />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
