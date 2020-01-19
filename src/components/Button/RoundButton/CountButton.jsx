import React from 'react';
import styled from 'styled-components';

import RoundButton from './index';

const CountButton = styled(RoundButton)`
  font-size: 16px;
  line-height: 17px;
  position: auto;
`;

// eslint-disable-next-line react/prop-types
export default ({ minus = false, ...props }) => (
  <CountButton title={minus ? '-' : '+'} size={25} {...props} />
);
