import { NextRequest, NextResponse } from "next/server";
import pool from "@/app/libs/mysql";


export async function GET(
    request:  NextRequest
) {
    const email = request.nextUrl.searchParams.get("email")
    const username = request.nextUrl.searchParams.get("username")
    
    try {
        const db = await pool.getConnection()        
        
        const query = 'SELECT * FROM users WHERE email = ? OR username = ?'
        const [rows] = await db.execute(query,[email, username])
        db.release()
        
        // console.log(rows);
        
        if (rows.length > 0) {
            // User with the same email or username exists
            return NextResponse.json({ exists: true });
        } else {
            // User with the same email or username doesn't exist
            return NextResponse.json({ exists: false });
        }
    } catch (error) {
        return NextResponse.json({
            error: error
        }, { status: 500 })
    }
}