import React from 'react';
import styled from 'styled-components';

import BaseButton from './BaseButton';

const DefaultButton = styled(BaseButton)`
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 3px;
  color: ${({ theme }) => theme.primary};
  background: transparent;

  & :hover {
    background: ${({ theme }) => theme.primary};
    color: #fff;
  }
`;

export default props => <DefaultButton text="default" {...props} />;
