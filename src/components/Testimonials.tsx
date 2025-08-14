import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah & Mike Johnson',
      location: 'Mountain Falls',
      rating: 5,
      text: 'Marci made our first home purchase stress-free. Her knowledge of Pahrump neighborhoods helped us find the perfect home in Mountain Falls. She was always available to answer questions and guided us through every step.',
      date: 'November 2024'
    },
    {
      id: 2,
      name: 'Robert Chen',
      location: 'Winery District',
      rating: 5,
      text: 'Outstanding negotiation skills! Marci got us $15,000 under asking price and helped us navigate a complex inspection process. Her local connections made everything smoother.',
      date: 'October 2024'
    },
    {
      id: 3,
      name: 'Lisa Martinez',
      location: 'Desert Trails',
      rating: 5,
      text: 'Sold our home in just 12 days! Marci\'s pricing strategy was spot-on, and her marketing brought in multiple offers. Professional, honest, and gets results.',
      date: 'September 2024'
    },
    {
      id: 4,
      name: 'David & Amy Thompson',
      location: 'Calvada Valley',
      rating: 5,
      text: 'We were relocating from California and Marci made it seamless. Her virtual tours and detailed market knowledge helped us choose the right neighborhood before we even visited.',
      date: 'August 2024'
    },
    {
      id: 5,
      name: 'Jennifer Walsh',
      location: 'Artesia',
      rating: 5,
      text: 'Marci went above and beyond during our home search. She was patient with our changing criteria and never pressured us. When we found "the one," she helped us craft a winning offer.',
      date: 'July 2024'
    },
    {
      id: 6,
      name: 'Carlos Rodriguez',
      location: 'Spring Mountain',
      rating: 5,
      text: 'Exceptional service from start to finish. Marci\'s network of contractors, inspectors, and lenders made the buying process smooth. She truly cares about her clients.',
      date: 'June 2024'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="bg-[#E8D9C5]/30 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#23303B] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-[#23303B]/70">
            Real experiences from families who trusted us with their biggest investment
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#D9A441]/20 hover:bg-[#D9A441] text-[#23303B] hover:text-white rounded-full flex items-center justify-center transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#D9A441]/20 hover:bg-[#D9A441] text-[#23303B] hover:text-white rounded-full flex items-center justify-center transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Testimonial Content */}
            <div className="text-center px-8">
              {/* Star Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#D9A441] fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg lg:text-xl text-[#23303B] leading-relaxed mb-8 font-medium">
                "{currentTestimonial.text}"
              </blockquote>

              {/* Attribution */}
              <div className="space-y-2">
                <div className="text-lg font-semibold text-[#23303B]">
                  {currentTestimonial.name}
                </div>
                <div className="text-[#9FB29F]">
                  {currentTestimonial.location} • {currentTestimonial.date}
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-[#D9A441]' 
                      : 'bg-[#E8D9C5] hover:bg-[#D9A441]/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="#all-reviews"
              className="inline-flex items-center text-[#D9A441] hover:text-[#23303B] font-semibold transition-colors duration-200"
            >
              Read 50+ More Reviews
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;