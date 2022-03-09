import React from "react";
import BasicTitle from "./components/BasicTitle";
import { DefaultButton } from './components/DefaultButton';
function Example() {
  return (
    <section style={{ padding:'2rem' }}>
      <BasicTitle>sOhan</BasicTitle>
      <BasicTitle special>chaudhuree</BasicTitle>
      <DefaultButton>❤ with love</DefaultButton>
    </section>
  );
}

export default Example;
