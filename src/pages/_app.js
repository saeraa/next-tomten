import { useState } from "react";
import "@/styles/globals.scss";
import Navbar from "@/components/navBar/navBar";
import Footer from "@/components/footer/footer";
import LogInModal from "@/components/logInModal/logInModal";

export default function App({ Component, pageProps }) {
  const [showLogInModal, setShowLogInModal] = useState(true);
  const handleShowLogInModal = () => {
    setShowLogInModal(!showLogInModal);
  }
  
  return (
    <>
      <Navbar />
      <LogInModal showLogInModal={showLogInModal} handleShowLogInModal={handleShowLogInModal}/>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
