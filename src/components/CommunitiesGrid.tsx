import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Community {
  id: number;
  name: string;
  description: string;
  image: string;
}

const CommunitiesGrid: React.FC = () => {
  const communities: Community[] = [
    {
      id: 1,
      name: 'Mountain Falls',
      description: 'Golf course living with stunning mountain views and upscale amenities.',
      image: 'https://raw.githubusercontent.com/Leincentes/realtor/refs/heads/main/src/assets/6th.webp'
    },
    {
      id: 2,
      name: 'Winery District',
      description: 'Charming homes near local vineyards and tasting rooms.',
      image: 'https://raw.githubusercontent.com/Leincentes/realtor/refs/heads/main/src/assets/7th.webp'
    },
    {
      id: 3,
      name: 'Desert Trails',
      description: 'Affordable family neighborhoods with easy highway access.',
      image: 'https://raw.githubusercontent.com/Leincentes/realtor/refs/heads/main/src/assets/8th.webp'
    },
    {
      id: 4,
      name: 'Calvada Valley',
      description: 'Spacious lots and custom homes in a peaceful setting.',
      image: 'https://raw.githubusercontent.com/Leincentes/realtor/refs/heads/main/src/assets/9th.webp'
    },
    {
      id: 5,
      name: 'Artesia',
      description: 'Modern development with resort-style amenities.',
      image: 'https://raw.githubusercontent.com/Leincentes/realtor/refs/heads/main/src/assets/11th.webp'
    },
    {
      id: 6,
      name: 'Spring Mountain',
      description: 'Secluded luxury homes with panoramic desert vistas.',
      image: 'https://raw.githubusercontent.com/Leincentes/realtor/refs/heads/main/src/assets/12th.webp'
    }
  ];

  return (
    <section id="communities" className="bg-[#FAFAF9] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#23303B] mb-4">
            Discover Pahrump Communities
          </h2>
          <p className="text-lg text-[#23303B]/70 max-w-2xl mx-auto">
            From golf course luxury to family-friendly neighborhoods, find the perfect community to call home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communities.map((community) => (
            <div
              key={community.id}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={community.image}
                  alt={`${community.name} community in Pahrump, Nevada`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#23303B]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">Explore</span>
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#23303B] mb-3">
                  {community.name}
                </h3>
                <p className="text-[#23303B]/70 leading-relaxed">
                  {community.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#community-guide"
            className="inline-flex items-center bg-[#D9A441] text-[#23303B] px-8 py-4 rounded-xl font-semibold hover:bg-[#D9A441]/90 transition-all duration-200 hover:shadow-md"
          >
            View Complete Community Guide
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CommunitiesGrid;