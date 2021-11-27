import React, { useMemo, useState } from "react";
import styled from "styled-components";
import MailIcon from "../public/statics/svg/mail.svg";
import OpenedIcon from "../public/statics/svg/opened_eye.svg";
import ClosedIcon from "../public/statics/svg/closed_eye.svg";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import Logo from "../components/common/Logo";
import { loginAPI } from "../lib/api/auth/login";
import { useSelector, useDispatch } from "react-redux";
import * as userActions from "../store/modules/user";
import EmailWarning from "../components/auths/EmailWarning";

const Container = styled.form`
  display: flex;
  justify-content: end;
  width: 100%;
  background-color: #c6c6c6;
  min-height: 100vh;
  font-family: "Raleway", sans-serif;

  .login-wrap {
    position: relative;
    width: 50%;
    min-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    .login-us {
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
  .login-password-input-wrapper {
    svg {
      cursor: pointer;
    }
  }
  .login-submit-button-wrapper {
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid gray;
  }
  .login-to-signup {
    width: 300px;
    display: flex;
    justify-content: space-around;

    a {
      text-decoration: none;
      color: inherit;
      font-weight: bold;
    }
    p {
      font-size: 14px;
    }
  }
`;

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [validateMode, setValidateMode] = useState(false);

  const emailRedux = useSelector(({ user }) => user.email);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    dispatch(userActions.setEmail(e.target.value));
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const toggleHidePassword = () => {
    setHidePassword(!hidePassword);
  };
  const onSubmitSignUp = async (e) => {
    e.preventDefault();

    // 입력값없을때 submit 방지
    setValidateMode(true);
    if (!email || !password) {
      return undefined;
    }

    try {
      const loginBody = {
        username: email,
        password: password,
      };

      await loginAPI(loginBody);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container onSubmit={onSubmitSignUp}>
      <div className="login-wrap">
        <Logo className="logo" />
        <h1 className="login-us">Login</h1>
        <div className="input-wrapper">
          <Input
            placeholder="email address"
            type="email"
            icon={<MailIcon />}
            name="email"
            value={email}
            onChange={onChangeEmail}
            validateMode={validateMode}
            useValidation
            isValid={!!email}
            errorMessage="이메일이 필요합니다."
          />
        </div>
        <div className="input-wrapper login-password-input-wrapper">
          <Input
            placeholder="password"
            type={hidePassword ? "password" : "text"}
            icon={
              hidePassword ? (
                <OpenedIcon onClick={toggleHidePassword} />
              ) : (
                <ClosedIcon onClick={toggleHidePassword} />
              )
            }
            value={password}
            onChange={onChangePassword}
            validateMode={validateMode}
            useValidation
            isValid={!!password}
            errorMessage="비밀번호를 입력하세요."
          />
        </div>
        <div className="login-submit-button-wrapper">
          <Button type="submit">로그인</Button>
        </div>
        <div className="login-to-signup">
          <p>Make Your Page 계정이 없으신가요?</p>
          <a href="/signup">
            <p>회원가입</p>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Login;
