import { Axios } from "axios";
import React from "react";
import styled from "styled-components";
import { getTodosAPI } from "../lib/api/todo";

const Container = styled.div`
  font-style: italic;
`;
const index = () => {
  console.log(process.env, "클라이언트");
  return (
    <>
      <Container>hello styled-components</Container>
    </>
  );
};

export default index;

// export const getServerSideProps = async () => {
//   try {
//     // console.log(process.env, "서버");
//     const { data } = await getTodosAPI();
//     return { props: { todos: data } };
//   } catch (e) {
//     console.log(e);
//     return { props: {} };
//   }
// };
