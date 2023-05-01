import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Feature from './components/Feature'
import Reason from './components/Reason'

function App() {
  return (
    <div className="overflow-hidden scroll-smooth drawer-side">
      <Navbar/>
      <Hero/>
      <Feature/>
      <Reason/>
    </div>
  );
}

export default App;
