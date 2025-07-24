import { NextResponse } from 'next/server';

export async function GET() {
  // Example: read data from db.json
  return NextResponse.json({
    "recipes": [
        {"id": "0", "header": "Chicken Burrito"}, {"id": "1", "header": "Veggie Burrito"},
        {"id": "2", "header": "Norito"}
    ]
});
}

export async function POST(request: Request) {
  const body = await request.json();
  // Example: Save the new recipe to db.json (mock here)
  return NextResponse.json({ message: 'POST received', data: body });
}
