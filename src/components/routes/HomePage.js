import React from 'react';
import { Grid } from '@material-ui/core';
import Hero from '../Hero';
import AboutUsPortal from '../AboutUsPortal';
import ContactUsPortal from '../ContactUsPortal';

export default function HomePage() {
  return (
    // <Grid container direction="column" spacing={1} justify="flex-start">
    //   <Grid xs={12} item>
    //     <Hero />
    //   </Grid>
    //   <Grid xs={12} item>
    //     <AboutUsPortal />
    //   </Grid>
    //   <Grid xs={12} item>
    //     <ContactUsPortal />
    //   </Grid>
    // </Grid>
    <div>
      <Hero />
      <AboutUsPortal />
      <ContactUsPortal />
    </div>
  );
}
