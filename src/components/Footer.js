import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';

import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';

const useStyles = makeStyles((theme) => ({
  footer: {
    width: '100%',
    zIndex: theme.zIndex.modal + 1,
    backgroundColor: theme.palette.primary.main,
  },
  mainContainer: {},
  link: {
    opacity: 0.7,
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  gridItem: {
    margin: '3rem',
  },
  selected: {
    opacity: 1,
  },
  icon: {
    height: '4rem',
    width: '4rem',
    [theme.breakpoints.down('xs')]: {
      height: '2.5rem',
      width: '2.5rem',
    },
  },
  socialContainer: {
    [theme.breakpoints.down('xs')]: {
      right: '0.6rem',
    },
  },
}));

export default function Footer({
  tabIndex,
  setTabIndex,
  subMenuIndex,
  setSubMenuIndex,
}) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container className={classes.mainContainer} justify="center">
          <Grid item className={classes.gridItem}>
            <Grid direction="column" container spacing={2}>
              <Grid
                item
                className={
                  tabIndex === false
                    ? `${classes.link} ${classes.selected}`
                    : classes.link
                }
                component={Link}
                to="/"
                onClick={() => {
                  setTabIndex(false);
                  setSubMenuIndex(null);
                }}
              >
                首頁
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid direction="column" container spacing={2}>
              <Grid item className={classes.link}>
                關於我們
              </Grid>
              <Grid
                item
                className={
                  tabIndex === 0 && subMenuIndex === 0
                    ? `${classes.link} ${classes.selected}`
                    : classes.link
                }
                component={Link}
                to="/about"
                onClick={() => {
                  setTabIndex(0);
                  setSubMenuIndex(0);
                }}
              >
                公司理念
              </Grid>
              <Grid
                item
                className={
                  tabIndex === 0 && subMenuIndex === 1
                    ? `${classes.link} ${classes.selected}`
                    : classes.link
                }
                component={Link}
                to="/contact"
                onClick={() => {
                  setTabIndex(0);
                  setSubMenuIndex(1);
                }}
              >
                聯絡我們
              </Grid>
              <Grid
                item
                className={
                  tabIndex === 0 && subMenuIndex === 2
                    ? `${classes.link} ${classes.selected}`
                    : classes.link
                }
                component={Link}
                to="/location"
                onClick={() => {
                  setTabIndex(0);
                  setSubMenuIndex(2);
                }}
              >
                公司地址
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid direction="column" container spacing={2}>
              <Grid
                item
                className={
                  tabIndex === 1
                    ? `${classes.link} ${classes.selected}`
                    : classes.link
                }
                component={Link}
                to="/events"
                onClick={() => {
                  setTabIndex(1);
                  setSubMenuIndex(null);
                }}
              >
                活動
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid direction="column" container spacing={2}>
              <Grid item className={classes.link}>
                會員
              </Grid>
              <Grid
                item
                className={
                  tabIndex === 2 && subMenuIndex === 0
                    ? `${classes.link} ${classes.selected}`
                    : classes.link
                }
                component={Link}
                to="/members"
                onClick={() => {
                  setTabIndex(2);
                  setSubMenuIndex(0);
                }}
              >
                俊男美女
              </Grid>
              <Grid
                item
                className={
                  tabIndex === 2 && subMenuIndex === 1
                    ? `${classes.link} ${classes.selected}`
                    : classes.link
                }
                component={Link}
                to="/requirements"
                onClick={() => {
                  setTabIndex(2);
                  setSubMenuIndex(1);
                }}
              >
                入會條件
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid direction="column" container spacing={2}>
              <Grid
                item
                className={
                  tabIndex === 3
                    ? `${classes.link} ${classes.selected}`
                    : classes.link
                }
                component={Link}
                to="/plans"
                onClick={() => {
                  setTabIndex(3);
                  setSubMenuIndex(null);
                }}
              >
                專案
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid direction="column" container spacing={2}>
              <Grid item className={classes.link}>
                最新消息
              </Grid>
              <Grid
                item
                className={
                  tabIndex === 4 && subMenuIndex === 0
                    ? `${classes.link} ${classes.selected}`
                    : classes.link
                }
                component={Link}
                to="/news"
                onClick={() => {
                  setTabIndex(4);
                  setSubMenuIndex(0);
                }}
              >
                公告
              </Grid>
              <Grid
                item
                className={
                  tabIndex === 4 && subMenuIndex === 1
                    ? `${classes.link} ${classes.selected}`
                    : classes.link
                }
                component={Link}
                to="/articles"
                onClick={() => {
                  setTabIndex(4);
                  setSubMenuIndex(1);
                }}
              >
                心得文章
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>

      <Grid
        container
        className={classes.socialContainer}
        justify="flex-end"
        spacing={2}
      >
        <Grid
          item
          component="a"
          href="https://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={facebook} className={classes.icon} />
        </Grid>
        <Grid
          item
          component="a"
          href="https://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={twitter} className={classes.icon} />
        </Grid>
        <Grid
          item
          component="a"
          href="https://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={instagram} className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
}
