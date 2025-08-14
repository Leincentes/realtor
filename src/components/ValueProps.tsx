import React from 'react';
import { TrendingUp, Shield, Users, BarChart3 } from 'lucide-react';

const ValueProps: React.FC = () => {
  const valueProps = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Local Market Intel',
      description: 'Daily pulse on pricing, inventory, and micro-trends that matter to your decision.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Negotiation that Wins',
      description: 'Clear strategy and proven tactics to secure your goals, whether buying or selling.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Full-Service, No Stress',
      description: 'From lenders to inspectors to contractors, consider it handled with my trusted network.'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Data-Backed Guidance',
      description: 'Straight answers, transparent comps, and smart timing based on real market data.'
    }
  ];

  const stats = [
    { label: '30 Years', value: 'Experience' },
    { label: '120+ Homes', value: 'Sold' },
    { label: '45 Days Avg', value: 'To Contract' },
    { label: '98%', value: 'List-to-Sale Ratio' }
  ];

  return (
    <section id="about" className="bg-[#E8D9C5]/30 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#23303B] mb-4">
            Real-world expertise. Neighbor-level care.
          </h2>
          <p className="text-lg text-[#23303B]/70 max-w-3xl mx-auto leading-relaxed">
            Buying or selling here isn't about luck — it's about great timing, clear pricing, and steady communication. 
            I bring 30 years of local insight, a proven negotiation playbook, and a full network of trusted professionals 
            so you can move without the stress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {valueProps.map((prop, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D9A441]/20 text-[#D9A441] rounded-2xl mb-4 group-hover:bg-[#D9A441] group-hover:text-white transition-colors duration-300">
                {prop.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#23303B] mb-3">
                {prop.title}
              </h3>
              <p className="text-[#23303B]/70 leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Marci's Photo */}
            <div className="relative">
              <img
                src="https://raw.githubusercontent.com/Leincentes/realtor/refs/heads/main/src/assets/Profile.webp"
                alt="Marci Metzger, Professional REALTOR® in Pahrump, Nevada"
                className="w-full h-full object-cover min-h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#23303B]/20 to-transparent"></div>
            </div>
            
            {/* Stats Content */}
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-[#23303B] mb-6">
                Meet Marci Metzger
              </h3>
              <p className="text-[#23303B]/70 mb-8 leading-relaxed">
                Your trusted local expert with deep roots in Pahrump. I combine years of market knowledge 
                with genuine care for each client's unique needs, ensuring you get the personalized service 
                you deserve in every transaction.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-[#D9A441] mb-1">
                      {stat.label}
                    </div>
                    <div className="text-[#23303B]/70 font-medium text-sm">
                      {stat.value}
                    </div>
                  </div>
                ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;