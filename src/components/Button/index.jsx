import React from 'react';
import styled from 'styled-components';

import BaseButton from './BaseButton';

const primary = ({ theme }) => theme.primary;

const DefaultButton = styled(BaseButton)`
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  border: 2px solid ${primary};
  border-radius: 3px;

  background: ${props =>
    props.reverse ? primary(props) : 'transparent'};
  color: ${props => (props.reverse ? '#fff' : primary(props))};

  & :hover {
    background: ${props =>
      props.reverse ? 'transparent' : primary(props)};
    color: ${props => (props.reverse ? primary(props) : '#fff')};
  }
`;

DefaultButton.defaultProps = {
  reverse: false,
};

export default props => <DefaultButton text="default" {...props} />;
