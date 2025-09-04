'use client';

import SecondaryHero from '@/components/secondaryHero';
import HorizontalServiceCard from '@/components/horizontalServiceCard';
import { FaVideo, FaPaintBrush, FaFilm, FaCamera } from 'react-icons/fa'; // Import icons
import Footer from "@/components/footer";
import FooterNav from "@/components/footerNav";

export default function Services() {
  const services = [
    { title: 'Video Editing', Icon: FaVideo },
    { title: 'Graphic Design', Icon: FaPaintBrush },
    { title: 'Animation', Icon: FaFilm },
    { title: 'Photography', Icon: FaCamera },
  ];

  return (
    <div >
      <SecondaryHero
        heading={<p>Our Services</p>} // Updated heading
        body="We offer a wide range of creative services designed to bring your vision to life. Explore our expertise and see how we can help you succeed." // Updated body
      />
     <div className="container mx-auto py-1  from-gray-900 to-gray-800">
        <div className=" container mx-auto flex flex-col gap-1 px-4 py-1">
          {services.map((service, index) => (
            <HorizontalServiceCard key={index} title={service.title} Icon={service.Icon} />
          ))}
        </div>
      </div>
      <Footer />
            <FooterNav />
    </div>
  );
}
