import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Receita from './pages/Receita';
import AdicionarReceitas from './pages/AdicionarReceitas';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Receita />}/>
        <Route path="/AdicionarReceitas" element={<AdicionarReceitas/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
