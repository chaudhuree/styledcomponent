import styled from "styled-components";
const BasicTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  /* color: ${(props)=> props.special && 'palegreen'}; */
  /* destructured ⬇⬇*/
  /* color: ${({special})=> special && 'palegreen'}; */
  /* ternary operator ⬇⬇ */
  color: ${({special})=> special ? 'palegreen' : 'salmon'};
`;
export const Div = styled.div`
  padding: 2rem;
  text-align: center;

`;
export default BasicTitle;
