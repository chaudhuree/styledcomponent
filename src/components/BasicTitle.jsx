import styled from "styled-components";
const BasicTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  color: ${(props)=> props.special && 'palegreen'};
`;
export default BasicTitle;
