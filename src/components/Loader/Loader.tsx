import React from 'react';
import * as Styled from './Loader.styled';

const Loader = () => (
  <Styled.StyledBack>
    <Styled.StyledSpinner viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="2"
      />
    </Styled.StyledSpinner>
  </Styled.StyledBack>
);

export default Loader;