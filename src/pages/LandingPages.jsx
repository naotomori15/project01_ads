import React, { useEffect } from 'react';
import Header from '../parts/Header';
import Hero from '../parts/Hero';
import Content from '../parts/Content';
import SliderContent from '../parts/SliderContent';
import ContentTwo from '../parts/ContentTwo';
import OurTeam from '../parts/OurTeam';
import Testimonial from '../parts/Testimonial';
import Contact from '../parts/Contact';
import Footer from '../parts/Footer';
import SEO from '../components/SEO/SeoContent';

export default function LandingPages() {
  return (
    <>
      <div>
        <SEO
          title='Consultant Space'
          name='Space'
          type='website'
          description='Kami melayani konsultasi untuk bisnis anda.'
          url='https://dijaminhoki-ads.site/project06/smartwatch/'
          imageUrl='https://source.unsplash.com/random/300x200/?business'
        />
      </div>
      <Header />
      <Hero />
      <main>
        <Content />
        <SliderContent />
        <ContentTwo />
        <OurTeam />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
