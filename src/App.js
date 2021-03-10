import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import theme from './Theme';
import HomePage from './components/routes/HomePage';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/locations">
            locations
          </Route>
          <Route exact path="/corporateEvents">
            corporate events
          </Route>
          <Route exact path="/contact">
            contact us
          </Route>
          <Route exact path="/news">
            news
          </Route>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}
