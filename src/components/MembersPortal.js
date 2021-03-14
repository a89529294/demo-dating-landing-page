import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import SwiperCore, { EffectCube } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { title } from '../static/membersContent';
import img1 from '../assets/eventOneImage.jpeg';
import img2 from '../assets/eventTwoImage.jpeg';

import 'swiper/swiper.min.css';
import 'swiper/components/effect-cube/effect-cube.min.css';

SwiperCore.use([EffectCube]);

const imgArr = [img1, img2];

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 10,
    backgroundColor: theme.palette.componentBgColor.bgTwo,
  },
  title: {
    ...theme.typography.homePagePortalTitle,
    textAlign: 'center',
  },
  carouselContainer: {
    height: '20rem',
  },
  swiperContainer: {
    height: '100%',
    width: '100%',
  },
  swiperSlide: {
    height: '100%',
    width: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  swiperImg: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
}));

export default function MembersPortal() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Typography className={classes.title}>{title}</Typography>
      </Grid>
      <Grid item lg={4} className={classes.carouselContainer}>
        <Swiper
          effect="cube"
          className={classes.swiperContainer}
          loop={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          grabCursor={true}
          onSlideChange={(e) => console.log(e.realIndex)}
        >
          {imgArr.map((imgSrc, i) => (
            <SwiperSlide className={classes.swiperSlide} key={i}>
              <img src={imgSrc} className={classes.swiperImg} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
      <Grid item lg={8}></Grid>
    </Grid>
  );
}
