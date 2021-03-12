import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grow, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';

import useWindowPosition from '../hooks/useWindowPosition';
import heroBg from '../assets/dating-bg.jpg';

const useStyles = makeStyles((theme) => ({
  centerTitle: {
    color: 'white',
    fontSize: '3rem',
  },
  goDown: { color: theme.palette.common.green, fontSize: '2rem' },
  container: { textAlign: 'center' },
  heroContainer: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${heroBg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  titleColor: {
    color: theme.palette.common.green,
  },
}));

export default function Hero() {
  const checked = useWindowPosition('header', 'title');
  const classes = useStyles();

  return (
    <div className={classes.heroContainer}>
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
