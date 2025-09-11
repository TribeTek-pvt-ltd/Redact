'use client';

import SecondaryHero from '@/components/secondaryHero';
import HorizontalServiceCard from '@/components/horizontalServiceCard';
import { FaVideo, FaPaintBrush, FaFilm, FaCamera } from 'react-icons/fa'; // Import icons
import Footer from '@/components/footer';
import FooterNav from '@/components/footerNav';
import RecentWorksSection from "@/components/RecentworksSection";


export default function Services() {
  const services = [
    { title: 'Video Editing', Icon: FaVideo },
    { title: 'Graphic Design', Icon: FaPaintBrush },
    { title: 'Animation', Icon: FaFilm },
    { title: 'Photography', Icon: FaCamera },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SecondaryHero
        heading={'Our Services'}
        body="We offer a wide range of creative services designed to bring your vision to life. Explore our expertise and see how we can help you succeed."
        aria-label="Our Services Section"
      />
      <div className="py-12 from-gray-900 to-gray-800 flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            {services.map((service, index) => (
              <HorizontalServiceCard
                key={index}
                title={service.title}
                Icon={service.Icon}
                aria-label={`${service.title} Service Details`}
              />
            ))}
          </div>
        </div>
      </div>
      <RecentWorksSection />
      <Footer />
      <FooterNav />
    </div>
  );
}