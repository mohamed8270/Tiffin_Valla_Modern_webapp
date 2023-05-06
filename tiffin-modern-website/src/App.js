import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Feature from './components/Feature'
import Reason from './components/Reason'
import Order from './components/Order'
import Download from './components/Download'
import Footer from './components/Footer'

function App() {
  return (
    <div className="overflow-hidden scroll-smooth drawer-side">
      <Navbar/>
      <Hero/>
      <Feature/>
      <Reason/>
      <Order/>
      <Download/>
      <Footer/>
    </div>
  );
}

export default App;
