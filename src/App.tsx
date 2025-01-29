import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/header/header';
import AppHeroSection from './components/hero/heroSection';
import AccentSection from './components/accent/accent';
import ArrivalsSection from './components/arrivals/arrivals';
import PaydaySection from './components/payday/payday';
import YoungsFavoriteSection from './components/favourite/favourite';
import VoucherSection from './components/voucher/voucher';
import FormSection from './components/form/form';
import FooterSection from './components/footer/footer';


function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader />
      </header>
      <main>
        <AppHeroSection />
        <AccentSection />
        <ArrivalsSection />
        <PaydaySection />
        <YoungsFavoriteSection />
        <VoucherSection />
        <FormSection />
        <FooterSection />
      </main>
    </div>
  );
}

export default App;
