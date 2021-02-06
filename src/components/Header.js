import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Grow, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: 'none',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  appbarTitle: {
    flexGrow: 1,
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  titleColor: {
    color: '#5AFF3D',
  },
  container: { textAlign: 'center' },
  centerTitle: {
    color: 'white',

    fontSize: '3rem',
  },
  goDown: { color: '#5AFF3D', fontSize: '2rem' },
}));

export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => setChecked(true));

  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            17<span className={classes.titleColor}>Marry.</span>
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grow in={checked} {...(checked ? { timeout: 1000 } : {})}>
        <div className={classes.container}>
          <h1 className={classes.centerTitle}>
            Welcome to <br /> 17
            <span className={classes.titleColor}>Marry.</span>
          </h1>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Grow>
    </div>
  );
}
