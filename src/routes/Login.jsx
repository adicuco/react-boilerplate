import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Form from 'components/Form';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Message = styled.div`
  display: flex;

  span {
    padding-right: 5px;
  }
`;

const Login = () => {
  const handleLogin = data => {
    console.log(data);

    // Login({
    //   username,
    //   password,
    // });
  };

  return (
    <Container>
      <h1>Login</h1>
      <Form
        fields={[
          { name: 'username', placeholder: 'Username' },
          {
            name: 'password',
            placeholder: 'Password',
            type: 'password',
          },
        ]}
        onSubmit={handleLogin}
        text="Login"
      />

      <Message>
        <span>Don&apos;t have an account?</span>
        <Link to="/register">Register</Link>
      </Message>
    </Container>
  );
};

export default Login;
