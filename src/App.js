import React from "react";
import styled from "styled-components";
import WrapperLoading from "./components/Loading";

const Wrapper = styled.section`
  padding: 2em;
`;

function App() {
  return (
    <Wrapper>
      <WrapperLoading></WrapperLoading>
    </Wrapper>
  );
}

export default App;
