'use client';

import { useState } from 'react';
import Container from '../ui/Container';
import NavBurger from './NavBurger';
import NavList from './NavList';
import Collapse from '../ui/Collapse';
import Logo from '../ui/Logo';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky min-h-[72px] top-0 py-4 bg-slate-800">
      <Container className="transition-all relative">
        <Logo className="absolute left-4 -top-1" />
        <NavBurger isOpen={isOpen} onClick={toggleMenu} />
        <Collapse isOpen={isOpen} className="md:block">
          <NavList />
        </Collapse>
      </Container>
    </nav>
  );
}

export default Nav;
