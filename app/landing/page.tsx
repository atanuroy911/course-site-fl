// app/Landing/page.tsx
'use client'

import React from 'react';
import Header from '../components/header';
import Banner from '../components/banner';
import Carousel from '../components/carousel';
import Cards from '../components/cards';
import ContentSection from '../components/ContentSection';

const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
]

const imageInfo=[
  { mainText: 'Unlock the power of your people', subText: 'Education Live is trusted by 12.5K+ companies around the world. Find out what we can do for yours.' },
  { mainText: 'Learning for your present', subText: 'Education that gets you Skills for your present (and your future). Get started with us.' },
  { 
    mainText: 'Empower your workforce with our cutting-edge training solutions', 
    subText: 'Drive growth and innovation with our comprehensive suite of online courses tailored for businesses. Invest in your employees’ development today!'
},
{ 
    mainText: 'Transform your organization with Education Live', 
    subText: 'Stay ahead of the curve with our industry-leading learning platform. Elevate your team’s skills, productivity, and performance.'
}
]

export default function Page() {
  return (
    <div className="container mx-auto">
      {/* <Header /> */}
      <section className="mt-8">
        {/* <Banner /> */}
        <Carousel images={images} imageInfo={imageInfo}/>
      </section>
      <section>
        <Cards />
      </section>
      {/* Add other sections/components here */}

      <section>
        <ContentSection/>
      </section>
      
    </div>
  );
};

