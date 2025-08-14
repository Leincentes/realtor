import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle, Calendar } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Search Homes', href: '#search' },
    { label: 'Sell With Us', href: '#sell' },
    { label: 'Communities', href: '#communities' },
    { label: 'About Marci', href: '#about' },
    { label: 'Resources', href: '#resources' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[#D9A441] text-[#23303B] py-2 px-4 text-sm text-center">
        <span className="font-medium">Free Home Valuation in 60 seconds</span>
        <a href="#valuation" className="ml-2 underline hover:no-underline">
          Get Started →
        </a>
      </div>

      <header className="bg-[#FAFAF9] shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="text-[#23303B]">
                <h1 className="text-xl font-bold">Marci Metzger</h1>
                <p className="text-sm text-[#9FB29F]">REALTOR® | The Ridge Realty Group</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[#23303B] hover:text-[#D9A441] transition-colors duration-200 text-sm font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="bg-[#D9A441] text-[#23303B] px-6 py-2 rounded-xl font-semibold hover:bg-[#D9A441]/90 transition-all duration-200 hover:shadow-md">
                Get Free Valuation
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-[#23303B]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#FAFAF9] border-t border-[#E8D9C5]">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-[#23303B] hover:text-[#D9A441] transition-colors duration-200 py-2 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button className="w-full bg-[#D9A441] text-[#23303B] px-6 py-3 rounded-xl font-semibold hover:bg-[#D9A441]/90 transition-all duration-200 mt-4">
                Get Free Valuation
              </button>
            </div>
          </div>
        )}

        {/* Sticky Contact Dock - Mobile */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#FAFAF9] border-t border-[#E8D9C5] p-4 z-50">
          <div className="flex justify-around">
            <a
              href="tel:+1234567890"
              className="flex flex-col items-center text-[#23303B] hover:text-[#D9A441] transition-colors"
            >
              <Phone size={20} />
              <span className="text-xs mt-1">Call</span>
            </a>
            <a
              href="sms:+1234567890"
              className="flex flex-col items-center text-[#23303B] hover:text-[#D9A441] transition-colors"
            >
              <MessageCircle size={20} />
              <span className="text-xs mt-1">Text</span>
            </a>
            <a
              href="#schedule"
              className="flex flex-col items-center text-[#23303B] hover:text-[#D9A441] transition-colors"
            >
              <Calendar size={20} />
              <span className="text-xs mt-1">Schedule</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;