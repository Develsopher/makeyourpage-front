import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Box, TextField, TextareaAutosize, MenuItem } from "@material-ui/core";
import axios from "axios";
const Section = styled.section`
  & .bottom_wrap {
    width: 100%;
    height: 460px;
    position: relative;
  }
  & .bottom_form {
    position: absolute;
    top: -140px;
    width: 100%;
    height: 600px;
    padding: 125px 250px 0 250px;
    background: #f2f2f2;
    & .in_wrap {
      display: flex;
      justify-content: space-between;
      & .div {
        width: 50%;
      }
    }
    & .section_title {
      font-weight: bold;
      font-size: 24px;
    }
    & .txt_box {
      max-width: 426px;
      & .section_title {
        margin-bottom: 42px;
      }
      & .txt {
        font-size: 17px;
        line-height: 32px;
        color: #000;
        font-weight: 300;
        max-width: 333px;
      }
    }
    & .input_box {
      display: flex;
      flex-wrap: wrap;
      margin-left: auto;
      justify-content: space-between;
      max-width: 468px;
      & .inp {
        width: 100%;
        margin-bottom: 15px;
        font-weight: 400;
        font-size: 20px;
        font-family: "Roboto", sans-serif;
        color: #232323;
        & ::placeholder {
          font-family: "Roboto", sans-serif;
          font-size: 18px;
          font-weight: 300;
        }
      }
    }
  }
  .submit_btn {
    padding: 17px;
    background: #a1a1a6;
    color: #f2f2f2;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    width: 225px;
    border: none;
    cursor: pointer;
    & :hover {
      background: gray;
    }
  }
`;
const purposeList = [
  {
    value: "Portfolio",
    label: "Portfolio",
  },
  {
    value: "HomePage",
    label: "HomePage",
  },
  {
    value: "Resume",
    label: "Resume",
  },
  {
    value: "Etc",
    label: "Etc",
  },
];
export default function SectionBottom() {
  const url =
    "https://z1tf4id0a9.execute-api.ap-northeast-2.amazonaws.com/api/contactmail";
  const [purpose, setPurpose] = useState("Portfolio");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {}, [purpose, email, desc]);
  const handleChnagePurpose = (e) => {
    setPurpose(e.target.value);
  };
  const handleChnageEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeDesc = (e) => {
    setDesc(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        subject: purpose,
        address: "lebind12@naver.com",
        content: email + desc,
      })
      .then(function (response) {
        if (response.status === 200) {
          alert("성공입니다~");
        }
      })
      .catch(console.log);
  };
  return (
    <Section className="bottom">
      <div className="bottom_wrap">
        <div className="bottom_form" id="contact">
          <div className="in_wrap">
            <div className="txt_box">
              <p className="section_title">
                Feel free to contact us.
                <br />
                We'll give a help.
              </p>
              <div className="txt">
                <p>Let's make something amazing together.</p>
                <p>
                  If you're interested in creating any kind of page, please
                  complete the form.
                </p>
              </div>
            </div>
            <Box component="form" className="input_box">
              <TextField
                id="outlined-select-purpose"
                select
                label="Purpose *"
                className="inp"
                value={purpose}
                onChange={handleChnagePurpose}
                helperText="Please select your purpose"
                variant="outlined"
              >
                {purposeList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="outlined-required"
                label="Email Address *"
                className="inp"
                variant="outlined"
                onChange={handleChnageEmail}
              />
              <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                maxRows={3}
                placeholder="Describe how we could help (Optional)"
                className="inp"
                onChange={handleChangeDesc}
              />
              <input
                type="submit"
                value="SUBMIT"
                name="submit"
                className="submit_btn inp"
                onClick={handleSubmit}
              />
            </Box>
          </div>
        </div>
      </div>
    </Section>
  );
}
