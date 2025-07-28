import { lazy, Suspense } from 'react';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Footer from '@/components/Footer';

// Lazily loaded components (loaded only when needed)
const About = lazy(() => import('@/components/About'));
const TestimonialSection = lazy(() => import('@/components/testimonialsvideo'));
const Services = lazy(() => import('@/components/Services'));
const Testimonials = lazy(() => import('@/components/testimonials'));
const OurWork = lazy(() => import('@/components/Work'));
const Process = lazy(() => import('@/components/Process'));
const CTA = lazy(() => import('@/components/contactus'));
const AboutFounder = lazy(() => import('@/components/founder'));
const FounderBrandPitch = lazy(() => import('@/components/personalbrandpitch'));
const CTADesigns = lazy(() => import('@/components/CTAmains'));
const CTABottomSection = lazy(() =>
  import('@/components/CTAmains').then((m) => ({ default: m.CTABottomSection }))
);
const Processcta = lazy(() =>
  import('@/components/CTAmains').then((m) => ({ default: m.Processcta }))
);
const MovingLogoStrip = lazy(() =>
  import('@/components/CTAmains').then((m) => ({ default: m.MovingLogoStrip }))
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Problem />

      <Suspense fallback={<div className="text-center py-10">Loading sections...</div>}>
        <About />
        <CTADesigns />
        <AboutFounder />
        <FounderBrandPitch />
        <CTABottomSection />
        <MovingLogoStrip />
        <Services />
        <OurWork />
        <Testimonials />
        <TestimonialSection />
        <Process />
        <Processcta />
        <CTA />
      </Suspense>

      <Footer />
    </div>
  );
};

export default Index;
