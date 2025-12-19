import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { RepoDetails } from './pages/RepoDetails';  

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/details" element={<RepoDetails />} />
      </Routes>
    </HashRouter>
  );
}

export default App;