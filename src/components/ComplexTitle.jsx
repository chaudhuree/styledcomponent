import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  padding: 2rem;
  h1 {
    text-align: center;
    margin: 0;
  }
  .underline {
    width: 5rem;
    height: 0.3rem;
    background-color: salmon;
    text-align: center;
    margin: 0 auto;
  }
`;

export default function ComplexTitle({ title }) {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div className="underline"></div>
    </Wrapper>
  );
}
