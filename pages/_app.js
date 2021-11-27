import GlobalStyle from "../styles/GlobalStyle";
import App from "next/app";
import Footer from "../components/Footer";
import { wrapper } from "../store";
import cookies from "next-cookies";
import { setToken } from "../lib/utils/TokenManager";
import axios from "axios";
import { authAPI } from "../lib/api/auth/auth";
import * as userActions from "../store/modules/user";
import { useDispatch } from "react-redux";

function app({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

app.getInitialProps = async (context) => {
  // const dispatch = useDispatch();
  const appInitialProps = await App.getInitialProps(context);
  console.log(Object.keys(context.ctx));
  const { ctx, Component } = context;
  console.log("Component", Component);
  const allCookies = cookies(ctx);
  const accessTokenByCookie = allCookies["accessToken"];
  if (accessTokenByCookie !== undefined) {
    const refreshTokenByCookie = allCookies["refreshToken"] || "";
    setToken(accessTokenByCookie, refreshTokenByCookie);
  }
  try {
    if (accessTokenByCookie) {
      console.log("authAPI실행");
      axios.defaults.headers.cookie = accessTokenByCookie;
      // await authAPI("headers", "Authorization", accessTokenByCookie);
      await axios
        .get(
          "https://z1tf4id0a9.execute-api.ap-northeast-2.amazonaws.com/api/subscription/checktoken",
          {
            headers: {
              Authorization: accessTokenByCookie,
            },
          }
        )
        .then(function (res) {
          console.log("res", res.data.UserAttributes[2].Value);
          // dispatch(userActions.setEmail(res.data.UserAttributes[2].Value));
        });
    }
    // console.log("data", data);
  } catch (e) {
    console.log(e.message);
  }
  return { ...appInitialProps };
};

export default wrapper.withRedux(app);
