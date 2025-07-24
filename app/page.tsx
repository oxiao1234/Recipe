'use client'
import { Button } from "react-bootstrap";
import { Recipe } from "./recipe_component/recipe_component";
import { NewRecipe } from "./recipe_creator/new_recipe";
import { RecipeType } from "./types";
import { useEffect, useState } from "react";
import './page.css';

// This is the main home page of the app
export default function Home() {
  
  // This creates an array of recipes. Will be replaced later with an API call
  // const recipesSource: RecipeType[] = [
  //   {id: "0", header: "Chicken Burrito"}, {id: "1", header: "Veggie Burrito"}, {id: "2", header: "Norito"}
  // ]

  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  
  // Make sure you really understand this -> Fetching the data as needed 
  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await fetch('/api/recipes');
      const data = await res.json(); // ← this is how you handle the JSON
      // Recipes defaults to empty list if none avaliable
      setRecipes(data || []);
    };

    fetchRecipes();
  }, []);

  return (
    <div className="card-grid">
      {recipes.length > 0 ? (recipes.map((recipe) => (
        <Recipe key = {recipe.id} id = {recipe.id} header = {recipe.header}/>
      ))): (
        <p> NO RECIPES</p>
      )}
      <NewRecipe/>
    </div>
  );
}
