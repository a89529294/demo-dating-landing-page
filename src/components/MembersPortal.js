import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import SwiperCore, { EffectCube } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/effect-cube/effect-cube.min.css';

import {
  title,
  maleMemberInfoArr,
  femaleMemberInfoArr,
} from '../static/membersContent';

SwiperCore.use([EffectCube]);

const memberImageHeight = '20rem';

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
    height: memberImageHeight,
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
  memberDesc: {
    width: '100%',
    height: memberImageHeight,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const SwiperCube = ({ infoArr, setIndex }) => {
  const classes = useStyles();
  return (
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
      onSlideChange={(e) => setIndex(e.realIndex)}
    >
      {infoArr.map((infoObj, i) => (
        <SwiperSlide className={classes.swiperSlide} key={i}>
          <img src={infoObj.img} className={classes.swiperImg} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default function MembersPortal() {
  const classes = useStyles();
  const [maleIndex, setMaleIndex] = useState(0);
  const [femaleIndex, setFemaleIndex] = useState(0);

  return (
    <Grid container className={classes.root} spacing={1} justify="center">
      <Grid item xs={12}>
        <Typography className={classes.title}>{title}</Typography>
      </Grid>
      <Grid item lg={2} className={classes.carouselContainer}>
        <SwiperCube infoArr={maleMemberInfoArr} setIndex={setMaleIndex} />
      </Grid>
      <Grid item lg={3} className={classes.memberDesc} direction="column">
        <Typography variant="h5">
          {maleMemberInfoArr[maleIndex].name}
        </Typography>
        <Typography color="textSecondary">
          {maleMemberInfoArr[maleIndex].age}歲{' '}
        </Typography>
        <Typography color="textSecondary">
          {maleMemberInfoArr[maleIndex].height}公分{' '}
        </Typography>
        <Typography color="textSecondary">
          {maleMemberInfoArr[maleIndex].profession}
        </Typography>
      </Grid>
      <Grid item lg={3}>
        {femaleMemberInfoArr[femaleIndex].name}
      </Grid>
      <Grid item lg={2} className={classes.carouselContainer}>
        <SwiperCube infoArr={femaleMemberInfoArr} setIndex={setFemaleIndex} />
      </Grid>
    </Grid>
  );
}
