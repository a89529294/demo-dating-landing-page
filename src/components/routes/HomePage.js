import React from 'react';
import { Grid } from '@material-ui/core';
import Hero from '../Hero';

export default function HomePage() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Hero />
      </Grid>
    </Grid>
  );
}
