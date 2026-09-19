import type { ReactElement } from 'react';

import { Hero } from '@/components/sections/Hero';
import { Navbar } from '@/components/sections/Navbar';
import { SocialProof } from '@/components/sections/SocialProof';
import { Strategies } from '@/components/sections/Strategies';

const MAIN_CLASS = 'min-h-screen bg-background-primary';

const Home = (): ReactElement => (
  <main className={MAIN_CLASS}>
    <Navbar />
    <Hero />
    <SocialProof />
    <Strategies />
  </main>
);

export default Home;
