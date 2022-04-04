import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  /* global css can be overrided  */
  .bg-red {
    background-color: orange;
  }
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
    // adding global css
    <Wrapper className="bg-red">
      <h1 className="text-white">{title}</h1>
      <div className="underline"></div>
    </Wrapper>
  );
}
