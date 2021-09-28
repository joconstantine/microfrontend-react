import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingComponent from './components/MarketingComponent';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingComponent />
      </div>
    </BrowserRouter>
  );
};

export default App;
