import type { ReactElement } from 'react';

import { Navbar } from '@/components/sections/Navbar';

const MAIN_CLASS = 'min-h-screen bg-background-primary';

const Home = (): ReactElement => (
  <main className={MAIN_CLASS}>
    <Navbar />
  </main>
);

export default Home;
