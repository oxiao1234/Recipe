import { neon } from "@neondatabase/serverless"

export default function RecipeCreator(){
    async function create(formData: FormData){
        'use server';
        // Connect to Neon database
        const sql = neon(`${process.env.DATABASE_URL}`)
        const header = formData.get('header');
        
        // Insert the recipe into the Postgres database
        await sql`INSERT INTO recipe_names (header) VALUES (${header})`;
    }
    
    // Global variable id?
    return (
        <form action = {create}>
            <input type = "text" placeholder = "Recipe Name" name = "header"/>
            <button type = "submit">Submit</button>
        </form>
    )
}

