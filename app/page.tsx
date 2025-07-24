'use client'
import { Button } from "react-bootstrap";
import { Recipe } from "./recipe_component";
import { NewRecipe } from "./recipe_creator/new_recipe";
import { RecipeType } from "./types";
import { useEffect, useState } from "react";

// This is the main home page of the app
export default function Home() {
  
  // This creates an array of recipes. Will be replaced later with an API call
  // const recipesSource: RecipeType[] = [
  //   {id: "0", header: "Chicken Burrito"}, {id: "1", header: "Veggie Burrito"}, {id: "2", header: "Norito"}
  // ]

  const [recipes, setRecipes] = useState<any[]>([]);
  
  // Make sure you really understand this -> Fetching the data as needed 
  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await fetch('/api/recipes');
      const data = await res.json(); // ← this is how you handle the JSON
      setRecipes(data.recipes);
    };

    fetchRecipes();
  }, []);

    console.log(recipes)

  return (
    <>
      {recipes.map((recipe) => (
        <Recipe id = {recipe.id} header = {recipe.header}/>
      ))}
      <NewRecipe></NewRecipe>
    </>
  );
}
