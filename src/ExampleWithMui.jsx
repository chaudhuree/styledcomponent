import Button from '@mui/material/Button';
import React from 'react';
import styled from 'styled-components';
import { Div } from './components/BasicTitle';
const ButtonModified=styled(Button)`
  background-color: salmon !important;
  text-transform: capitalize !important;
  margin-left: 10px !important;
  `;
function ExampleWithMui() {
  return (
    <section style={{ padding:'2rem' }}>
      <Div>Material UI
      <div></div>
      <Button color="secondary" variant="contained">Secondary</Button>
      <ButtonModified color="secondary" variant="contained">modified secondary</ButtonModified>
      </Div>
    </section>
  )
}

export default ExampleWithMui;