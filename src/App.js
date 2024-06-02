import React, { useState } from "react";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([
    {
      name: "Spaghetti Carbonara",
      ingredients: "Spaghetti, Eggs, Parmesan, Pancetta, Pepper",
      instructions:
        "Cook spaghetti. Fry pancetta. Mix eggs and Parmesan. Combine all with pepper.",
    },
    {
      name: "Chicken Curry",
      ingredients:
        "Chicken, Curry Powder, Coconut Milk, Onions, Garlic, Ginger",
      instructions:
        "Saute onions, garlic, and ginger. Add chicken and curry powder. Stir in coconut milk. Simmer until cooked.",
    },
  ]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  return (
    <div className="App">
      <h1>Recipe Book</h1>
      <AddRecipeForm addRecipe={addRecipe} />
      <RecipeList recipes={recipes} />
      <SpeedInsights />
    </div>
  );
}

export default App;
