import { useState, createContext } from "react";
import "@/styles/globals.scss";
import Navbar from "@/components/navBar/navBar";
import Footer from "@/components/footer/footer";
import LogInModal from "@/components/logInModal/logInModal";
import MockProfilePage from "@/components/mockProfilePage";
import GenericPopup from "@/components/genericPopup/GenericPopup";
import { getCookie } from "cookies-next";

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

  if (isLoggedIn) {
    if (getCookie("session") === undefined) {
      //comes here when the cookie is expired
      setIsLoggedIn(false);
      setProfileShow(false);
      setDisplayPopup(true);
      setPopupTitle("Din session har gått ut!");
      setPopupMessage(
        "Vänligen logga in igen för att komma åt din personliga sida."
      );
    }
  }

  return (
    <>
      <Navbar
        setShowLogInModal={setShowLogInModal}
        setProfileShow={setProfileShow}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setDisplayPopup={setDisplayPopup}
        setPopupTitle={setPopupTitle}
        setPopupMessage={setPopupMessage}
      />
      <MockProfilePage
        profileIsShown={profileIsShown}
        setProfileShow={setProfileShow}
      />
      {displayPopup && (
        <GenericPopup
          popupTitle={popupTitle}
          popupMessage={popupMessage}
          setIsLoggedIn={setIsLoggedIn}
          setDisplayPopup={setDisplayPopup}
          setShowLogInModal={setShowLogInModal}
        />
      )}
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
