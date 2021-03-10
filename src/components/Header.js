import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Tab,
  Tabs,
  useMediaQuery,
  useTheme,
  Button,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const timeoutLength = 1000;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appbar: {},
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  appbarTitle: {
    width: '10rem',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  titleColor: {
    color: theme.palette.common.green,
  },
  centerTitle: {
    color: 'white',
    fontSize: '3rem',
  },
  goDown: { color: '#5AFF3D', fontSize: '2rem' },
  tabs: {
    marginLeft: 'auto',
    height: '3rem',
    position: 'relative',
    zIndex: 1301,
  },
  tab: {
    ...theme.typography.tab,
    color: 'white',
    minWidth: 10,
    marginLeft: 25,
  },
  logoButton: {
    fontSize: '2rem',
    textTransform: 'none',
    color: 'white',
  },
  menu: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
  },
  menuItemSelected: {
    opacity: 1,
  },
  tabIndicator: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
}));

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  const [tabIndex, setTabIndex] = useState(null);
  const [aboutUsMenuIndex, setAboutUsMenuIndex] = useState(null);
  const [aboutUsAnchorEl, setAboutUsAnchorEl] = useState(null);
  const [openAboutUsMenu, setOpenAboutUsMenu] = useState(false);
  const [isMouseOverAboutUsMenu, setIsMouseOverAboutUsMenu] = useState(false);
  const [isMouseOverAboutUsTab, setIsMouseOverAboutUsTab] = useState(false);
  const myRef = useRef();

  const handleMouseOver = (event) => {
    setAboutUsAnchorEl(event.currentTarget);
    setOpenAboutUsMenu(true);
    setIsMouseOverAboutUsTab(true);
    setTimeout(() => {
      if (myRef.current) return;
      setOpenAboutUsMenu(false);
      setIsMouseOverAboutUsMenu(false);
    }, timeoutLength);
  };

  const handleClose = () => {
    setAboutUsAnchorEl(null);
    setOpenAboutUsMenu(false);
    setIsMouseOverAboutUsMenu(false);
  };

  const handleMenuItemClick = (e, i) => {
    handleClose();
    setAboutUsMenuIndex(i);
    setIsMouseOverAboutUsTab(false);
  };

  useEffect(() => {
    const pathname = window.location.pathname;

    switch (pathname) {
      case '/':
        setTabIndex(null);
        break;
      case '/about':
        setTabIndex(0);
        setAboutUsMenuIndex(0);
        break;
      case '/contact':
        setTabIndex(0);
        setAboutUsMenuIndex(1);
        break;
      case '/location':
        setTabIndex(0);
        setAboutUsMenuIndex(2);
        break;
      case '/events':
        setTabIndex(1);
        break;
      case '/members':
        setTabIndex(2);
        break;
      case '/plans':
        setTabIndex(3);
        break;
      case '/latestNews':
        setTabIndex(4);
        break;
      default:
        break;
    }
  }, []);

  useEffect(() => {
    myRef.current = isMouseOverAboutUsMenu;
  }, [isMouseOverAboutUsMenu]);

  return (
    <AppBar className={classes.appbar} elevation={0} id="header">
      <Toolbar className={classes.appbarWrapper}>
        <h1 className={classes.appbarTitle}>
          <Button
            className={classes.logoButton}
            component={Link}
            to="/"
            onClick={() => setTabIndex(null)}
          >
            17<span className={classes.titleColor}>Marry.</span>
          </Button>
        </h1>
        {matches ? (
          <>
            <Tabs
              value={tabIndex}
              onChange={(e, i) => setTabIndex(i)}
              className={classes.tabs}
              classes={{ indicator: classes.tabIndicator }}
            >
              <Tab
                className={classes.tab}
                label="關於我們"
                component={Link}
                to="/about"
                onMouseEnter={(e) => {
                  if (isMouseOverAboutUsTab) return;
                  handleMouseOver(e);
                }}
                onMouseOut={() => {
                  if (openAboutUsMenu) return;
                  setIsMouseOverAboutUsTab(false);
                }}
              />
              <Tab
                className={classes.tab}
                label="活動"
                component={Link}
                to="/events"
                onMouseEnter={() => console.log('over events')}
              />
              <Tab
                className={classes.tab}
                label="會員"
                component={Link}
                to="/members"
              />
              <Tab
                className={classes.tab}
                label="專案"
                component={Link}
                to="/plans"
              />
              <Tab
                className={classes.tab}
                label="最新消息"
                component={Link}
                to="/latestNews"
              />
            </Tabs>
            <Menu
              anchorEl={aboutUsAnchorEl}
              open={openAboutUsMenu}
              onClose={handleClose}
              MenuListProps={{
                onMouseLeave: handleClose,
                onMouseEnter: () => {
                  setIsMouseOverAboutUsMenu(true);
                },
              }}
              classes={{ paper: classes.menu }}
              elevation={0}
              keepMounted
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              getContentAnchorEl={null}
            >
              <MenuItem
                onClick={(e) => {
                  handleMenuItemClick(e, 0);
                  setTabIndex(0);
                }}
                component={Link}
                to="/about"
                classes={{
                  root: classes.menuItem,
                  selected: classes.menuItemSelected,
                }}
                selected={aboutUsMenuIndex === 0 && tabIndex === 0}
                key={0}
              >
                公司理念
              </MenuItem>
              <MenuItem
                onClick={(e) => {
                  handleMenuItemClick(e, 1);
                  setTabIndex(0);
                }}
                component={Link}
                to="/contact"
                classes={{
                  root: classes.menuItem,
                  selected: classes.menuItemSelected,
                }}
                selected={aboutUsMenuIndex === 1 && tabIndex === 0}
                key={1}
              >
                聯絡我們
              </MenuItem>
              <MenuItem
                onClick={(e) => {
                  handleMenuItemClick(e, 2);
                  setTabIndex(0);
                }}
                component={Link}
                to="/location"
                classes={{
                  root: classes.menuItem,
                  selected: classes.menuItemSelected,
                }}
                selected={aboutUsMenuIndex === 2 && tabIndex === 0}
                key={2}
              >
                公司地址
              </MenuItem>
            </Menu>
          </>
        ) : null}
      </Toolbar>
    </AppBar>
  );
}
