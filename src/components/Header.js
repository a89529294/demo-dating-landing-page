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

import useStateWithLabel from '../hooks/useStateWithLabel';

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

const aboutUsTabDatasetId = 'aboutUsTab';

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  const [tabIndex, setTabIndex] = useState(false);

  const [aboutUsMenuIndex, setAboutUsMenuIndex] = useState(null);
  const [aboutUsAnchorEl, setAboutUsAnchorEl] = useState(null);
  const [openAboutUsMenu, setOpenAboutUsMenu] = useStateWithLabel(
    false,
    'openAboutUsMenu'
  );
  const [isMouseOverAboutUsMenu, setIsMouseOverAboutUsMenu] = useStateWithLabel(
    false,
    'isMouseOverAboutUsMenu'
  );
  const [isMouseOverAboutUsTab, setIsMouseOverAboutUsTab] = useStateWithLabel(
    false,
    'isMouseOverAboutUsTab'
  );
  const isMouseOverAboutUsMenuRef = useRef();

  const [membersMenuIndex, setMembersMenuIndex] = useState(null);
  const [membersAnchorEL, setMembersAnchorEL] = useState(null);
  const [openMembersMenu, setOpenMembersMenu] = useState(false);
  const [isMouseOverMembersMenu, setIsMouseOverMembersMenu] = useState(false);
  const [isMouseOverMembersTab, setIsMouseOverMembersTab] = useState(false);
  const isMouseOverMembersMenuRef = useRef();

  const routes = [
    {
      label: '關於我們',
      onMouseEnter: (e) => {
        handleMouseOverAboutUsTab(e);
      },
      onMouseOut: (e) => {},
      dataAttribute: aboutUsTabDatasetId,
    },
    { label: '活動', to: '/events' },
    {
      label: '會員',
      onMouseEnter: (e) => {
        handleMouseOverMembersTab(e);
      },
      onMouseOut: () => {},
      dataAttribute: 'membersTab',
    },
    { label: '專案', to: '/plans' },
    { label: '最新消息', to: '/latestNews' },
  ];

  const aboutUsMenuOptions = [
    { to: '/about', label: '公司理念' },
    { to: '/contact', label: '聯絡我們' },
    { to: '/location', label: '公司地址' },
  ];

  const membersMenuOptions = [
    { to: '/members', label: '俊男美女' },
    { to: 'requirements', label: '入會條件' },
  ];

  const latestNewsMenuOptions = [
    { to: '/news', label: '公告' },
    { to: 'articles', label: '心得文章' },
  ];

  const handleMouseOverAboutUsTab = (event) => {
    setAboutUsAnchorEl(event.currentTarget);
    console.log('??');
    setOpenAboutUsMenu(true);
    setIsMouseOverAboutUsTab(true);

    const mousemoveCallback = (e) => {
      const elements = document.elementsFromPoint(e.clientX, e.clientY);

      const test = elements.some(
        (ele) =>
          ele.dataset.id === aboutUsTabDatasetId ||
          ele.classList.contains('MuiMenu-list')
      );

      if (!test) {
        setIsMouseOverAboutUsTab(false);
        console.log(1);
        setOpenAboutUsMenu(false);
        document.removeEventListener('mousemove', mousemoveCallback);
      }
    };

    setTimeout(() => {
      document.addEventListener('mousemove', mousemoveCallback);
    }, 100);
  };

  const handleCloseAboutUsMenuOnLeave = () => {
    setIsMouseOverAboutUsMenu(false);

    const mousemoveCallback = (e) => {
      const elements = document.elementsFromPoint(e.clientX, e.clientY);
      console.log(elements);
      const test = elements.some(
        (ele) => ele.dataset.id === aboutUsTabDatasetId
      );
      if (!test) {
        setAboutUsAnchorEl(null);
        setOpenAboutUsMenu(false);
      }
      document.removeEventListener('mousemove', mousemoveCallback);
    };

    setTimeout(() => {
      document.addEventListener('mousemove', mousemoveCallback);
    }, 100);
  };

  const handleCloseAboutUsMenu = () => {
    setAboutUsAnchorEl(null);
    setOpenAboutUsMenu(false);
    setIsMouseOverAboutUsMenu(false);
  };

  const handleAboutUsMenuItemClick = (e, i) => {
    handleCloseAboutUsMenu();
    setAboutUsMenuIndex(i);
    setIsMouseOverAboutUsTab(false);
  };

  const handleMouseOverMembersTab = (event) => {
    setMembersAnchorEL(event.currentTarget);
    setOpenMembersMenu(true);
    setIsMouseOverMembersTab(true);
  };

  const handleCloseMembersMenu = () => {
    setMembersAnchorEL(null);
    setOpenMembersMenu(false);
    setIsMouseOverMembersMenu(false);
  };

  const handleMembersMenuItemClick = (e, i) => {
    handleCloseMembersMenu();
    setMembersMenuIndex(i);
    setIsMouseOverMembersTab(false);
  };

  useEffect(() => {
    const pathname = window.location.pathname;

    switch (pathname) {
      case '/':
        setTabIndex(false);
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
    isMouseOverAboutUsMenuRef.current = isMouseOverAboutUsMenu;
  }, [isMouseOverAboutUsMenu]);

  useEffect(() => {
    isMouseOverMembersMenuRef.current = isMouseOverMembersMenu;
  }, [isMouseOverMembersMenu]);

  return (
    <AppBar className={classes.appbar} elevation={0} id="header">
      <Toolbar className={classes.appbarWrapper}>
        <h1 className={classes.appbarTitle}>
          <Button
            className={classes.logoButton}
            component={Link}
            to="/"
            onClick={() => setTabIndex(false)}
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
              {routes.map((route, i) => {
                return route.dataAttribute ? (
                  <Tab
                    className={classes.tab}
                    label={route.label}
                    onMouseEnter={(e) => {
                      route.onMouseEnter(e);
                    }}
                    onMouseOut={(e) => route.onMouseOut(e)}
                    key={i}
                    data-id={route.dataAttribute}
                  ></Tab>
                ) : (
                  <Tab
                    className={classes.tab}
                    label={route.label}
                    component={Link}
                    to={route.to}
                    key={i}
                  ></Tab>
                );
              })}
            </Tabs>
            <Menu
              anchorEl={aboutUsAnchorEl}
              open={openAboutUsMenu}
              onClose={handleCloseAboutUsMenu}
              MenuListProps={{
                onMouseLeave: handleCloseAboutUsMenuOnLeave,
                onMouseEnter: () => {
                  console.log(2);
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
              {aboutUsMenuOptions.map((option, i) => (
                <MenuItem
                  onClick={(e) => {
                    handleAboutUsMenuItemClick(e, i);
                    setTabIndex(0);
                  }}
                  component={Link}
                  to={option.to}
                  classes={{
                    root: classes.menuItem,
                    selected: classes.menuItemSelected,
                  }}
                  selected={aboutUsMenuIndex === i && tabIndex === 0}
                  key={i}
                >
                  {option.label}
                </MenuItem>
              ))}
            </Menu>
            <Menu
              anchorEl={membersAnchorEL}
              open={openMembersMenu}
              onClose={handleCloseMembersMenu}
              MenuListProps={{
                onMouseLeave: handleCloseMembersMenu,
                onMouseEnter: () => {
                  setIsMouseOverMembersMenu(true);
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
              {membersMenuOptions.map((option, i) => (
                <MenuItem
                  onClick={(e) => {
                    handleMembersMenuItemClick(e, i);
                    setTabIndex(2);
                  }}
                  component={Link}
                  to={option.to}
                  classes={{
                    root: classes.menuItem,
                    selected: classes.menuItemSelected,
                  }}
                  selected={aboutUsMenuIndex === i && tabIndex === 2}
                  key={i}
                >
                  {option.label}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : null}
      </Toolbar>
    </AppBar>
  );
}
