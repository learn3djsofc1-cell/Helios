/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Scene from './components/Scene';
import FeaturesSection from './components/FeaturesSection';
import CorePlatformFeatures from './components/CorePlatformFeatures';
import EconomySection from './components/EconomySection';
import ModelsSection from './components/ModelsSection';
import RealWorldApplications from './components/RealWorldApplications';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden selection:bg-[#00FF94]/30 selection:text-white">
      <Scene />
      <Navbar />
      <Hero />
      <FeaturesSection />
      <CorePlatformFeatures />
      <EconomySection />
      <ModelsSection />
      <RealWorldApplications />
      <CtaSection />
      <Footer />
    </main>
  );
}
