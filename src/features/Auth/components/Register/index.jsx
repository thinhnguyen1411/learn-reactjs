import React from 'react';
import { register } from 'features/Auth/userSlice';
import RegisterForm from '../RegisterForm';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

Register.propTypes = {};

function Register(props) {
  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    try {
      //auto set username = email
      values.username = values.email;

      console.log('Form submit:', values);
      const action = await register(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      console.log('New user', user);
    } catch (error) {
      console.log('Fail to register', error);
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
