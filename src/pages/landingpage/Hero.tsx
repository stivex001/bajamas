'use client';
import  { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';



const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'OFFERING SOLID METAL SOLUTIONS',
      subtitle: 'Premium Steel Manufacturing & Fabrication Services',
      description:
        'We provide high-quality steel solutions for construction, industrial, and commercial projects with precision and reliability.',
      buttonText: 'DISCOVER MORE',
      image: '/hero1.png',
    },
    {
      id: 2,
      title: 'EXPERT WELDING & FABRICATION',
      subtitle: 'Advanced Metal Working Technology',
      description:
        'Our skilled craftsmen use cutting-edge equipment to deliver precise welding and fabrication services for all your metal needs.',
      buttonText: 'VIEW SERVICES',
      image: '/hero2.png',
    },
    {
      id: 3,
      title: 'QUALITY STEEL CONSTRUCTION',
      subtitle: 'Building Strong Foundations',
      description:
        'From structural steel to custom metalwork, we deliver durable and reliable solutions that stand the test of time.',
      buttonText: 'GET QUOTE',
      image: '/hero1.png',
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Dark overlay */}
              {/* <div className="bg-opacity-60 absolute inset-0 bg-black"></div> */}
            </div>

            {/* Content */}
            <div className="relative flex h-full items-center">
              <div className="mx-auto w-full max-w-7xl px-4">
                <div className="flex max-w-2xl gap-3">
                  {/* Orange accent line */}
                  <div className="mb-6 h-40 w-3 bg-yellow-500 -ml-4"></div>
                  <div>
                    {/* Main title */}
                    <h1 className="mb-4 text-5xl leading-tight font-bold text-white md:text-6xl">
                      {slide.title}
                    </h1>

                    {/* Subtitle */}
                    {/* <h2 className="mb-6 text-xl font-light text-gray-200 md:text-2xl">
                      {slide.subtitle}
                    </h2> */}

                    {/* Description */}
                    {/* <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-300">
                      {slide.description}
                    </p> */}
                    {/* CTA Button */}
                    <button className="bg-yellow-500 px-8 py-4 text-sm font-semibold tracking-wide text-white transition-colors duration-300 hover:bg-yellow-600">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="bg-opacity-20 hover:bg-opacity-30 absolute top-1/2 left-4 z-10 -translate-y-1/2 transform bg-white p-3 backdrop-blur-sm transition-all duration-300 md:left-8"
      >
        <ArrowLeft className="h-6 w-6 text-[#181614]" />
      </button>

      <button
        onClick={nextSlide}
        className="bg-opacity-20 hover:bg-opacity-30 absolute top-1/2 right-4 z-10 -translate-y-1/2 transform bg-white p-3 backdrop-blur-sm transition-all duration-300 md:right-8"
      >
        <ArrowRight className="h-6 w-6 text-[#181614]" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 transform space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'scale-125 bg-yellow-500'
                : 'bg-opacity-50 hover:bg-opacity-75 bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
