
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import Benefits from '@/components/Benefits';
import About from '@/components/About';
import Founder from '@/components/Founder';
import Services from '@/components/Services';
import Process from '@/components/Process';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Benefits />
      <About />
      <Founder />
      <Services />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
