import { NextResponse } from 'next/server';
import { neon } from "@neondatabase/serverless"

// is ID needed here?
export async function GET() {
    const dbUrl = process.env.DATABASE_URL;
    if (!dbUrl) {
        throw new Error("DATABASE_URL is not defined. Check your .env.local.");
    }
const sql = neon(dbUrl);
    // Example: read data from db.json
    try {
        const result = await sql`SELECT * FROM recipe_names`;
        console.log("Successful fetching from database")
        console.log(result)
        return NextResponse.json(result)
    }
    catch (error){
        console.error("DB fetching error", error);
        return new NextResponse("Failed to fetch recipes", { status: 500 });
    }
}

export async function POST(request: Request) {
}