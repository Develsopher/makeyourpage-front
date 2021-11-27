import axios from "axios";

export const authAPI = (headers, Authorization, token) =>
  axios
    .get(
      "https://z1tf4id0a9.execute-api.ap-northeast-2.amazonaws.com/api/subscription/checktoken",
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .then(function (res) {
      // console.log("res!!!", res);
    });
