import GlobalStyle from "../styles/GlobalStyle";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
