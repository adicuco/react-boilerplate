/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from 'components/Button';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
`;

const HomePage = () => {
  return (
    <Container>
      <h1>React Boileplate</h1>
      <ButtonsContainer>
        <Link to="/register">
          <Button title="Register" />
        </Link>
        <Link to="/login">
          <Button title="Login" reverse />
        </Link>
      </ButtonsContainer>
    </Container>
  );
};

export default HomePage;
