
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
// import Solution from '@/components/Solution';
// import Benefits from '@/components/Benefits';
import About from '@/components/About';
import TestimonialSection from '@/components/testimonialsvideo';
// import Founder from '@/components/Founder';
import Services from '@/components/Services';
import Testimonials from '@/components/testimonials';
import OurWork from '@/components/Work';
import Process from '@/components/Process';
import CTA from '@/components/contactus';
import Footer from '@/components/Footer';
import AboutFounder from '@/components/founder';
import FounderBrandPitch from '@/components/personalbrandpitch';
// import { CTASection } from '@/components/CTAmains';
// import { Cta2 } from '@/components/CTAmains';
import CTADesigns from '@/components/CTAmains';
import { CTABottomSection } from '@/components/CTAmains';
import { Processcta } from '@/components/CTAmains';
const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Problem />

      {/* <Benefits /> */}
      <About />
   <CTADesigns />
      <AboutFounder/>
      <FounderBrandPitch/>
      {/* <Cta2 /> */}
     <CTABottomSection />
      <Services />
      <OurWork />
      

      <Testimonials />
  <TestimonialSection />
      <Process />
      <Processcta />
         <CTA />
      <Footer />
    </div>
  );
};

export default Index;
