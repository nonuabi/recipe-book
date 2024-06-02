import React from "react";
import Recipe from "./Recipe";

function RecipeList({ recipes }) {
  return (
    <div>
      <h2>Recipes</h2>
      {recipes.map((recipe, index) => (
        <Recipe key={index} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;
