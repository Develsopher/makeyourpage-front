import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
// import { useDispatch } from "react-redux";
import MailIcon from "../public/statics/svg/mail.svg";
import OpenedIcon from "../public/statics/svg/opened_eye.svg";
// import Input from "../common/Input";
// import Selector from "../common/Selector";
// import palette from "../../styles/palette";
// import { signupAPI } from "../../lib/api/auth";
// import { userActions } from "../../store/user";
// import useValidateMode from "../../hooks/useValidateMode";
// import PasswordWarning from "./PasswordWarning";
// import { authActions } from "../../store/auth";

const Container = styled.form`
  /* width: 568px; */
  width: 100%;
  position: relative;
  /* padding: 32px; */
  background-color: red;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  /* z-index: 11; */

  .input-wrapper {
    /* position: absolute; */
    /* right: 0; */
    margin-left: 50%;
    width: 50%;
    background-color: yellow;
  }
`;

//*비밀번호 최수 자리수
const PASSWORD_MIN_LENGTH = 8;
//* 선택할 수 없는 월 option
const disabledMoths = ["월"];
//* 선택할 수 없는 일 option
const disabledDays = ["일"];
//* 선택할 수 없는 년 option
const disabledYears = ["년"];

const SignUpModal = () => {
  // const [email, setEmail] = useState("");
  // const [lastname, setLastname] = useState("");
  // const [firstname, setFirstname] = useState("");
  // const [password, setPassword] = useState("");
  // const [hidePassword, setHidePassword] = useState(true);

  // const [birthYear, setBirthYear] = useState<string | undefined>();
  // const [birthDay, setBirthDay] = useState<string | undefined>();
  // const [birthMonth, setBirthMonth] = useState<string | undefined>();

  // const [passwordFocused, setPasswordFocused] = useState(false);

  // const dispatch = useDispatch();
  // const { setValidateMode } = useValidateMode();

  // //*비밀번호 숨김 토글하기
  // const toggleHidePassword = useCallback(() => {
  //   setHidePassword(!hidePassword);
  // }, [hidePassword]);

  // //* 비밀번호 인풋 포커스 되었을때
  // const onFocusPassword = useCallback(() => {
  //   setPasswordFocused(true);
  // }, []);

  // //* password가 이름이나 이메일을 포함하는지
  // const isPasswordHasNameOrEmail = useMemo(
  //   () =>
  //     !password ||
  //     !lastname ||
  //     password.includes(lastname) ||
  //     password.includes(email.split("@")[0]),
  //   [password, lastname, email]
  // );

  // //* 비밀번호가 최수 자리수 이상인지
  // const isPasswordOverMinLength = useMemo(
  //   () => password.length >= PASSWORD_MIN_LENGTH,
  //   [password]
  // );

  // //* 비밀번호가 숫자나 특수기호를 포함하는지
  // const isPasswordHasNumberOrSymbol = useMemo(
  //   () =>
  //     !(
  //       /[{}[\]/?.,;:|)*~`!^\-_+<>@#$%&\\=('"]/g.test(password) ||
  //       /[0-9]/g.test(password)
  //     ),
  //   [password]
  // );

  // //* 이메일 주소 변경시
  // const onChangeEmail = useCallback(
  //   (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setEmail(event.target.value);
  //   },
  //   []
  // );

  // //* 이름 주소 변경시
  // const onChangeLastname = useCallback(
  //   (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setLastname(event.target.value);
  //   },
  //   []
  // );

  // //* 성 변경시
  // const onChangeFirstname = useCallback(
  //   (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setFirstname(event.target.value);
  //   },
  //   []
  // );

  // //* 비밀번호 변경시
  // const onChangePassword = useCallback(
  //   (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setPassword(event.target.value);
  //   },
  //   []
  // );

  // //* 생년월일 월 변경시
  // const onChangeBirthMonth = useCallback(
  //   (event: React.ChangeEvent<HTMLSelectElement>) => {
  //     setBirthMonth(event.target.value);
  //   },
  //   []
  // );

  // //* 생년월일 일 변경시
  // const onChangeBirthDay = useCallback(
  //   (event: React.ChangeEvent<HTMLSelectElement>) => {
  //     setBirthDay(event.target.value);
  //   },
  //   []
  // );

  // //* 생년월일 년 변경시
  // const onChangeBirthYear = useCallback(
  //   (event: React.ChangeEvent<HTMLSelectElement>) => {
  //     setBirthYear(event.target.value);
  //   },
  //   []
  // );

  // //* 회원가입 폼 입력 값 확인하기
  // const validateSignUpForm = () => {
  //   //* 인풋 값이 없다면
  //   if (!email || !lastname || !firstname || !password) {
  //     return false;
  //   }
  //   //* 비밀번호가 올바르지 않다면
  //   if (
  //     isPasswordHasNameOrEmail ||
  //     !isPasswordOverMinLength ||
  //     isPasswordHasNumberOrSymbol
  //   ) {
  //     return false;
  //   }
  //   //* 생년월일 셀렉터 값이 없다면
  //   if (!birthDay || !birthMonth || !birthYear) {
  //     return false;
  //   }
  //   return true;
  // };

  // useEffect(() => {
  //   return () => {
  //     setValidateMode(false);
  //   };
  // }, []);

  // //* 회원가입 폼 제출하기
  // const onSubmitSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   setValidateMode(true);

  //   if (validateSignUpForm()) {
  //     try {
  //       const signUpBody = {
  //         email,
  //         lastname,
  //         firstname,
  //         password,
  //         birthday: new Date(
  //           `${birthYear}-${birthMonth!.replace("월", "")}-${birthDay}`
  //         ).toISOString(),
  //       };
  //       const { data } = await signupAPI(signUpBody);

  //       dispatch(userActions.setLoggedUser(data));

  //       closeModal();
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  // };

  // //* 로그인 모달로 변경하기
  // const changeToLoginModal = useCallback(() => {
  //   dispatch(authActions.setAuthMode("login"));
  // }, []);

  return (
    <Container>
      <div className="input-wrapper">
        <input placeholder="이메일 주소" type="email" name="email" />
        <MailIcon />
      </div>
      {/* <div className="input-wrapper sign-up-password-input-wrapper">
        <Input
          placeholder="비밀번호 설정하기"
          type={hidePassword ? "password" : "text"}
          icon={
            hidePassword ? (
              <ClosedEyeIcon onClick={toggleHidePassword} />
            ) : (
              <OpenedEyeIcon onClick={toggleHidePassword} />
            )
          }
          value={password}
          onChange={onChangePassword}
          useValidation
          isValid={
            !isPasswordHasNameOrEmail &&
            isPasswordOverMinLength &&
            !isPasswordHasNumberOrSymbol
          }
          errorMessage="비밀번호를 입력하세요"
          onFocus={onFocusPassword}
        />
      </div> */}
      {/* {passwordFocused && (
        <>
          <PasswordWarning
            isValid={isPasswordHasNameOrEmail}
            text="비밀번호에 본인 이름이나 이메일 주소를 포함할 수 없습니다."
          />
          <PasswordWarning isValid={!isPasswordOverMinLength} text="최소 8자" />
          <PasswordWarning
            isValid={isPasswordHasNumberOrSymbol}
            text="숫자나 기호를 포함하세요."
          />
        </>
      )} */}
      {/* <div className="sign-up-modal-submit-button-wrapper">
        <Button type="submit" color="bittersweet">
          가입 하기
        </Button>
      </div>
      <p>
        이미 계정이 있나요?
        <span
          className="sign-up-modal-set-login"
          role="presentation"
          onClick={changeToLoginModal}
        >
          로그인
        </span>
      </p> */}
    </Container>
  );
};

export default SignUpModal;
