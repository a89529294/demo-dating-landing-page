import React, { useState, useEffect } from 'react';

export default function useOnScreen(ref, threshold) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = new IntersectionObserver(
    ([entry]) => {
      console.log(entry);
      setIntersecting(entry.isIntersecting);
    },
    { threshold }
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
