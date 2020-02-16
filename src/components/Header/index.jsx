/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useLocalStorage } from '@rehooks/local-storage';

import { FiMoon, FiSun } from 'react-icons/fi';
import { IoMdMoon } from 'react-icons/io';

import utils from 'utils';
import constants from 'constants';
import { THEME_LIGHT } from 'constants/theme';

import Button from 'components/Button';
import Toggle from 'components/Toggle';

const Container = styled.div`
  width: 100vw;
  height: 4em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = props => {
  const [theme] = useLocalStorage(constants.THEME_KEY);

  return (
    <Container>
      <Button title="Home" />
      <SubContainer>
        <Toggle
          onChange={utils.toggleTheme}
          defaultChecked={theme === THEME_LIGHT}
          icons={{
            checked: <IoMdMoon />,
            unchecked: <FiSun />,
          }}
        />
        <Button title="Log In" reverse />
      </SubContainer>
    </Container>
  );
};

Header.propTypes = {};

export default Header;
