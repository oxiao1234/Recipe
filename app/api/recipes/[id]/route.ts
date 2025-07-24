// This will handle other recipes
import { neon } from "@neondatabase/serverless"
import { NextResponse } from 'next/server';

//    const dbUrl = process.env.DATABASE_URL;
// if (!dbUrl) {
//     throw new Error("DATABASE_URL is not defined. Check your .env.local.");
// }

// export async function GET2({ params }: { params: { id: string } }) {
//   // Example: read data from db.json
//     const recipes = [
//         {"id": "0", "header": "Chicken Burrito"}, {"id": "1", "header": "Veggie Burrito"},
//         {"id": "2", "header": "Norito"}]

// }

// export async function GET({ params }: { params: { id: string } }) {
//     // Example: read data from db.json
//     try {
//         const result = await sql`SELECT * FROM recipe_names`;
//         console.log("Successful fetching from database")
//         return Response.json(result)
//     }
//     catch (error){
//         console.error("DB fetching error", error);
//         return new Response("Failed to fetch recipes", { status: 500 });
//     }
  
// }

