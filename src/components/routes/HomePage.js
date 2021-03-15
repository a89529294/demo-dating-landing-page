import React, { useRef, useEffect, useState } from 'react';
import Hero from '../Hero';
import AboutUsPortal from '../AboutUsPortal';
import ContactUsPortal from '../ContactUsPortal';
import LocationPortal from '../LocationPortal';
import { Collapse } from '@material-ui/core';
import useOnScreen from '../../hooks/useOnScreen';
import EventPortal from '../EventPortal';
import MembersPortal from '../MembersPortal';

export default function HomePage() {
  // const ref = useRef();
  // const isVisible = useOnScreen(ref, 0.3, 1000);
  // const [isVisibleOnce, setIsvisibleOnce] = useState(false);

  // useEffect(() => {
  //   if (isVisible) {
  //     setIsvisibleOnce(true);
  //   }
  // }, [isVisible]);

  return (
    <div>
      <Hero />
      <AboutUsPortal />
      {/* <ContactUsPortal />
      <LocationPortal />
      <Collapse in={isVisibleOnce} timeout={1000} ref={ref}>
        <EventPortal />
      </Collapse>
      <MembersPortal /> */}
    </div>
  );
}
