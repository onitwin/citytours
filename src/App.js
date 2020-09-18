import React from 'react';
import Navbar from './components/Navbar/Navbar'
import TourList from './components/TourList'

import './App.scss';

function App() {
  return (
  <main>
  <Navbar/>
  <TourList/>
  <br>
  <h3>This was an app constructed through a tutorial</h3>
</main>
  );
}

export default App;
