import React from 'react';
import './app.scss';

import Footer from '../subComponents/Footer/Footer';

import RoutesPages from '../Routes';

function App() {
  return (
    <div className="app">
      <RoutesPages />
      <Footer />
    </div>
  );
}

export default App;
