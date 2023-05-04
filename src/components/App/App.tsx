import React from 'react';
import './app.scss';
import { RouterProvider } from 'react-router-dom';

import Footer from '../subComponents/Footer/Footer';

import { routes } from '../Routes';

function App() {
  return (
    <div className="app">
      <RouterProvider router={routes} />
      <Footer />
    </div>
  );
}

export default App;
