import axios from "axios";
import Router from "next/router";
import { setCookie } from "../../utils/cookie";

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
        const token = res.data.access_token.AuthenticationResult.AccessToken;
        if (token) {
          setCookie("access_token", token, {
            path: "/",
            secure: true,
            sameSite: "none",
          });
        }
        console.log("토큰을 쿠키에 저장");
        Router.push("/");
      }
    })
    .catch((error) => {
      console.log("failed", error);
    });
