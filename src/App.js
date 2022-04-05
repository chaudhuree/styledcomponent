import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./global-style";

const BaseTheme = {
  color: "#222",
  background: "#fff",
};
const DarkTheme = {
  color: "#fff",
  background: "#222",
};

const Container = styled.div`
  padding: 2rem;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};
`;
function App() {
  const [theme, setTheme] = React.useState(true);
  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <ThemeProvider theme={theme?BaseTheme:DarkTheme}>
      <GlobalStyles />
      <Container>
        <h1>chaudhuree</h1>
        <button className="btn" onClick={toggleTheme}>toggle theme</button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
