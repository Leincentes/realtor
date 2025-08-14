import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickSearch from './components/QuickSearch';
import FeaturedListings from './components/FeaturedListings';
import CommunitiesGrid from './components/CommunitiesGrid';
import ValueProps from './components/ValueProps';
import SellerCTA from './components/SellerCTA';
import BuyerResources from './components/BuyerResources';
import Testimonials from './components/Testimonials';
import MarketSnapshot from './components/MarketSnapshot';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <Header />
      <main>
        <Hero />
        <QuickSearch />
        <FeaturedListings />
        <CommunitiesGrid />
        <ValueProps />
        <SellerCTA />
        <BuyerResources />
        <Testimonials />
        <MarketSnapshot />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;