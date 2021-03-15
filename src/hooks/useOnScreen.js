import React, { useState, useEffect } from 'react';

export default function useOnScreen(ref, threshold, delay = 0) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = new IntersectionObserver(
    ([entry]) => {
      // setTimeout(() => {
      setIntersecting(entry.isIntersecting);
      console.log(entry);
      console.log(observer);
      // }, delay);
    },
    { threshold, root: document.body }
  );

  useEffect(() => {
    observer.observe(ref.current);

    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
}
