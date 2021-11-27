import axios from "axios";
import Router from "next/router";

export const contactAPI = (body) =>
  axios
    .post(
      "https://z1tf4id0a9.execute-api.ap-northeast-2.amazonaws.com/api/contactmail",
      body
    )
    .then(function (res) {
      alert("Thank You 👻");
      Router.push("/");
    })
    .catch((error) => {
      console.log("failed", error);
    });
