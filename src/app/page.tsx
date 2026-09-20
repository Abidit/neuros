import type { ReactElement } from 'react';

import { Hero } from '@/components/sections/Hero';
import { Navbar } from '@/components/sections/Navbar';
import { Applications } from '@/components/sections/Applications';
import { Footer } from '@/components/sections/Footer';
import { SocialProof } from '@/components/sections/SocialProof';
import { Strategies } from '@/components/sections/Strategies';
import { Testimonials } from '@/components/sections/Testimonials';
import { TrialCta } from '@/components/sections/TrialCta';

const MAIN_CLASS = 'min-h-screen bg-background-primary';

const Home = (): ReactElement => (
  <>
    <Navbar />
    <main className={MAIN_CLASS}>
      <Hero />
      <SocialProof />
      <Strategies />
      <Testimonials />
      <TrialCta />
      <Applications />
    </main>
    <Footer />
  </>
);

export default Home;
