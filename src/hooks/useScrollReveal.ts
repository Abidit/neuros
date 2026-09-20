import { useEffect } from 'react';

const REVEAL_SELECTOR = 'main > section, footer';
const OBSERVER_OPTIONS: IntersectionObserverInit = {
  rootMargin: '0px 0px -10% 0px',
  threshold: 0.1,
};

const handleIntersection: IntersectionObserverCallback = (
  entries,
  observer,
): void => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    if (!(entry.target instanceof HTMLElement)) {
      return;
    }

    entry.target.dataset.scrollReveal = 'visible';
    observer.unobserve(entry.target);
  });
};

export const useScrollReveal = (): void => {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR);
    const observer = new IntersectionObserver(
      handleIntersection,
      OBSERVER_OPTIONS,
    );

    elements.forEach((element) => {
      element.dataset.scrollReveal = 'pending';
      observer.observe(element);
    });

    return (): void => {
      observer.disconnect();
    };
  }, []);
};
