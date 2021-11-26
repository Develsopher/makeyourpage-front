import axios from "axios";
import Router from "next/router";

export const verifyAPI = (body) =>
  axios
    .post(
      "https://z1tf4id0a9.execute-api.ap-northeast-2.amazonaws.com/api/subscription/verificode",
      body
    )
    .then(function (res) {
      // if (res.data.error_message) {
      //   alert("이미 가입되어있는 계정입니다.");
      // } else {
      //   Router.push("/verify");
      // }
      console.log(res);
    })
    .catch((error) => {
      console.log("failed", error);
    });
