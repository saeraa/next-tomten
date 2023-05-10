import { useState, createContext } from "react";
import "@/styles/globals.scss";
import Navbar from "@/components/navBar/navBar";
import Footer from "@/components/footer/footer";
import LogInModal from "@/components/logInModal/logInModal";
import MockProfilePage from "@/components/mockProfilePage";
import GenericPopup from "@/components/genericPopup/GenericPopup";

export default function App({ Component, pageProps }) {
  const [showLogInModal, setShowLogInModal] = useState(false);
  const handleShowLogInModal = () => {
    setShowLogInModal(!showLogInModal);
  };
  const [formToShow, setFormToShow] = useState("login");
  const [profileIsShown, setProfileShow] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [displayPopup, setDisplayPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupTitle, setPopupTitle] = useState("");

  return (
    <>
      <Navbar
        setShowLogInModal={setShowLogInModal}
        setProfileShow={setProfileShow}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      <MockProfilePage
        profileIsShown={profileIsShown}
        setProfileShow={setProfileShow}
      />
      <GenericPopup
        displayPopup={displayPopup}
        popupTitle={popupTitle}
        popupMessage={popupMessage}
        setDisplayPopup={setDisplayPopup}
        setShowLogInModal={setShowLogInModal}
      />
      <LogInModal
        showLogInModal={showLogInModal}
        handleShowLogInModal={handleShowLogInModal}
        formToShow={formToShow}
        setIsLoggedIn={setIsLoggedIn}
        setDisplayPopup={setDisplayPopup}
        setPopupTitle={setPopupTitle}
        setPopupMessage={setPopupMessage}
      />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
