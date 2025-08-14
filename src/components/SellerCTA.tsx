import React, { useState } from 'react';
import { Home, ArrowRight } from 'lucide-react';

const SellerCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    address: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Valuation request:', formData);
  };

  return (
    <section id="valuation" className="bg-[#23303B] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D9A441] rounded-2xl mb-6">
            <Home className="w-8 h-8 text-[#23303B]" />
          </div>
          
          <h2 className="text-3xl font-bold text-[#FAFAF9] mb-4">
            Curious what your home is worth?
          </h2>
          
          <p className="text-xl text-[#FAFAF9]/80 max-w-2xl mx-auto">
            Get a free, no-obligation valuation with a custom pricing roadmap tailored to current market conditions.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-[#FAFAF9] rounded-2xl p-8 shadow-xl">
            <div className="space-y-6">
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-[#23303B] mb-2">
                  Property Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 border border-[#E8D9C5] rounded-xl focus:ring-2 focus:ring-[#D9A441] focus:border-transparent transition-colors text-lg"
                  placeholder="Enter your home address"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#23303B] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-[#E8D9C5] rounded-xl focus:ring-2 focus:ring-[#D9A441] focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#23303B] mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-[#E8D9C5] rounded-xl focus:ring-2 focus:ring-[#D9A441] focus:border-transparent transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#D9A441] text-[#23303B] py-4 rounded-xl font-semibold text-lg hover:bg-[#D9A441]/90 transition-all duration-200 hover:shadow-md flex items-center justify-center"
              >
                Get My Free Valuation
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>

            <p className="text-sm text-[#23303B]/60 text-center mt-4">
              No spam. We'll never sell your info. Typically delivered within 24 hours.
            </p>
          </form>
        </div>

        <div className="text-center mt-8">
          <p className="text-[#FAFAF9]/60">
            Have questions? <a href="#contact" className="text-[#D9A441] hover:underline">Schedule a call</a> instead.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SellerCTA;