import { Box, IconButton } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Close } from '@material-ui/icons';
import CodeIcon from '@material-ui/icons/Code';
import Login from 'features/Auth/components/Login';
import Register from 'features/Auth/components/Register';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
    zIndex: 1,
  },
  closeRegisterDiv: {
    alignItems: 'center',
    alignContent: 'center',
  },
}));

const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <CodeIcon className={classes.menuButton} />
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to="/">
              EZ SHOP
            </Link>
          </Typography>
          <NavLink className={classes.link} to="/todos">
            <Button color="inherit">Todos</Button>
          </NavLink>

          <NavLink className={classes.link} to="/albums">
            <Button color="inherit">Album</Button>
          </NavLink>

          <Button color="inherit" onClick={handleClickOpen}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Dialog
        open={open}
        disableBackdropClick
        disableEscapeKeyDown
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <Close />
        </IconButton>
        <DialogContent>
          <div>
            {mode === MODE.REGISTER && (
              <div className={classes.closeRegisterDiv}>
                <Register closeDialog={handleClose} />
                <Box textAlign="center">
                  <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                    Already have an account. Login here!
                  </Button>
                </Box>
              </div>
            )}

            {mode === MODE.LOGIN && (
              <div className={classes.closeRegisterDiv}>
                <Login closeDialog={handleClose} />
                <Box textAlign="center">
                  <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                    Don't have an account. Register here!
                  </Button>
                </Box>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
