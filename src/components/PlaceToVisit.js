import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import places from '../static/places';
import useWindowPosition from '../hooks/useWindowPosition';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  expand: {
    width: '100vw',
    marginBottom: '5vh',
    textAlign: 'center',
  },
  goDown: { color: '#5AFF3D', fontSize: '2rem' },
}));

export default function PlaceToVisit() {
  const classes = useStyles();
  const checked = useWindowPosition('header', 'card');

  return (
    <div className={classes.root} id="place-to-visit">
      <ImageCard place={places[0]} checked={checked} />
      <ImageCard place={places[1]} checked={checked} />
      <Scroll to="place-to-visit" smooth={true} className={classes.expand}>
        <IconButton>
          <ExpandMoreIcon className={classes.goDown} />
        </IconButton>
      </Scroll>
    </div>
  );
}
