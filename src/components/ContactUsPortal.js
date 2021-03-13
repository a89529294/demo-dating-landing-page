import { Grid, Typography, Grow, Slide, Button } from '@material-ui/core';
import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import contactUsImage from '../assets/contactUs.png';
import {
  contactUsPortalTitle,
  infoObj,
  contactUsPortalButtonText,
} from '../static/contactUsContent';
import useOnScreen from '../hooks/useOnScreen';

const animationLength = 1000;

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.aboutUsPortalStyle,
    backgroundColor: theme.palette.componentBgColor.bgTwo,
  },
  contactUsImage: {
    width: '100%',
  },
  title: {
    ...theme.typography.homePagePortalTitle,
  },
  descriptionGrid: {
    position: 'relative',
    textAlign: 'right',
  },
  button: {
    position: 'absolute',
    bottom: '1rem',
    left: '1rem',
  },
}));

export default function ContactUsPortal() {
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
      <Grid
        item
        lg={9}
        container
        direction="column"
        justify="center"
        className={classes.descriptionGrid}
      >
        <Slide
          direction="right"
          in={isVisible}
          timeout={animationLength}
          mountOnEnter
          unmountOnExit
        >
          <Typography className={classes.title}>
            {contactUsPortalTitle}
          </Typography>
        </Slide>

        <Slide
          direction="right"
          in={isVisible}
          timeout={animationLength}
          mountOnEnter
          unmountOnExit
        >
          <Typography>{infoObj.businessHours}</Typography>
        </Slide>

        <Slide
          direction="right"
          in={isVisible}
          timeout={animationLength}
          mountOnEnter
          unmountOnExit
        >
          <Typography>電話: {infoObj.phono}</Typography>
        </Slide>

        <Slide
          direction="right"
          in={isVisible}
          timeout={animationLength}
          mountOnEnter
          unmountOnExit
        >
          <Typography>手機: {infoObj.cellno}</Typography>
        </Slide>
        <Button variant="outlined" className={classes.button}>
          {contactUsPortalButtonText}
        </Button>
      </Grid>
      <Grid lg={3} item>
        <Grow in={isVisible} timeout={animationLength}>
          <img
            alt="vision"
            src={contactUsImage}
            className={classes.contactUsImage}
          />
        </Grow>
      </Grid>
    </Grid>
  );
}
