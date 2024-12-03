import React from "react";
import styled from 'styled-components';

const CursorPointer = styled.div.attrs(props => ({
  style: {
    left: `${props.x +10}px`, // Adjusted left position
    top: `${props.y -140}px`,  // Adjusted top position
  },
}))`
  background-color: purple;
  position: absolute;
  border-radius: 100%;
  mix-blend-mode: difference;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  &:hover{
    cursor:none;
  }
`;

export default CursorPointer;
