import style from "styled-components";

const BasicStyle = style.h2`
  text-align:center;
  padding:2rem;
  background:skyblue;
  color:white;
  display:inline-block;

`;
function App() {
  return (
    <section style={{textAlign:"center"}}>
      <BasicStyle>chaudhuree</BasicStyle>
    </section>
  );
}

export default App;
