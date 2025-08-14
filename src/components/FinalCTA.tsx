import React from 'react';
import { Search, Home, Calendar, Phone, MessageCircle } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section id="contact" className="bg-[#23303B] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#FAFAF9] mb-4">
            Ready when you are.
          </h2>
          <p className="text-xl text-[#FAFAF9]/80 max-w-2xl mx-auto">
            Let's find your next address. Whether you're buying, selling, or just exploring your options, 
            I'm here to help you move with confidence.
          </p>
        </div>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <a
            href="#search"
            className="inline-flex items-center justify-center bg-[#D9A441] text-[#23303B] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#D9A441]/90 transition-all duration-200 hover:shadow-lg"
          >
            <Search className="w-5 h-5 mr-2" />
            Browse Listings
          </a>
          
          <a
            href="#valuation"
            className="inline-flex items-center justify-center bg-[#FAFAF9] text-[#23303B] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#FAFAF9]/90 transition-all duration-200 hover:shadow-lg"
          >
            <Home className="w-5 h-5 mr-2" />
            Get Free Valuation
          </a>
          
          <a
            href="#schedule"
            className="inline-flex items-center justify-center border-2 border-[#FAFAF9] text-[#FAFAF9] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#FAFAF9] hover:text-[#23303B] transition-all duration-200"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Schedule a Call
          </a>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#FAFAF9] mb-6">
              Get in Touch
            </h3>
            
            <div className="space-y-4">
              <a
                href="tel:+1234567890"
                className="flex items-center p-4 bg-[#FAFAF9]/10 rounded-xl hover:bg-[#FAFAF9]/20 transition-colors duration-200 group"
              >
                <div className="w-12 h-12 bg-[#D9A441] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-[#23303B]" />
                </div>
                <div>
                  <div className="text-[#FAFAF9] font-medium">(123) 456-7890</div>
                  <div className="text-[#FAFAF9]/60 text-sm">Call anytime</div>
                </div>
              </a>

              <a
                href="sms:+1234567890"
                className="flex items-center p-4 bg-[#FAFAF9]/10 rounded-xl hover:bg-[#FAFAF9]/20 transition-colors duration-200 group"
              >
                <div className="w-12 h-12 bg-[#9FB29F] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-[#FAFAF9] font-medium">(123) 456-7890</div>
                  <div className="text-[#FAFAF9]/60 text-sm">Text for quick response</div>
                </div>
              </a>

              <a
                href="https://wa.me/1234567890"
                className="flex items-center p-4 bg-[#FAFAF9]/10 rounded-xl hover:bg-[#FAFAF9]/20 transition-colors duration-200 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-[#FAFAF9] font-medium">WhatsApp</div>
                  <div className="text-[#FAFAF9]/60 text-sm">Message me directly</div>
                </div>
              </a>
            </div>
          </div>

          {/* Office Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#FAFAF9] mb-6">
              Office Location
            </h3>
            
            <div className="bg-[#FAFAF9]/10 rounded-xl p-6">
              <div className="space-y-4">
                <div>
                  <div className="text-[#FAFAF9] font-medium text-lg">Marci Metzger</div>
                  <div className="text-[#FAFAF9]/80">REALTOR®</div>
                </div>
                
                <div>
                  <div className="text-[#FAFAF9]/80">The Ridge Realty Group</div>
                  <div className="text-[#FAFAF9]/60 text-sm">[Brokerage Address]</div>
                  <div className="text-[#FAFAF9]/60 text-sm">Pahrump, NV [ZIP]</div>
                </div>
                
                <div>
                  <div className="text-[#FAFAF9]/60 text-sm">License #: [License Number]</div>
                </div>
              </div>
            </div>

            <div className="bg-[#D9A441]/20 rounded-xl p-4 border border-[#D9A441]/30">
              <div className="text-[#D9A441] font-medium mb-2">Quick Response Promise</div>
              <div className="text-[#FAFAF9]/80 text-sm">
                Typically replies within the same day. Your time matters, and I'm here when you need me.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;