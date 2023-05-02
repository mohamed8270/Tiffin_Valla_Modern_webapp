import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Feature from './components/Feature'
import Reason from './components/Reason'
import Order from './components/Order'

function App() {
  return (
    <div className="overflow-hidden scroll-smooth drawer-side">
      <Navbar/>
      <Hero/>
      <Feature/>
      <Reason/>
      <Order/>
    </div>
  );
}

export default App;
