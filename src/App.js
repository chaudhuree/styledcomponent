import Card from "./components/Card";
import ComplexTitle from './components/ComplexTitle';
import Example from "./Example";
import ExampleWithMui from "./ExampleWithMui";
import GlobalStyles from "./global-style";

function App() {
  return (
    <>
      <GlobalStyles />
      <Example></Example>
      <ExampleWithMui></ExampleWithMui>
      <ComplexTitle title='this is a title'></ComplexTitle>
      <Card></Card>
    </>
  );
}

export default App;
