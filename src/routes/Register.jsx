/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from 'components/Button';
import Input from 'components/Input';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = e => {
    e.preventDefault();

    // register({
    //   username,
    //   password,
    // });
  };

  return (
    <Container>
      <h1>Register</h1>
      <Form onSubmit={handleRegister}>
        <Input
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <Input
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
        />
        <Button title="Register" reverse />
      </Form>
    </Container>
  );
};

export default Register;
