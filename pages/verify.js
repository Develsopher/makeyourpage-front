import React, { useState } from "react";
import styled from "styled-components";
import VerifyIcon from "../public/statics/svg/verify_mark.svg";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import Logo from "../components/common/Logo";
import { useSelector } from "react-redux";
import { verifyAPI } from "../lib/api/auth/verify";

const Container = styled.form`
  display: flex;
  justify-content: end;
  width: 100%;
  background-color: #c6c6c6;
  min-height: 100vh;
  font-family: "Raleway", sans-serif;

  .verify-wrap {
    position: relative;
    width: 50%;
    min-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    .join-us {
      font-size: 40px;
      font-weight: bold;
      margin-bottom: 60px;
    }
  }
  .input-wrapper {
    display: flex;
    position: relative;
    margin-bottom: 16px;
  }
  .verify-submit-button-wrapper {
    margin-bottom: 16px;
    padding-bottom: 16px;
  }
`;

const Verify = () => {
  const [code, setCode] = useState("");
  const [validateMode, setValidateMode] = useState(false);
  const email = useSelector(({ user }) => user.email);

  const onChangeCode = (e) => {
    setCode(e.target.value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1"));
  };

  const onSubmitVerify = async (e) => {
    e.preventDefault();

    setValidateMode(true);

    if (!code) {
      return undefined;
    }
    try {
      const verifyBody = {
        usermail: email,
        code: code,
      };
      await verifyAPI(verifyBody);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container onSubmit={onSubmitVerify}>
      <div className="verify-wrap">
        <Logo className="logo" />
        <h1 className="join-us">Verify</h1>
        <div className="input-wrapper">
          <Input
            placeholder="enter the code"
            type="text"
            icon={<VerifyIcon />}
            name="code"
            value={code}
            onChange={onChangeCode}
            maxLength="6"
            validateMode={validateMode}
            useValidation
            isValid={!!code}
            errorMessage="6자리 인증코드를 입력해주세요."
          />
        </div>
        <div className="verify-submit-button-wrapper">
          <Button type="submit">제출하기</Button>
        </div>
      </div>
    </Container>
  );
};

export default Verify;
