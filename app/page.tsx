import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServiceSection from '@/components/ServiceSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import type { ServiceItem } from '@/types';
import GallerySlides from '@/components/GallerySlides';
import MainSection from '@/components/MainSection';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'WE BUILD YOUR DREAM AROUND YOU',
    subtitle: 'Our Approach',
    description: 'We believe every couple deserves a wedding that truly reflects their love story. Our personalized approach ensures that every detail, from the grandest gesture to the smallest touch, is uniquely yours.',
    image: '/images/section-1.png',
    reversed: false,
  },
  {
    id: '2',
    title: 'WE PLAN YOUR DAY TO PERFECTION',
    subtitle: 'Full Service Planning',
    description: 'From concept to execution, we handle every aspect of your wedding planning. Our comprehensive services include venue selection, vendor coordination, design, timeline management, and on-the-day coordination.',
    image: '/images/section-2.png',
    reversed: true,
  },
  {
    id: '3',
    title: 'PLANNING YOUR PERFECT WEDDING IS OUR PASSION',
    subtitle: 'Why Choose Us',
    description: 'With years of experience and a genuine love for what we do, we bring expertise, creativity, and dedication to every wedding. Our goal is to make the planning process as joyful as the wedding day itself.',
    image: '/images/section-3.png',
    reversed: false,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      {/* <Hero /> */}
      <MainSection />
      
      <section id="services">
        {services.map((service) => (
          <ServiceSection key={service.id} service={service} />
        ))}
      </section>
      <GallerySlides />
      <ContactForm />
      <Footer />
    </main>
  );
}