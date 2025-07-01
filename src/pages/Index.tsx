
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
// import Solution from '@/components/Solution';
// import Benefits from '@/components/Benefits';
import About from '@/components/About';
// import Founder from '@/components/Founder';
import Services from '@/components/Services';
import Testimonials from '@/components/testimonials';
import OurWork from '@/components/Work';
import Process from '@/components/Process';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import AboutFounder from '@/components/founder';
import FounderBrandPitch from '@/components/personalbrandpitch';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Problem />

      {/* <Benefits /> */}
      <About />
      <AboutFounder/>
      <FounderBrandPitch/>
      <Services />
      <OurWork />
      

      <Testimonials />

      <Process />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
