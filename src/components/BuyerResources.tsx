import React from 'react';
import { FileText, TrendingUp, MapPin, CreditCard } from 'lucide-react';

const BuyerResources: React.FC = () => {
  const resources = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Buyer Guide',
      description: 'Complete step-by-step guide to buying your first home in Pahrump.',
      link: '#buyer-guide'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'How to Win in a Competitive Market',
      description: 'Proven strategies to make your offer stand out and get accepted.',
      link: '#competitive-market'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Cost of Living & Commute',
      description: 'Everything you need to know about living and working in Pahrump.',
      link: '#cost-of-living'
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Financing 101',
      description: 'Connect with trusted local lenders and understand your options.',
      link: '#financing'
    }
  ];

  return (
    <section id="resources" className="bg-[#FAFAF9] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#23303B] mb-4">
            New to Pahrump? Start here.
          </h2>
          <p className="text-lg text-[#23303B]/70 max-w-2xl mx-auto">
            Get neighborhood guides, market updates, and a simple plan to get keys in hand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 block"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#D9A441]/20 text-[#D9A441] rounded-xl mb-4 group-hover:bg-[#D9A441] group-hover:text-white transition-colors duration-300">
                {resource.icon}
              </div>
              
              <h3 className="text-lg font-semibold text-[#23303B] mb-3 group-hover:text-[#D9A441] transition-colors duration-200">
                {resource.title}
              </h3>
              
              <p className="text-[#23303B]/70 leading-relaxed">
                {resource.description}
              </p>
            </a>
          ))}
        </div>

        <div className="bg-[#E8D9C5]/50 rounded-2xl p-8 mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-[#23303B] mb-4">
                Ready to Start Your Search?
              </h3>
              <p className="text-[#23303B]/70 mb-6">
                Let's schedule a consultation to discuss your needs, timeline, and budget. 
                I'll create a personalized buying strategy just for you.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center bg-[#D9A441] text-[#23303B] px-8 py-4 rounded-xl font-semibold hover:bg-[#D9A441]/90 transition-all duration-200 hover:shadow-md"
              >
                Schedule Your Consultation
              </a>
            </div>
            <div className="relative">
              <img
                src="/src/assets/10th.webp"
                alt="Modern kitchen and living space in Pahrump home"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyerResources;