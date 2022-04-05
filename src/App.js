import React from "react";
import styled from "styled-components";
import { HipsterButton } from "./components/Buttons";

const Wrapper = styled.section`
  padding: 2em;
`;

function App() {
  return (
    <Wrapper>
     <HipsterButton>Click Me</HipsterButton>
     {/* though hipster is a button element but as transform it into a link */}
     <HipsterButton as='a' href="googl.com">Click Me</HipsterButton>
     <HipsterButton>Click Me</HipsterButton>

    
    </Wrapper>
  );
}

export default App;
