import { NextResponse } from 'next/server';
import { neon } from "@neondatabase/serverless"

export async function POST(request: Request) {
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) {
    throw new Error("DATABASE_URL is not defined. Check your .env.local.");
  }
  const sql = neon(dbUrl);
  try {
    console.log("Posting")
    const formData = await request.json(); // Parse JSON data from the body
    const { header } = formData
    console.log(formData)
    console.log("header")
    console.log("is")
    console.log(header)
    await sql`INSERT INTO recipe_names (header) VALUES (${header})`;
    return new NextResponse("Posted successfully!");
  }
  catch (error){
    console.error("DB posting error", error)
    return new NextResponse("Failed to post recipe", { status: 500 });
  }
}

// Insert the recipe into the Postgres database
// await sql`INSERT INTO recipe_names (header) VALUES (${header})`;