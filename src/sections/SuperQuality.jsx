import React, { useState, useEffect } from 'react';
import Button from "../components/Button"
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      heading: 'Welcome to Richion Digitals - Premium Quality for You',
      text1: 'At Richion Digitals, we believe in delivering the best quality products to our customers. From fashion to accessories, each item is handpicked to ensure a perfect blend of style and comfort.',
      text2: 'Visit us today to discover why we are the top choice for premium shopping.',
      image: shoe8, // Update with your actual image
    },
    {
      heading: 'Explore Richion Digitals\' Exclusive Collection',
      text1: 'Our wide range of fashion items caters to all tastes, ensuring there’s something for everyone. Richion Digitals brings you the latest trends at unbeatable prices.',
      text2: 'Get started to enjoy our exclusive offers and discounts!',
      image: shoe8, // Update with your actual image
    },
    {
      heading: 'Richion Digitals - Quality You Can Trust',
      text1: 'With a focus on customer satisfaction, we guarantee quality in every purchase. Whether you are shopping for everyday essentials or luxury items, Richion Digitals has got you covered.',
      text2: 'Join the Richion family and experience shopping like never before.',
      image: shoe8, // Update with your actual image
    },
  ];

  // Automatically cycle through slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          {slides[currentSlide].heading}
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">{slides[currentSlide].text1}</p>
        <p className="mt-6 lg:max-w-lg info-text">{slides[currentSlide].text2}</p>
        <div className="mt-11">
          <Button linkURL={"https://play.google.com/store/apps/details?id=com.richion.mobile&hl=en_US"} label='Get Started' imgAlt="arrow right" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          src={slides[currentSlide].image}
          alt="Richion Digitals"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
