import React from 'react';
import styled from 'styled-components';

import BaseButton from './BaseButton';

const DefaultButton = styled(BaseButton)`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid tomato;
  border-radius: 3px;
  color: tomato;
`;

export default props => <DefaultButton text="default" {...props} />;
