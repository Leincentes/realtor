import React from 'react';
import { TrendingUp, Calendar, Home, DollarSign } from 'lucide-react';

const MarketSnapshot: React.FC = () => {
  return (
    <section className="bg-[#FAFAF9] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#23303B] mb-4">
            Pahrump Market Snapshot
          </h2>
          <p className="text-lg text-[#23303B]/70">
            Current market conditions to help you make informed decisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Median Price */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#E8D9C5] hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[#D9A441]/20 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-[#D9A441]" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-[#23303B]">$325,000</div>
                <div className="text-sm text-[#9FB29F]">+5.2% YoY</div>
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-[#23303B] mb-1">Median Home Price</div>
              <div className="text-xs text-[#23303B]/60">Last 30 days</div>
            </div>
          </div>

          {/* Days on Market */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#E8D9C5] hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[#9FB29F]/20 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-[#9FB29F]" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-[#23303B]">28</div>
                <div className="text-sm text-[#9FB29F]">-12% YoY</div>
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-[#23303B] mb-1">Avg Days on Market</div>
              <div className="text-xs text-[#23303B]/60">Last 30 days</div>
            </div>
          </div>

          {/* Inventory */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#E8D9C5] hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[#D9A441]/20 rounded-xl flex items-center justify-center">
                <Home className="w-6 h-6 text-[#D9A441]" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-[#23303B]">245</div>
                <div className="text-sm text-[#9FB29F]">+18% MoM</div>
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-[#23303B] mb-1">Active Listings</div>
              <div className="text-xs text-[#23303B]/60">Current inventory</div>
            </div>
          </div>

          {/* Market Trend */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#E8D9C5] hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[#9FB29F]/20 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#9FB29F]" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-[#23303B]">97%</div>
                <div className="text-sm text-[#9FB29F]">+2% YoY</div>
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-[#23303B] mb-1">Sale to List Ratio</div>
              <div className="text-xs text-[#23303B]/60">Last quarter</div>
            </div>
          </div>
        </div>

        <div className="bg-[#E8D9C5]/50 rounded-2xl p-8 mt-12">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-[#23303B] mb-3">
              Market Update: December 2024
            </h3>
            <p className="text-[#23303B]/70 mb-6 max-w-3xl mx-auto leading-relaxed">
              Pahrump continues to show strong market fundamentals with steady price appreciation and healthy inventory levels. 
              The winter market remains active with motivated buyers taking advantage of competitive rates.
            </p>
            <div className="text-sm text-[#23303B]/60">
              Updated December 2024 • Source: Greater Las Vegas Association of REALTORS® MLS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSnapshot;