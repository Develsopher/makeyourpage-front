import axios from "axios";
import Router from "next/router";

export const verifyAPI = (body) =>
  axios
    .post(
      "https://z1tf4id0a9.execute-api.ap-northeast-2.amazonaws.com/api/subscription/verificode",
      body
    )
    .then(function (res) {
      if (res.data.error_message) {
        alert("코드가 일치하지 않습니다.");
      } else {
        Router.push("/login");
      }
      console.log(res);
    })
    .catch((error) => {
      console.log("failed", error);
    });
