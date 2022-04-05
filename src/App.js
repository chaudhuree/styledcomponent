import React from "react";
// import styled form macro to use css props
import styled from "styled-components/macro";
import { DefaultButton, HipsterButton } from "./components/Buttons";

const Wrapper = styled.section`
  padding: 2em;
`;

function App() {
  return (
    <Wrapper>
     <HipsterButton >Click Me</HipsterButton>
     {/* though hipster is a button element but as transform it into a link */}
     <HipsterButton css={`color:red;`} as='a' href="googl.com">Click Me</HipsterButton>
     <HipsterButton>Click Me</HipsterButton>

{/* macro and css props */}
{/* must use semicolon  */}
<div css={`color:green;`}>
  <h1>chaudhuree</h1>
</div>

{/* css helper function */}
<DefaultButton >Click Me</DefaultButton>
<DefaultButton large>Click Me</DefaultButton>
    
    </Wrapper>
  );
}

export default App;
