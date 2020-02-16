import React, { useState } from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import styled from 'styled-components';

import Button from 'components/Button';
import Input from 'components/Input';

const Container = styled.form`
  display: flex;
  flex-direction: column;
`;

const Form = ({ onSubmit, fields }) => {
  const [data, setData] = useState(
    fields.reduce((obj, field) => ({ ...obj, [field.name]: '' }), {})
  );

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(data);
  };

  const handleOnChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container onSubmit={handleSubmit}>
      {fields.map(field => (
        <Input
          key={field.name}
          placeholder={field.placeholder}
          value={data[field.name]}
          onChange={handleOnChange}
          name={field.name}
          {...(field.type && { type: field.type })}
        />
      ))}
      <Button title="Register" reverse />
    </Container>
  );
};

Form.defaultProps = {
  fields: [
    { name: 'username', placeholder: 'Username' },
    { name: 'password', placeholder: 'Password', type: 'password' },
  ],
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  fields: arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      placeholder: PropTypes.string,
      type: PropTypes.string,
    })
  ),
};

export default Form;
