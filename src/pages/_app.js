import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/NavBar";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
