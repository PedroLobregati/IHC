import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRecipeById } from '../api';

const InfoReceitas = () => {
  const { id } = useParams(); // widget. do flutter
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipeData = async () => {
      const data = await fetchRecipeById(id);
      setRecipe(data);
    };
    fetchRecipeData();
  }, [id]);

  if (!recipe) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h2>{recipe.strMeal}</h2>
      <p>{recipe.strInstructions}</p>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
    </div>
  );
};

export default InfoReceitas;
