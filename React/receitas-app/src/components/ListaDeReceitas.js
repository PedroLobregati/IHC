import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchRecipes } from '../api';

const ListaDeReceitas = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipesData = async () => {
      const data = await fetchRecipes();
      setRecipes(data);
    };
    fetchRecipesData();
  }, []);

  return (
    <div>
      <h2>Receitas disponíveis</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.idMeal}>
            <Link to={`/recipe/${recipe.idMeal}`}>{recipe.strMeal}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDeReceitas;
