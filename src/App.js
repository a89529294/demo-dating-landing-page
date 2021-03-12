import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import useStateWithLabel from './hooks/useStateWithLabel';

import Header from './components/Header';
import theme from './Theme';
import HomePage from './components/routes/HomePage';
import Footer from './components/Footer';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function App() {
  const classes = useStyles();

  const [tabIndex, setTabIndex] = useStateWithLabel(false, 'tabIndex');
  const [subMenuIndex, setSubMenuIndex] = useStateWithLabel(
    null,
    'subMenuIndex'
  );
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header
          tabIndex={tabIndex}
          setTabIndex={setTabIndex}
          subMenuIndex={subMenuIndex}
          setSubMenuIndex={setSubMenuIndex}
        />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route>
            <div style={{ height: '50vh' }}></div>
          </Route>
        </Switch>
        <Footer
          tabIndex={tabIndex}
          setTabIndex={setTabIndex}
          subMenuIndex={subMenuIndex}
          setSubMenuIndex={setSubMenuIndex}
        />
      </ThemeProvider>
    </BrowserRouter>
  );
}
