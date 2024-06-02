import React from "react";

function Recipe({ recipe }) {
  return (
    <div>
      <h3>{recipe.name}</h3>
      <p>
        <strong>Ingredients:</strong> {recipe.ingredients}
      </p>
      <p>
        <strong>Instructions:</strong> {recipe.instructions}
      </p>
    </div>
  );
}

export default Recipe;
