import React, { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

const QuickSearch: React.FC = () => {
  const [searchData, setSearchData] = useState({
    city: 'Pahrump',
    minPrice: '',
    maxPrice: '',
    beds: '',
    baths: '',
    propertyType: '',
    keyword: ''
  });

  const sampleQueries = [
    'Under $300k',
    'Pool Homes',
    'New Construction',
    'Acreage'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value
    });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Search data:', searchData);
  };

  return (
    <section id="search" className="bg-[#FAFAF9] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#23303B] mb-4">
            Search Pahrump Homes
          </h2>
          <p className="text-lg text-[#23303B]/70">
            Find your perfect home with our comprehensive MLS search
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
          <form onSubmit={handleSearch} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-[#23303B] mb-2">
                  City/Community
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={searchData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-[#E8D9C5] rounded-xl focus:ring-2 focus:ring-[#D9A441] focus:border-transparent transition-colors"
                  placeholder="Pahrump"
                />
              </div>

              <div>
                <label htmlFor="minPrice" className="block text-sm font-medium text-[#23303B] mb-2">
                  Min Price
                </label>
                <select
                  id="minPrice"
                  name="minPrice"
                  value={searchData.minPrice}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-[#E8D9C5] rounded-xl focus:ring-2 focus:ring-[#D9A441] focus:border-transparent transition-colors"
                >
                  <option value="">No Min</option>
                  <option value="100000">$100,000</option>
                  <option value="200000">$200,000</option>
                  <option value="300000">$300,000</option>
                  <option value="400000">$400,000</option>
                  <option value="500000">$500,000</option>
                </select>
              </div>

              <div>
                <label htmlFor="maxPrice" className="block text-sm font-medium text-[#23303B] mb-2">
                  Max Price
                </label>
                <select
                  id="maxPrice"
                  name="maxPrice"
                  value={searchData.maxPrice}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-[#E8D9C5] rounded-xl focus:ring-2 focus:ring-[#D9A441] focus:border-transparent transition-colors"
                >
                  <option value="">No Max</option>
                  <option value="300000">$300,000</option>
                  <option value="400000">$400,000</option>
                  <option value="500000">$500,000</option>
                  <option value="750000">$750,000</option>
                  <option value="1000000">$1,000,000+</option>
                </select>
              </div>

              <div>
                <label htmlFor="beds" className="block text-sm font-medium text-[#23303B] mb-2">
                  Bedrooms
                </label>
                <select
                  id="beds"
                  name="beds"
                  value={searchData.beds}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-[#E8D9C5] rounded-xl focus:ring-2 focus:ring-[#D9A441] focus:border-transparent transition-colors"
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="baths" className="block text-sm font-medium text-[#23303B] mb-2">
                  Bathrooms
                </label>
                <select
                  id="baths"
                  name="baths"
                  value={searchData.baths}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-[#E8D9C5] rounded-xl focus:ring-2 focus:ring-[#D9A441] focus:border-transparent transition-colors"
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>

              <div>
                <label htmlFor="propertyType" className="block text-sm font-medium text-[#23303B] mb-2">
                  Property Type
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  value={searchData.propertyType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-[#E8D9C5] rounded-xl focus:ring-2 focus:ring-[#D9A441] focus:border-transparent transition-colors"
                >
                  <option value="">All Types</option>
                  <option value="single-family">Single Family</option>
                  <option value="condo">Condo</option>
                  <option value="townhome">Townhome</option>
                  <option value="manufactured">Manufactured</option>
                  <option value="land">Land/Lot</option>
                </select>
              </div>

              <div>
                <label htmlFor="keyword" className="block text-sm font-medium text-[#23303B] mb-2">
                  Keyword
                </label>
                <input
                  type="text"
                  id="keyword"
                  name="keyword"
                  value={searchData.keyword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-[#E8D9C5] rounded-xl focus:ring-2 focus:ring-[#D9A441] focus:border-transparent transition-colors"
                  placeholder="Pool, garage, view..."
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <a
                href="#advanced"
                className="inline-flex items-center text-[#9FB29F] hover:text-[#D9A441] transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Advanced Filters
              </a>

              <button
                type="submit"
                className="inline-flex items-center bg-[#D9A441] text-[#23303B] px-8 py-3 rounded-xl font-semibold hover:bg-[#D9A441]/90 transition-all duration-200 hover:shadow-md"
              >
                <Search className="w-5 h-5 mr-2" />
                Search Homes
              </button>
            </div>
          </form>

          {/* Sample Queries */}
          <div className="mt-6 pt-6 border-t border-[#E8D9C5]">
            <p className="text-sm text-[#23303B]/70 mb-3">Popular searches:</p>
            <div className="flex flex-wrap gap-2">
              {sampleQueries.map((query, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-[#E8D9C5]/50 text-[#23303B] rounded-full text-sm hover:bg-[#D9A441]/20 hover:text-[#D9A441] transition-colors"
                >
                  {query}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickSearch;