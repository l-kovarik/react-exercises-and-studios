import "./App.css";
import RateARecipe from "./components/RateARecipe";
import Button from "./components/Button";
import AuthorInfo from "./components/AuthorInfo";
import IngredientList from "./components/Ingredients";
import RecipeImage from "./components/RecipeImage";
import RecipeName from "./components/RecipeName";
import React from 'react';

export default function App() {
  return (
    <>
      <RecipeImage />
      <RecipeName />
      <RateARecipe rating={3} />
      <Button saveButton={true} />
      <AuthorInfo />
      <IngredientList />
    </>
  );
}
