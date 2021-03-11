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
const membersTabDatasetId = 'membersTab';
const latestNewsTabDatasetId = 'latestNewsTab';

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
  const [membersAnchorEl, setMembersAnchorEl] = useState(null);
  const [openMembersMenu, setOpenMembersMenu] = useStateWithLabel(
    false,
    'openMembersMenu'
  );
  const [isMouseOverMembersMenu, setIsMouseOverMembersMenu] = useStateWithLabel(
    false,
    'isMouseOverMembersMenu'
  );
  const [isMouseOverMembersTab, setIsMouseOverMembersTab] = useStateWithLabel(
    false,
    'isMouseOverMembersTab'
  );
  const isMouseOverMembersMenuRef = useRef();

  const [latestNewsMenuIndex, setLatestNewsMenuIndex] = useState(null);
  const [latestNewsAnchorEl, setLatestNewsAnchorEl] = useState(null);
  const [openLatestNewsMenu, setOpenLatestNewsMenu] = useStateWithLabel(
    false,
    'openLatestNewsMenu'
  );
  const [
    isMouseOverLatestNewsMenu,
    setIsMouseOverLatestNewsMenu,
  ] = useStateWithLabel(false, 'isMouseOverLatestNewsMenu');
  const [
    isMouseOverLatestNewsTab,
    setIsMouseOverLatestNewsTab,
  ] = useStateWithLabel(false, 'isMouseOverLatestNewsTab');
  const isMouseOverLatestNewsMenuRef = useRef();

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
      dataAttribute: membersTabDatasetId,
    },
    { label: '專案', to: '/plans' },
    {
      label: '最新消息',
      onMouseEnter: (e) => {
        handleMouseOverLatestNewsTab(e);
      },
      onMouseOut: (e) => {},
      dataAttribute: latestNewsTabDatasetId,
    },
  ];

  const aboutUsMenuOptions = [
    { to: '/about', label: '公司理念' },
    { to: '/contact', label: '聯絡我們' },
    { to: '/location', label: '公司地址' },
  ];

  const membersMenuOptions = [
    { to: '/members', label: '俊男美女' },
    { to: '/requirements', label: '入會條件' },
  ];

  const latestNewsMenuOptions = [
    { to: '/news', label: '公告' },
    { to: '/articles', label: '心得文章' },
  ];

  const handleMouseOverAboutUsTab = (event) => {
    setAboutUsAnchorEl(event.currentTarget);
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
    setMembersAnchorEl(event.currentTarget);
    setOpenMembersMenu(true);
    setIsMouseOverMembersTab(true);

    const mousemoveCallback = (e) => {
      const elements = document.elementsFromPoint(e.clientX, e.clientY);

      const test = elements.some(
        (ele) =>
          ele.dataset.id === membersTabDatasetId ||
          ele.classList.contains('MuiMenu-list')
      );

      if (!test) {
        setIsMouseOverMembersTab(false);
        setOpenMembersMenu(false);
        document.removeEventListener('mousemove', mousemoveCallback);
      }
    };

    setTimeout(() => {
      document.addEventListener('mousemove', mousemoveCallback);
    }, 100);
  };

  const handleCloseMembersMenuOnLeave = () => {
    setIsMouseOverMembersMenu(false);

    const mousemoveCallback = (e) => {
      const elements = document.elementsFromPoint(e.clientX, e.clientY);
      const test = elements.some(
        (ele) => ele.dataset.id === membersTabDatasetId
      );
      if (!test) {
        setMembersAnchorEl(null);
        setOpenMembersMenu(false);
      }
      document.removeEventListener('mousemove', mousemoveCallback);
    };

    setTimeout(() => {
      document.addEventListener('mousemove', mousemoveCallback);
    }, 100);
  };

  const handleCloseMembersMenu = () => {
    setMembersAnchorEl(null);
    setOpenMembersMenu(false);
    setIsMouseOverMembersMenu(false);
  };

  const handleMembersMenuItemClick = (e, i) => {
    handleCloseMembersMenu();
    setMembersMenuIndex(i);
    setIsMouseOverMembersTab(false);
  };

  const handleMouseOverLatestNewsTab = (event) => {
    setLatestNewsAnchorEl(event.currentTarget);
    setOpenLatestNewsMenu(true);
    setIsMouseOverLatestNewsTab(true);

    const mousemoveCallback = (e) => {
      const elements = document.elementsFromPoint(e.clientX, e.clientY);

      const test = elements.some(
        (ele) =>
          ele.dataset.id === latestNewsTabDatasetId ||
          ele.classList.contains('MuiMenu-list')
      );

      if (!test) {
        setIsMouseOverLatestNewsTab(false);
        setOpenLatestNewsMenu(false);
        document.removeEventListener('mousemove', mousemoveCallback);
      }
    };

    setTimeout(() => {
      document.addEventListener('mousemove', mousemoveCallback);
    }, 100);
  };

  const handleCloseLatestNewsMenuOnLeave = () => {
    setIsMouseOverLatestNewsMenu(false);

    const mousemoveCallback = (e) => {
      const elements = document.elementsFromPoint(e.clientX, e.clientY);
      const test = elements.some(
        (ele) => ele.dataset.id === latestNewsTabDatasetId
      );
      if (!test) {
        setLatestNewsAnchorEl(null);
        setOpenLatestNewsMenu(false);
      }
      document.removeEventListener('mousemove', mousemoveCallback);
    };

    setTimeout(() => {
      document.addEventListener('mousemove', mousemoveCallback);
    }, 100);
  };

  const handleCloseLatestNewsMenu = () => {
    setLatestNewsAnchorEl(null);
    setOpenLatestNewsMenu(false);
    setIsMouseOverLatestNewsMenu(false);
  };

  const handleLatestNewsMenuItemClick = (e, i) => {
    handleCloseLatestNewsMenu();
    setLatestNewsMenuIndex(i);
    setIsMouseOverLatestNewsTab(false);
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
        setMembersMenuIndex(0);
        break;
      case '/requirements':
        setTabIndex(2);
        setMembersMenuIndex(1);
        break;
      case '/plans':
        setTabIndex(3);
        break;
      case '/news':
        setTabIndex(4);
        setLatestNewsMenuIndex(0);
        break;
      case '/articles':
        setTabIndex(4);
        setLatestNewsMenuIndex(1);
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

  useEffect(() => {
    isMouseOverLatestNewsMenuRef.current = isMouseOverLatestNewsMenu;
  }, [isMouseOverLatestNewsMenu]);

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
              anchorEl={membersAnchorEl}
              open={openMembersMenu}
              onClose={handleCloseMembersMenu}
              MenuListProps={{
                onMouseLeave: handleCloseMembersMenuOnLeave,
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
                  selected={membersMenuIndex === i && tabIndex === 2}
                  key={i}
                >
                  {option.label}
                </MenuItem>
              ))}
            </Menu>
            <Menu
              anchorEl={latestNewsAnchorEl}
              open={openLatestNewsMenu}
              onClose={handleCloseLatestNewsMenu}
              MenuListProps={{
                onMouseLeave: handleCloseLatestNewsMenuOnLeave,
                onMouseEnter: () => {
                  setIsMouseOverLatestNewsMenu(true);
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
              {latestNewsMenuOptions.map((option, i) => (
                <MenuItem
                  onClick={(e) => {
                    handleLatestNewsMenuItemClick(e, i);
                    setTabIndex(4);
                  }}
                  component={Link}
                  to={option.to}
                  classes={{
                    root: classes.menuItem,
                    selected: classes.menuItemSelected,
                  }}
                  selected={latestNewsMenuIndex === i && tabIndex === 4}
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
