import axios from "axios";
import Router from "next/router";
import { setToken } from "../../utils/TokenManager";

export const loginAPI = (body) =>
  axios
    .post(
      "https://z1tf4id0a9.execute-api.ap-northeast-2.amazonaws.com/api/subscription/signin",
      body
    )
    .then(function (res) {
      if (res.data.access_token.error_message) {
        alert("아이디 또는 비밀번호를 확인해주세요.");
      } else {
        const accessToken =
          res.data.access_token.AuthenticationResult.AccessToken;
        const refreshToken =
          res.data.access_token.AuthenticationResult.RefreshToken;
        // console.log("token", refreshToken);
        setToken(accessToken, refreshToken);
        console.log("토큰을 쿠키에 저장");
        Router.push("/");
      }
    })
    .catch((error) => {
      console.log("failed", error);
    });
