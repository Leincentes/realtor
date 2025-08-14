import React from 'react';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Search Homes', href: '#search' },
    { label: 'Sell With Us', href: '#sell' },
    { label: 'About Marci', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  const communities = [
    { label: 'Mountain Falls', href: '#mountain-falls' },
    { label: 'Winery District', href: '#winery-district' },
    { label: 'Desert Trails', href: '#desert-trails' },
    { label: 'Calvada Valley', href: '#calvada-valley' },
    { label: 'Artesia', href: '#artesia' },
    { label: 'Spring Mountain', href: '#spring-mountain' }
  ];

  const resources = [
    { label: 'Buyer Guide', href: '#buyer-guide' },
    { label: 'Seller Guide', href: '#seller-guide' },
    { label: 'Market Reports', href: '#market-reports' },
    { label: 'Blog', href: '#blog' },
    { label: 'Testimonials', href: '#testimonials' }
  ];

  return (
    <footer className="bg-[#23303B] text-[#FAFAF9] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Signup */}
        <div className="bg-[#D9A441]/20 rounded-2xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Stay Updated on Pahrump Real Estate</h3>
              <p className="text-[#FAFAF9]/80 mb-6">
                Get monthly market insights, new listings, and local community news delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-xl bg-[#FAFAF9] text-[#23303B] placeholder-[#23303B]/60 focus:ring-2 focus:ring-[#D9A441] focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#D9A441] text-[#23303B] px-6 py-3 rounded-xl font-semibold hover:bg-[#D9A441]/90 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="relative hidden lg:block">
              <img
                src="https://raw.githubusercontent.com/Leincentes/realtor/refs/heads/main/src/assets/Profile.webp"
                alt="Marci Metzger, your trusted Pahrump REALTOR®"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#D9A441]/20 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Marci Metzger</h2>
              <p className="text-[#9FB29F]">REALTOR® | The Ridge Realty Group</p>
              <p className="text-[#FAFAF9]/60 text-sm mt-2">
                Serving Pahrump & Southern Nevada
              </p>
            </div>
            
            <p className="text-[#FAFAF9]/80 leading-relaxed mb-6">
              Your trusted local expert for buying and selling homes in Pahrump. 
              Committed to providing exceptional service with integrity and expertise.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#facebook"
                className="w-10 h-10 bg-[#FAFAF9]/20 rounded-lg flex items-center justify-center hover:bg-[#D9A441] hover:text-[#23303B] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#instagram"
                className="w-10 h-10 bg-[#FAFAF9]/20 rounded-lg flex items-center justify-center hover:bg-[#D9A441] hover:text-[#23303B] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#linkedin"
                className="w-10 h-10 bg-[#FAFAF9]/20 rounded-lg flex items-center justify-center hover:bg-[#D9A441] hover:text-[#23303B] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#FAFAF9]/70 hover:text-[#D9A441] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Communities */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Communities</h3>
            <ul className="space-y-2">
              {communities.map((community) => (
                <li key={community.label}>
                  <a
                    href={community.href}
                    className="text-[#FAFAF9]/70 hover:text-[#D9A441] transition-colors text-sm"
                  >
                    {community.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.label}>
                  <a
                    href={resource.href}
                    className="text-[#FAFAF9]/70 hover:text-[#D9A441] transition-colors text-sm"
                  >
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Equal Housing & Legal */}
        <div className="border-t border-[#FAFAF9]/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-[#FAFAF9]/60">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-[#FAFAF9]/20 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">=</span>
                </div>
                <span>Equal Housing Opportunity</span>
              </div>
              <span>License #: [License Number]</span>
              <span>The Ridge Realty Group</span>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-[#FAFAF9]/60">
              <a href="#privacy" className="hover:text-[#D9A441] transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-[#D9A441] transition-colors">Terms of Service</a>
              <a href="#ada" className="hover:text-[#D9A441] transition-colors">ADA Statement</a>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-[#FAFAF9]/60 text-center lg:text-left">
            © {currentYear} Marci Metzger, REALTOR®. All rights reserved. 
            Information deemed reliable but not guaranteed. All measurements and square footage are approximate.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;