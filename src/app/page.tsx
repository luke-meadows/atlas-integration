import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { Focus } from '@/components/sections/Focus';
import { Services } from '@/components/sections/Services';
import { Agentforce } from '@/components/sections/Agentforce';
import { HubSpot } from '@/components/sections/HubSpot';
import { Industries } from '@/components/sections/Industries';
import { Work } from '@/components/sections/Work';
import { Process } from '@/components/sections/Process';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Focus />
        <Services />
        <Agentforce />
        <HubSpot />
        <Industries />
        <Work />
        <Process />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
