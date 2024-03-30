import { useEffect, useRef, useState } from 'react';

const useFadeInOnScroll = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // Only set isVisible to true if the element is intersecting
      // Do not set it back to false
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    observer.observe(domRef.current);

    return () => observer.unobserve(domRef.current);
  }, []);

  return [isVisible, domRef];
};

export default useFadeInOnScroll;