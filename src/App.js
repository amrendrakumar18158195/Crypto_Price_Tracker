
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import DashPage from './pages/DashPage';
import CoinPage from './pages/Coin';
import ComparePage from './pages/ComparePage';


function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
       
        <Route path="/coin/:id" element={<CoinPage/>} />

        <Route path="/compare" element={<ComparePage />} />
        <Route path="/Dashboard" element={<DashPage/>} />
         {/* <Route path="/watchlist" element={<WatchlistPage />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;









