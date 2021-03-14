import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button } from '@material-ui/core';
import ReactCardFlip from 'react-card-flip';

import {
  title,
  buttonText,
  eventPortalCardInfoArr,
} from '../static/eventContent';
import imageOne from '../assets/eventOneImage.jpeg';
import imageTwo from '../assets/eventTwoImage.jpeg';
import imageThree from '../assets/eventThreeImage.jpeg';

const imageArr = [imageOne, imageTwo, imageThree];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  title: {
    ...theme.typography.homePagePortalTitle,
    textAlign: 'center',
  },
  cardContainer: {},
  cardImgContainer: {
    height: '15rem',
  },
  img: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },
  backOfCard: {
    width: '100%',
    height: '100%',
    padding: 10,
  },
  cardBackTitle: {
    textAlign: 'center',
    fontFamily: "'Noto Serif TC', serif",
    fontWeight: 700,
    marginTop: 10,
  },
  cardBackDesc: {
    fontFamily: "'Noto Serif TC', serif",
    fontWeight: 100,
    marginTop: 10,
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    margin: '10px auto',
  },
}));

const ImageCard = ({ imageSrc, index }) => {
  const classes = useStyles();
  const [isBack, setIsBack] = useState(false);
  return (
    <Grid item lg={3} className={classes.cardImgContainer}>
      <ReactCardFlip
        isFlipped={isBack}
        containerStyle={{ height: '100%', width: '100%' }}
      >
        <img
          src={imageSrc}
          alt="dating-img"
          className={classes.img}
          onMouseEnter={() => {
            setIsBack(true);
          }}
        />
        <div
          onMouseLeave={() => {
            setIsBack(false);
          }}
          className={classes.backOfCard}
        >
          <Typography color="textSecondary">
            {eventPortalCardInfoArr[index].date}
          </Typography>
          <Typography className={classes.cardBackTitle}>
            {eventPortalCardInfoArr[index].title}
          </Typography>
          <Typography className={classes.cardBackDesc}>
            {eventPortalCardInfoArr[index].desc}
          </Typography>
        </div>
      </ReactCardFlip>
    </Grid>
  );
};

export default function EventPortal() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>{title}</Typography>
      <Grid className={classes.cardContainer} container justify="space-around">
        {imageArr.map((imgSrc, i) => (
          <ImageCard imageSrc={imgSrc} key={i} index={i} />
        ))}
      </Grid>
      <div className={classes.btnContainer}>
        <Button variant="outlined" className={classes.button}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
