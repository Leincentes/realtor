import React from 'react';
import { Search, Star, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-[#E8D9C5]/30 to-[#9FB29F]/20 py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAF9]/95 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-[#23303B] leading-tight">
                Find your place in{' '}
                <span className="text-[#D9A441]">Pahrump</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-[#23303B]/80 leading-relaxed max-w-xl">
                Friendly, expert guidance from a local who knows every cul-de-sac and view. 
                Whether you're buying, selling, or investing, I'll help you move with confidence.
              </p>
            </div>

            {/* Trust Chips */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center bg-[#FAFAF9]/90 backdrop-blur-sm px-4 py-2 rounded-full border border-[#E8D9C5]">
                <Star className="w-4 h-4 text-[#D9A441] mr-2 fill-current" />
                <span className="text-[#23303B] font-medium">30 Years Experience</span>
              </div>
              <div className="flex items-center bg-[#FAFAF9]/90 backdrop-blur-sm px-4 py-2 rounded-full border border-[#E8D9C5]">
                <Award className="w-4 h-4 text-[#D9A441] mr-2" />
                <span className="text-[#23303B] font-medium">120+ Families Helped</span>
              </div>
              <div className="flex items-center bg-[#FAFAF9]/90 backdrop-blur-sm px-4 py-2 rounded-full border border-[#E8D9C5]">
                <span className="text-[#23303B] font-medium">Local Expert</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#search"
                className="inline-flex items-center justify-center bg-[#D9A441] text-[#23303B] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#D9A441]/90 transition-all duration-200 hover:shadow-lg transform hover:scale-105"
              >
                <Search className="w-5 h-5 mr-2" />
                Browse Listings
              </a>
              
              <a
                href="#valuation"
                className="inline-flex items-center justify-center border-2 border-[#23303B] text-[#23303B] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#23303B] hover:text-[#FAFAF9] transition-all duration-200"
              >
                Get Free Valuation
              </a>
              
              <a
                href="#contact"
                className="inline-flex items-center justify-center text-[#23303B] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#E8D9C5]/50 transition-all duration-200"
              >
                Schedule a Call
              </a>
            </div>
          </div>

          {/* Hero Image - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/src/assets/3rd.webp"
                alt="Stunning desert home with pool and mountain views in Pahrump, Nevada"
                className="w-full h-[500px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#23303B]/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;