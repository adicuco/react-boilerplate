/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useLocalStorage } from '@rehooks/local-storage';

import utils from 'utils';
import constants from 'constants';
import { THEME_LIGHT } from 'constants/theme';

import Button from 'components/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const HomePage = () => {
  const [theme] = useLocalStorage(constants.THEME_KEY);

  return (
    <Container>
      <h1>React Boilerplate</h1>
      <Button
        onClick={utils.toggleTheme}
        title={theme === THEME_LIGHT ? 'Dark theme' : 'Light Theme'}
      />
    </Container>
  );
};

export default HomePage;
