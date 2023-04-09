import React from 'react';
import Footer from './assets/Components/Footer/Footer';
import HomePage from './assets/Components/HomePage/HomePage';
import Navbar from './assets/Components/Navbar/Navbar';

const App = () => {
  return (
    <div>
      <div className='p-9'>
        <Navbar/>
        <HomePage />
      </div>
      <Footer/>
    </div>
  );
};

export default App;