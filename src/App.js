import React from "react";
// import styled form macro to use css props
import styled from "styled-components/macro";
import Form from "./components/Form";

const Wrapper = styled.section`
  padding: 2em;
`;

function App() {
  return (
    <Wrapper>
      <Form></Form>
    </Wrapper>
  );
}

export default App;
