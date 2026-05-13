import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { SocialProof } from '@/components/SocialProof';
import { Problems } from '@/components/Problems';
import { HowItWorks } from '@/components/HowItWorks';
import { Services } from '@/components/Services';
import { Differentials } from '@/components/Differentials';
import { Store } from '@/components/Store';
import { Testimonials } from '@/components/Testimonials';
import { Faq } from '@/components/Faq';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { WhatsAppFAB } from '@/components/WhatsAppFAB';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Problems />
        <HowItWorks />
        <Services />
        <Differentials />
        <Store />
        <Testimonials />
        <Faq />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
