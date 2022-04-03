import React from "react";
import BasicTitle from "./components/BasicTitle";
import { DefaultButton, DefaultButton2 } from './components/DefaultButton';
function Example() {
  return (
    <section style={{ padding:'2rem' }}>
      <BasicTitle>sOhan</BasicTitle>
      <BasicTitle special>chaudhuree</BasicTitle>
      <DefaultButton>❤ with love</DefaultButton>
      <DefaultButton2>❤ with love</DefaultButton2>
    </section>
  );
}

export default Example;
