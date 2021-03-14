import React, { useState, useRef, useEffect } from 'react';
import Hero from '../Hero';
import AboutUsPortal from '../AboutUsPortal';
import ContactUsPortal from '../ContactUsPortal';
import LocationPortal from '../LocationPortal';
import { Collapse } from '@material-ui/core';
import useOnScreen from '../../hooks/useOnScreen';
import EventPortal from '../EventPortal';
import MembersPortal from '../MembersPortal';

export default function HomePage() {
  const ref = useRef();
  const isVisible = useOnScreen(ref, 0.3, 1000);

  useEffect(() => {
    console.log(isVisible);
  }, [isVisible]);

  return (
    <div>
      <Hero />
      <AboutUsPortal />
      <ContactUsPortal />
      <LocationPortal />
      {/* <Collapse in={isVisible} timeout={2000} ref={ref}> */}
      <Collapse in={true} timeout={2000} ref={ref}>
        <EventPortal />
      </Collapse>
      <MembersPortal />
    </div>
  );
}
