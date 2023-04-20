import "@/styles/globals.scss";
import Navbar from "@/components/navBar/NavBar";
import Footer from "@/components/footer/footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
