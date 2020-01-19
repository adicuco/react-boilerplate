import React from 'react';
import styled from 'styled-components';

import BaseButton from '../BaseButton';

const RoundButton = styled(BaseButton)`
  font-size: 12px;
  font-weight: 500;
  border-radius: 50%;
  background-color: #eee;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  line-height: ${props => props.size - 1}px;
`;

RoundButton.defaultProps = {
  size: 50,
};

export default props => <RoundButton title="round" {...props} />;
