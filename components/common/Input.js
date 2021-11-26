import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  input {
    position: relative;
    width: 300px;
    height: 46px;
    padding: ${({ iconExist }) => (iconExist ? "0 44px 0 11px " : "0 11px")};
    border: 1px solid gray;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    & ::placeholder {
      color: gray;
    }
    & :focus {
      border-color: darkgray;
    }
  }
  svg {
    position: absolute;
    right: 11px;
    top: 10px;
    height: 46px;
  }
  .input-error-message {
    margin-top: 8px;
    font-weight: 400;
    font-size: 14px;
    color: red;
  }
  ${({ useValidation, isValid }) =>
    useValidation &&
    !isValid &&
    css`
      input {
        background-color: #ffffff;
        border-color: darkcyan;
        & :focus {
          border-color: darkcyan;
        }
      }
    `}
  ${({ useValidation, isValid }) =>
    useValidation &&
    isValid &&
    css`
      input {
        border-color: darkcyan;
      }
    `}
`;

const Input = ({
  icon,
  validateMode,
  isValid = false,
  useValidation = true,
  errorMessage,
  ...props
}) => {
  return (
    <Container
      iconExist={!!icon}
      isValid={isValid}
      useValidation={validateMode && useValidation}
    >
      <input {...props} />
      {icon}
      {useValidation && validateMode && !isValid && errorMessage && (
        <p className="input-error-message">{errorMessage}</p>
      )}
    </Container>
  );
};

export default React.memo(Input);
