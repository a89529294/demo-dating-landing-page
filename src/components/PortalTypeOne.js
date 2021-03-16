import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Grid, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.aboutUsPortalStyle,
    backgroundColor: theme.palette.componentBgColor.bgOne,
    position: 'relative',
  },
  vision: {
    width: '100%',
  },
  title: {
    ...theme.typography.homePagePortalTitle,
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
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
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
  smallScreenButton: {},
}));

export default function PortalTypeOne({
  title,
  content,
  btnText,
  imgSrc,
  imgLocation = 'left',
  backgroundColor,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const bigScreen = useMediaQuery(theme.breakpoints.up('md'));

  const imgVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 2 },
    },
  };

  const textVariants = {
    hidden: { x: imgLocation === 'left' ? '200%' : '-200%' },
    visible: {
      x: 0,
      transition: {
        duration: 2,
      },
    },
  };

  const textVariants2 = {
    hidden: { x: imgLocation === 'left' ? '200%' : '-200%' },
    visible: {
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const imgLeft = imgLocation === 'left';

  return (
    <Grid
      className={classes.root}
      container
      justify="center"
      spacing={2}
      ref={ref}
      style={{
        width: '100%',
        overflowX: 'hidden',
        backgroundColor: backgroundColor
          ? backgroundColor
          : theme.palette.componentBgColor.bgOne,
      }}
    >
      <Grid item xs={8} md={3} style={{ order: imgLeft ? 0 : 1 }}>
        <motion.img
          initial="hidden"
          animate={controls}
          variants={imgVariants}
          className={classes.vision}
          alt="vision"
          src={imgSrc}
        ></motion.img>
      </Grid>
      <Grid
        item
        xs={10}
        md={9}
        container
        direction="column"
        justify="center"
        className={classes.descriptionGrid}
        style={{
          order: imgLeft ? 1 : 0,
          textAlign: imgLeft ? 'left' : 'right',
        }}
      >
        <motion.div initial="hidden" animate={controls} variants={textVariants}>
          <Typography className={classes.title}>{title}</Typography>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={textVariants2}
        >
          <Typography className={classes.desc}>{content}</Typography>
        </motion.div>
        {bigScreen && (
          <Button
            variant="outlined"
            className={classes.button}
            style={imgLeft ? { right: '1rem' } : { left: '1rem' }}
          >
            {btnText}
          </Button>
        )}
      </Grid>

      {smallScreen && (
        <Grid xs={10} justify="flex-end" item container style={{ order: 2 }}>
          <Button variant="outlined">{btnText}</Button>
        </Grid>
      )}
    </Grid>
  );
}
