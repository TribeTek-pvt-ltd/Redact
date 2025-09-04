'use client';

import SecondaryHero from './secondaryHero';

export default function WhoAreWe() {
  return (
    <SecondaryHero
      heading={<p>Who We Are</p>} // Updated heading
      body="We are a creative team passionate about bringing your ideas to life through innovative design and technology. Our expertise spans multiple domains, ensuring exceptional results every time." // Updated body
    />
  );
}