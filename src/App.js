import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./global-style";

const BaseTheme = {
  color: '#222',
  background: '#fff',
}
const DarkTheme = {
  color: '#fff',
  background: '#222',
}

const Container = styled.div`
  padding: 2rem;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};
`
function App() {
  return (
    <ThemeProvider theme={BaseTheme}>
      <GlobalStyles />
      <Container>
        <h1>chaudhuree</h1>
      </Container>
    </ThemeProvider>
  );
}

export default App;
