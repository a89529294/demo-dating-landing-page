import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grow, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import heroBg from '../assets/heroBg.jpg';

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
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  titleColor: {
    color: theme.palette.common.green,
  },
}));

export default function Hero() {
  const classes = useStyles();
  const controls = useAnimation();
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
  });

  const imgVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 2 },
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

  return (
    <div className={classes.heroContainer} ref={ref}>
      <div className={classes.container}>
        <motion.div initial="hidden" animate={controls} variants={imgVariants}>
          <h1 className={classes.centerTitle}>
            Welcome to <br /> 17
            <span className={classes.titleColor}>Marry.</span>
          </h1>
        </motion.div>
        {/* <h1 className={classes.centerTitle}>
          Welcome to <br /> 17
          <span className={classes.titleColor}>Marry.</span>
        </h1> */}
        <Scroll to="place-to-visit" smooth={true}>
          <IconButton>
            <ExpandMoreIcon className={classes.goDown} />
          </IconButton>
        </Scroll>
      </div>
    </div>
  );
}
