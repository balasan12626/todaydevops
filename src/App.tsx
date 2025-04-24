import React from 'react';
import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;