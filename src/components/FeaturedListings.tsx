import React from 'react';
import { Bed, Bath, Square, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

interface Listing {
  id: number;
  price: string;
  address: string;
  beds: number;
  baths: number;
  sqft: string;
  neighborhood: string;
  image: string;
  badge?: string;
}

const FeaturedListings: React.FC = () => {
  const listings: Listing[] = [
    {
      id: 1,
      price: '$285,000',
      address: '123 Desert View Dr',
      beds: 3,
      baths: 2,
      sqft: '1,845',
      neighborhood: 'Mountain Falls',
      image: 'https://raw.githubusercontent.com/Leincentes/realtor/refs/heads/main/src/assets/1st.webp',
      badge: 'New'
    },
    {
      id: 2,
      price: '$425,000',
      address: '456 Sagebrush Lane',
      beds: 4,
      baths: 3,
      sqft: '2,340',
      neighborhood: 'Winery District',
      image: 'https://raw.githubusercontent.com/Leincentes/realtor/refs/heads/main/src/assets/2nd.webp',
      badge: 'Open House'
    },
    {
      id: 3,
      price: '$195,000',
      address: '789 Cactus Circle',
      beds: 2,
      baths: 2,
      sqft: '1,200',
      neighborhood: 'Desert Trails',
      image: 'https://raw.githubusercontent.com/Leincentes/realtor/refs/heads/main/src/assets/4th.webp'
    },
    {
      id: 4,
      price: '$560,000',
      address: '321 Valley Vista Way',
      beds: 5,
      baths: 4,
      sqft: '3,100',
      neighborhood: 'Calvada Valley',
      image: 'https://raw.githubusercontent.com/Leincentes/realtor/refs/heads/main/src/assets/5th.webp'
    }
  ];

  return (
    <section className="bg-[#E8D9C5]/30 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#23303B] mb-4">
            Featured Listings
          </h2>
          <p className="text-lg text-[#23303B]/70">
            Discover exceptional properties in Pahrump's most desirable neighborhoods
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="relative">
                <img
                  src={listing.image}
                  alt={`${listing.address} - ${listing.neighborhood}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {listing.badge && (
                  <div className="absolute top-4 left-4 bg-[#D9A441] text-[#23303B] px-3 py-1 rounded-full text-sm font-semibold">
                    {listing.badge}
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#23303B] px-3 py-1 rounded-full text-lg font-bold">
                  {listing.price}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-[#23303B] leading-tight">
                    {listing.address}
                  </h3>
                </div>

                <div className="flex items-center text-[#9FB29F] mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{listing.neighborhood}</span>
                </div>

                <div className="flex items-center justify-between text-[#23303B]/70 mb-4">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />
                    <span className="text-sm">{listing.beds} beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />
                    <span className="text-sm">{listing.baths} baths</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="w-4 h-4 mr-1" />
                    <span className="text-sm">{listing.sqft} sq ft</span>
                  </div>
                </div>

                <button className="w-full bg-[#23303B] text-[#FAFAF9] py-3 rounded-xl font-medium hover:bg-[#23303B]/90 transition-colors duration-200">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#all-listings"
            className="inline-flex items-center text-[#D9A441] hover:text-[#23303B] font-semibold text-lg transition-colors duration-200"
          >
            See All Listings
            <ChevronRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;