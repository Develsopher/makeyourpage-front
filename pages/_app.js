import GlobalStyle from "../styles/GlobalStyle";
import Footer from "../components/Footer";
import { wrapper } from "../store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default wrapper.withRedux(MyApp);
