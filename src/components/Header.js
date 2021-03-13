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
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Link } from 'react-router-dom';

import useStateWithLabel from '../hooks/useStateWithLabel';

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
const headerHeight = '6.5rem';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appbar: {
    height: headerHeight,
    [theme.breakpoints.up('lg')]: {
      zIndex: theme.zIndex.appBar,
    },
    [theme.breakpoints.down('md')]: {
      zIndex: theme.zIndex.modal + 1,
    },
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  appbarTitle: {
    width: '10rem',
  },
  appbarWrapper: {
    height: '100%',
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
    zIndex: theme.zIndex.modal + 1,
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
  drawer: {
    backgroundColor: theme.palette.primary.light,
    top: headerHeight,
    height: `calc(100% - ${headerHeight})`,
    color: 'white',
    width: '10rem',
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7,
  },
  drawerItemSelected: {
    opacity: 1,
  },
  drawerIconContainer: {
    '&:hover': { backgroundColor: 'transparent' },
    marginLeft: 'auto',
  },
  drawerIcon: {
    height: 50,
    width: 50,
    color: 'white',
  },
}));

const aboutUsTabDatasetId = 'aboutUsTab';
const membersTabDatasetId = 'membersTab';
const latestNewsTabDatasetId = 'latestNewsTab';

export default function Header({
  tabIndex,
  setTabIndex,
  subMenuIndex,
  setSubMenuIndex,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  const [openDrawer, setOpenDrawer] = useStateWithLabel(false, 'openDrawer');

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

  const aboutUsMenuOptions = [
    { to: '/about', label: '公司理念' },
    { to: '/contact', label: '聯絡我們' },
    { to: '/location', label: '服務據點' },
  ];

  const membersMenuOptions = [
    { to: '/members', label: '俊男美女' },
    { to: '/requirements', label: '入會條件' },
  ];

  const latestNewsMenuOptions = [
    { to: '/news', label: '公告' },
    { to: '/articles', label: '心得文章' },
  ];

  const routes = [
    {
      label: '關於我們',
      onMouseEnter: (e) => {
        handleMouseOverAboutUsTab(e);
      },
      onMouseOut: (e) => {},
      dataAttribute: aboutUsTabDatasetId,
      subMenu: aboutUsMenuOptions,
    },
    { label: '活動', to: '/events' },
    {
      label: '會員',
      onMouseEnter: (e) => {
        handleMouseOverMembersTab(e);
      },
      onMouseOut: () => {},
      dataAttribute: membersTabDatasetId,
      subMenu: membersMenuOptions,
    },
    { label: '專案', to: '/plans' },
    {
      label: '最新消息',
      onMouseEnter: (e) => {
        handleMouseOverLatestNewsTab(e);
      },
      onMouseOut: (e) => {},
      dataAttribute: latestNewsTabDatasetId,
      subMenu: latestNewsMenuOptions,
    },
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
    setSubMenuIndex(i);
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
    setSubMenuIndex(i);
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
    setSubMenuIndex(i);
    setIsMouseOverLatestNewsTab(false);
  };

  useEffect(() => {
    const pathname = window.location.pathname;

    switch (pathname) {
      case '/':
        setTabIndex(false);
        setSubMenuIndex(null);

        break;
      case '/about':
        setTabIndex(0);
        setSubMenuIndex(0);

        break;
      case '/contact':
        setTabIndex(0);
        setSubMenuIndex(1);

        break;
      case '/location':
        setTabIndex(0);
        setSubMenuIndex(2);

        break;
      case '/events':
        setTabIndex(1);
        setSubMenuIndex(null);

        break;
      case '/members':
        setTabIndex(2);
        setSubMenuIndex(0);
        break;
      case '/requirements':
        setTabIndex(2);
        setSubMenuIndex(1);
        break;
      case '/plans':
        setTabIndex(3);
        setSubMenuIndex(null);
        break;
      case '/news':
        setTabIndex(4);
        setSubMenuIndex(0);
        break;
      case '/articles':
        setTabIndex(4);
        setSubMenuIndex(1);

        break;
      default:
        break;
    }
  }, [window.location.pathname]);

  useEffect(() => {
    isMouseOverAboutUsMenuRef.current = isMouseOverAboutUsMenu;
  }, [isMouseOverAboutUsMenu]);

  useEffect(() => {
    isMouseOverMembersMenuRef.current = isMouseOverMembersMenu;
  }, [isMouseOverMembersMenu]);

  useEffect(() => {
    isMouseOverLatestNewsMenuRef.current = isMouseOverLatestNewsMenu;
  }, [isMouseOverLatestNewsMenu]);

  const [drawerMenu, setDrawerMenu] = useStateWithLabel(routes, 'drawerMenu');
  const [inMainMenu, setInMainMenu] = useStateWithLabel(true, 'inMainMenu');

  const list = () => {
    return (
      <List>
        {drawerMenu.map((route, index) => {
          const selected = inMainMenu
            ? index === tabIndex
            : index === subMenuIndex;
          return (
            <ListItem
              button
              key={index}
              component={route.subMenu ? 'div' : Link}
              {...(route.to && { to: route.to })}
              onClick={() => {
                if (route.subMenu) {
                  setDrawerMenu(route.subMenu);
                  setInMainMenu(false);
                } else {
                  setOpenDrawer(false);
                  setInMainMenu(true);
                  setDrawerMenu(routes);
                }
              }}
              selected={selected}
              divider
            >
              <ListItemText
                className={
                  selected
                    ? [classes.drawerItemSelected, classes.drawerItem].join(' ')
                    : classes.drawerItem
                }
              >
                {route.label}
              </ListItemText>
            </ListItem>
          );
        })}
      </List>
    );
  };

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        {!inMainMenu && (
          <ListItem
            button
            onClick={() => {
              setInMainMenu(true);
              setDrawerMenu(routes);
            }}
          >
            <ListItemText primary="返回" className={classes.drawerItem} />
            <ChevronLeftIcon style={{ opacity: 0.7 }} />
          </ListItem>
        )}
        {list()}
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );

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
                    onClick={() => {
                      setSubMenuIndex(null);
                    }}
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
                  selected={subMenuIndex === i && tabIndex === 0}
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
                  selected={subMenuIndex === i && tabIndex === 2}
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
                  selected={subMenuIndex === i && tabIndex === 4}
                  key={i}
                >
                  {option.label}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          drawer
        )}
      </Toolbar>
    </AppBar>
  );
}
