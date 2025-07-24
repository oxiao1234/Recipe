'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Button } from "react-bootstrap";


export function NewRecipe(){
  const router = useRouter();

  return (
    <Button onClick={() => router.push(`/recipe_creator`)}>Create New Recipe</Button>
  );
} 