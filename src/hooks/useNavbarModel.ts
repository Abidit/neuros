import { useState } from 'react';

export type NavbarMenuState = 'closed' | 'open';

export interface UseNavbarModelResult {
  readonly isMenuOpen: boolean;
  readonly menuState: NavbarMenuState;
  readonly handleMenuToggle: () => void;
}

export const useNavbarModel = (): UseNavbarModelResult => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuState: NavbarMenuState = isMenuOpen ? 'open' : 'closed';
  const handleMenuToggle = (): void => {
    setIsMenuOpen((currentState) => !currentState);
  };

  return { handleMenuToggle, isMenuOpen, menuState };
};
