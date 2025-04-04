import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    try {
        const { email, password, name, phone } = await req.json()

        if (!email || !password || !name || !phone) {
            return new NextResponse(JSON.stringify({ error: "All fields are required" }), { status: 400 });
          }
      
          const newUser = { email, password, name, phone };
        
        return new NextResponse(JSON.stringify({newUser:newUser}), {status:200})
    }
    catch (err) {
        return new NextResponse(JSON.stringify({ error: err }), { status: 500 })
    }
      
}