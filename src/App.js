import Card from "./components/Card";
import ComplexTitle from './components/ComplexTitle';
import Example from "./Example";
import ExampleWithMui from "./ExampleWithMui";

function App() {
  return (
    <>
      <Example></Example>
      <ExampleWithMui></ExampleWithMui>
      <ComplexTitle title='this is a title'></ComplexTitle>
      <Card></Card>
    </>
  );
}

export default App;
