import React, { useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import {
  aboutUsPortalTitle,
  aboutUsPortalContent,
  aboutUsPortalButtonText,
} from '../static/aboutUsContent';
import visionImage from '../assets/vision.jpg';
import { Grid, Typography, Grow, Slide } from '@material-ui/core';

import useOnScreen from '../hooks/useOnScreen';

const animationLength = 1000;

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.aboutUsPortalStyle,
    backgroundColor: theme.palette.componentBgColor.bgOne,
  },
  vision: {
    width: '100%',
  },
  title: {
    ...theme.typography.homePagePortalTitle,
  },
  button: {
    position: 'absolute',
    bottom: '1rem',
    right: '1rem',
  },
  descriptionGrid: {
    position: 'relative',
  },
  desc: {
    ...theme.typography.homePagePortalDesc,
  },
}));

export default function AboutUsPortal() {
  const classes = useStyles();
  const ref = useRef();
  const isVisible = useOnScreen(ref, 0.3);

  return (
    <Grid
      className={classes.root}
      container
      justify="center"
      spacing={2}
      ref={ref}
    >
      <Grid item lg={3}>
        <Grow in={isVisible} timeout={animationLength}>
          <img alt="vision" src={visionImage} className={classes.vision} />
        </Grow>
      </Grid>
      <Grid
        item
        lg={9}
        container
        direction="column"
        justify="center"
        className={classes.descriptionGrid}
      >
        <Slide
          direction="left"
          in={isVisible}
          timeout={animationLength}
          mountOnEnter
          unmountOnExit
        >
          <Typography className={classes.title}>
            {aboutUsPortalTitle}
          </Typography>
        </Slide>
        <Slide
          direction="left"
          in={isVisible}
          timeout={animationLength}
          mountOnEnter
          unmountOnExit
        >
          <Typography className={classes.desc}>
            {aboutUsPortalContent}
          </Typography>
        </Slide>

        <Button variant="outlined" className={classes.button}>
          {aboutUsPortalButtonText}
        </Button>
      </Grid>
    </Grid>
  );
}
