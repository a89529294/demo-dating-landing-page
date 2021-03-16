import { Typography, Button, Fade } from '@material-ui/core';
import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LabelImportantTwoToneIcon from '@material-ui/icons/LabelImportantTwoTone';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import {
  menRequirementsBg,
  womenRequirementsBg,
  menRquirementsArray,
  womenRequirementArray,
  title,
} from '../static/requirementsContent';
import './RequirementsPortal.css';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  rootBg: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: '0 60%',
    zIndex: -1,
  },
  title: {
    ...theme.typography.homePagePortalTitle,
    marginBottom: '1rem',
    marginTop: '1rem',
  },
  requirementContainer: {
    width: '80%',
  },
  descLine: {
    fontFamily: "'Noto Serif TC', serif",
    fontWeight: 100,
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
  },
}));

const MyButton = ({ label, selectedIndex, index, onClick }) => {
  const classes = useStyles();
  const btnBgColor = 'rgba(0,0,0,0.1)';
  return (
    <Button
      variant="outlined"
      className={classes.title}
      style={{
        backgroundColor: selectedIndex === index ? btnBgColor : 'rgba(0,0,0,0)',
      }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default function RequirementsPortal() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const requirementsArr = selectedIndex
    ? womenRequirementArray
    : menRquirementsArray;

  return (
    <div className={classes.root}>
      <SwitchTransition>
        <CSSTransition
          key={selectedIndex ? 1123 : 222}
          addEndListener={(node, done) =>
            node.addEventListener('transitionend', done, false)
          }
          classNames="fade2"
          appear={true}
        >
          {selectedIndex ? (
            <img className={classes.rootBg} src={womenRequirementsBg} />
          ) : (
            <img className={classes.rootBg} src={menRequirementsBg} />
          )}
        </CSSTransition>
      </SwitchTransition>
      <Typography className={classes.title}>
        <MyButton
          label="男"
          selectedIndex={selectedIndex}
          index={0}
          onClick={() => setSelectedIndex(0)}
        />
        <MyButton
          label="女"
          selectedIndex={selectedIndex}
          index={1}
          onClick={() => setSelectedIndex(1)}
        />

        <span style={{ marginLeft: '1rem' }}>{title}</span>
      </Typography>

      <SwitchTransition>
        <CSSTransition
          key={selectedIndex ? 'Goodbye, world!' : 'Hello, world!'}
          addEndListener={(node, done) =>
            node.addEventListener('transitionend', done, false)
          }
          classNames="fade"
        >
          {selectedIndex ? (
            <div className={classes.requirementContainer}>
              {requirementsArr.map((str, i) => (
                <Typography className={classes.descLine} key={i}>
                  <LabelImportantTwoToneIcon className={classes.icon} />
                  {str}
                </Typography>
              ))}
            </div>
          ) : (
            <div className={classes.requirementContainer}>
              {requirementsArr.map((str, i) => (
                <Typography className={classes.descLine} key={i}>
                  <LabelImportantTwoToneIcon className={classes.icon} />
                  {str}
                </Typography>
              ))}
            </div>
          )}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}
