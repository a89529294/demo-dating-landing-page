import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Grow } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import SwiperCore, { EffectCube, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/effect-cube/effect-cube.min.css';
import 'swiper/components/pagination/pagination.min.css';

import {
  title,
  maleMemberInfoArr,
  femaleMemberInfoArr,
  btnText,
} from '../static/membersContent';

SwiperCore.use([EffectCube, Pagination]);

const memberImageHeight = '20rem';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 10,
    backgroundColor: theme.palette.componentBgColor.bgTwo,
    marginBottom: 0,
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
  btn: {
    margin: '10px auto',
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
      pagination={{}}
    >
      {infoArr.map((infoObj, i) => (
        <SwiperSlide className={classes.swiperSlide} key={i}>
          <img src={infoObj.img} className={classes.swiperImg} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const Desc = ({ arr, index }) => (
  <>
    <Typography variant="h5">{arr[index].name}</Typography>
    <Typography color="textSecondary">{arr[index].age}歲</Typography>
    <Typography color="textSecondary">{arr[index].height}公分</Typography>
    <Typography color="textSecondary">{arr[index].profession}</Typography>
  </>
);

export default function MembersPortal() {
  const classes = useStyles();
  const [maleIndex, setMaleIndex] = useState(0);
  const [femaleIndex, setFemaleIndex] = useState(0);

  return (
    <Grid container className={classes.root} spacing={1} justify="center">
      <Grid item xs={12}>
        <Typography className={classes.title}>{title}</Typography>
      </Grid>
      <Grid item xs={7} md={5} lg={2} className={classes.carouselContainer}>
        <SwiperCube infoArr={maleMemberInfoArr} setIndex={setMaleIndex} />
      </Grid>
      <Grid
        item
        xs={7}
        md={5}
        lg={3}
        className={classes.memberDesc}
        direction="column"
        container
      >
        <Desc arr={maleMemberInfoArr} index={maleIndex} />
      </Grid>
      <Grid
        item
        xs={7}
        md={5}
        lg={3}
        className={classes.memberDesc}
        direction="column"
        container
      >
        <Desc arr={femaleMemberInfoArr} index={femaleIndex} />
      </Grid>
      <Grid item xs={7} md={5} lg={2} className={classes.carouselContainer}>
        <SwiperCube infoArr={femaleMemberInfoArr} setIndex={setFemaleIndex} />
      </Grid>
      <Grid item xs={12} />
      <Button variant="outlined" className={classes.btn}>
        {btnText}
      </Button>
    </Grid>
  );
}
