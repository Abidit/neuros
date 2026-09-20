import { useEffect, useState } from 'react';

import { useScrollReveal } from '@/hooks/useScrollReveal';

export type NavbarMenuState = 'closed' | 'open';
export type NavbarScrollState = 'top' | 'scrolled';

export interface UseNavbarModelResult {
  readonly isMenuOpen: boolean;
  readonly menuState: NavbarMenuState;
  readonly scrollState: NavbarScrollState;
  readonly handleMenuToggle: () => void;
}

export const useNavbarModel = (): UseNavbarModelResult => {
  useScrollReveal();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuState: NavbarMenuState = isMenuOpen ? 'open' : 'closed';
  const scrollState: NavbarScrollState = isScrolled ? 'scrolled' : 'top';
  const handleMenuToggle = (): void => {
    setIsMenuOpen((currentState) => !currentState);
  };

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    handleMenuToggle,
    isMenuOpen,
    menuState,
    scrollState,
  };
};
