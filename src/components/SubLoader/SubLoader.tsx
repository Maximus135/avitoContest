import React from 'react';
import * as Styled from './SubLoader.styled';

const SubLoader = () => (
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
);

export default SubLoader;