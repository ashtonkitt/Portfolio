import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  return (
    <>
      {!isLoadingComplete && (
        <LoadingScreen onComplete={() => setIsLoadingComplete(true)} />
      )}
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
