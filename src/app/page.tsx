import type { ReactElement } from 'react';

import { Hero } from '@/components/sections/Hero';
import { Navbar } from '@/components/sections/Navbar';

const MAIN_CLASS = 'min-h-screen bg-background-primary';

const Home = (): ReactElement => (
  <main className={MAIN_CLASS}>
    <Navbar />
    <Hero />
  </main>
);

export default Home;
