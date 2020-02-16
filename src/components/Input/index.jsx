/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const primary = ({ theme }) => theme.primary;

const Input = styled.input`
  font-size: 1em;
  padding: 0.7em;
  margin: 1em;
  border: 2px solid ${primary};
  border-radius: 3px;
  text-align: center;
  color: ${primary};
  background: transparent;

  ::placeholder {
    color: ${primary};
  }
`;

export default Input;
