// This will handle other recipes

import { NextResponse } from 'next/server';

export async function GET({ params }: { params: { id: string } }) {
  // Example: read data from db.json
    const recipes = [
        {"id": "0", "header": "Chicken Burrito"}, {"id": "1", "header": "Veggie Burrito"},
        {"id": "2", "header": "Norito"}]

}
