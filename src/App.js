import React, { Fragment } from 'react';
import './App.scss';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Expertise from './components/sections/Expertise'
import CeoSection from './components/sections/CeoSection'
import LatestNews from './components/sections/LatestNews'

function App() {
  return (
    <Fragment>
      {/* Navbar */}
      <Navbar/>

      {/* Expertise Section */}
      <Expertise/>

      {/* CEO Section */}
      <CeoSection/>

      {/* Latest News */}
      <LatestNews/>

      {/* Footer */}
      <Footer/>
    </Fragment>
  );
}

export default App;
