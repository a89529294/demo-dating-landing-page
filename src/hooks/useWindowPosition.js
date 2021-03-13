import { useLayoutEffect, useState } from 'react';

export default function useWindowPosition(id, titleOrCard) {
  const [animation, setAnimation] = useState(false);

  useLayoutEffect(() => {
    function updatePosition() {
      const offetSetHeight = window.document.getElementById(id).offsetHeight;
      if (titleOrCard === 'title') {
        if (
          window.pageYOffset >= offetSetHeight * 0 &&
          window.pageYOffset < offetSetHeight * 2
        ) {
          setAnimation(true);
        } else {
          setAnimation(false);
        }
      } else {
        if (window.pageYOffset > offetSetHeight * 0.6) {
          setAnimation(true);
        } else {
          setAnimation(false);
        }
      }
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, [id]);
  return animation;
}
