import React from 'react';
import { login } from 'features/Auth/userSlice';
import LoginForm from '../LoginForm';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import { PropTypes } from 'prop-types';

Login.propTypes = {
  closeDialog: PropTypes.func,
};

function Login(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const handleLogin = async (values) => {
    try {
      console.log('Form login:', values);
      const action = login(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);

      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }

      console.log('New user', user);
    } catch (error) {
      console.log('Fail to login', error);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };
  return (
    <div>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
}

export default Login;
