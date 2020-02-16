import React from 'react';
import styled from 'styled-components';

import Form from 'components/Form';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Register = () => {
  const handleRegister = data => {
    console.log(data);

    // register({
    //   username,
    //   password,
    // });
  };

  return (
    <Container>
      <h1>Register</h1>
      <Form
        fields={[
          { name: 'username', placeholder: 'Username' },
          {
            name: 'password',
            placeholder: 'Password',
            type: 'password',
          },
        ]}
        onSubmit={handleRegister}
      />
    </Container>
  );
};

export default Register;
