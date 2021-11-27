import axios from "axios";
import Router from "next/router";

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
        // Router.push("/");
        console.log(
          "res",
          res.data.access_token.AuthenticationResult.AccessToken
        );
        const token = res.data.access_token.AuthenticationResult.AccessToken;
        res.setHeader("Set-Cookie", token);
      }
    })
    .catch((error) => {
      console.log("failed", error);
    });
