// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

import ListaDeReceitas from '../components/ListaDeReceitas';

const Home = () => {
  return (
    <div>
      <h1>Pedro & Israel Receitas</h1>
      <ListaDeReceitas />
      <Link to="/AdicionarReceitas">Adicionar nova receita</Link>
    </div>
  );
};

export default Home;
