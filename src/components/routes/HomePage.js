import React, { useRef, useEffect, useState } from 'react';

import Hero from '../Hero';
import PortalTypeOne from '../PortalTypeOne';
import AboutUsPortal from '../AboutUsPortal';
import ContactUsPortal from '../ContactUsPortal';
import LocationPortal from '../LocationPortal';
import { Collapse } from '@material-ui/core';
import useOnScreen from '../../hooks/useOnScreen';
import EventPortal from '../EventPortal';
import MembersPortal from '../MembersPortal';

import {
  aboutUsTitle,
  aboutUsContent,
  aboutUsBtnText,
} from '../../static/aboutUsContent';
import {
  infoObj,
  contactUsTitle,
  contactUsBtnText,
} from '../../static/contactUsContent';
import {
  locationBtnText,
  locationContent,
  locationTitle,
} from '../../static/locationContent';

import visionImage from '../../assets/vision.jpg';
import contactUsImage from '../../assets/contactUs.png';
import locationImage from '../../assets/location.png';

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
      <PortalTypeOne
        title={aboutUsTitle}
        content={aboutUsContent}
        btnText={aboutUsBtnText}
        imgSrc={visionImage}
      />
      <PortalTypeOne
        title={contactUsTitle}
        content={infoObj.businessHours}
        btnText={contactUsBtnText}
        imgSrc={contactUsImage}
        imgLocation="right"
      />
      <PortalTypeOne
        title={locationTitle}
        content={locationContent}
        btnText={locationBtnText}
        imgSrc={locationImage}
      />

      {/* <ContactUsPortal />
      <LocationPortal />
      <Collapse in={isVisibleOnce} timeout={1000} ref={ref}>
        <EventPortal />
      </Collapse>
      <MembersPortal /> */}
    </div>
  );
}
