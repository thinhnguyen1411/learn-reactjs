import { yupResolver } from '@hookform/resolvers/yup';
import { LockOutlined } from '@material-ui/icons';
import InputField from 'components/form-controls/InputField';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { LinearProgress, makeStyles } from '@material-ui/core';
import PasswordField from 'components/form-controls/PasswordField';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    paddingTop: theme.spacing(4),
  },
  avatar: {
    margin: '0 auto',
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    textAlign: 'center',
    margin: theme.spacing(2, 0, 3, 0),
  },
  submit: {
    margin: theme.spacing(3, 0, 2, 0),
  },

  progress: {
    position: 'absolute',
    top: theme.spacing(1),
    left: 0,
    right: 0,
  },
}));

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const classes = useStyles();
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const schema = yup.object().shape({
    identifier: yup.string().required('Please enter your email.').email('Please enter a valid email.'),
    password: yup.string().required('Please enter your password.'),
  });

  const form = useForm({
    defaultValues: {
      title: '',
      identifier: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      setIsFormSubmitting(true);
      await onSubmit(values);
      setIsFormSubmitting(false);
    }
    // form.reset();
  };

  // const { isSubmitting } = form.formState;

  return (
    <div className={classes.root}>
      {isFormSubmitting && <LinearProgress className={classes.progress} />}

      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography component="h3" variant="h5" className={classes.title}>
        Sign In
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="identifier" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />

        <Button type="submit" className={classes.submit} variant="contained" color="primary" fullWidth size="large">
          Sign in
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
