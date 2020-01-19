import React from 'react';
import styled from 'styled-components';

import RoundButton from './index';

const CloseButton = styled(RoundButton)`
  font-size: 20px;
  color: #888888;
  line-height: 20px;
`;

export default props => (
  <CloseButton title="×" size={25} {...props} />
);
