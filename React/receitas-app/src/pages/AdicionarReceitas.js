import React, { useState } from 'react';
const AdicionarReceitas = () => {
    const [newRecipe, setNewRecipe] = useState({
      title: '',
      ingredients: '',
      instructions: '',
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setNewRecipe({
        ...newRecipe,
        [name]: value,
      });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Aqui você pode fazer algo com o novo recipe, como enviá-lo para o servidor ou salvá-lo em um estado global.
      console.log('Novo Recipe:', newRecipe);
    };
  
    return (
      <div>
        <h2>Adicionar Nova Receita</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Título:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newRecipe.title}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="ingredients">Ingredientes:</label>
            <textarea
              id="ingredients"
              name="ingredients"
              value={newRecipe.ingredients}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="instructions">Instruções:</label>
            <textarea
              id="instructions"
              name="instructions"
              value={newRecipe.instructions}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Adicionar Receita</button>
        </form>
      </div>
    );
  };
  
  export default AdicionarReceitas;
  