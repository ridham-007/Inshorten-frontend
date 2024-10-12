import clientPromise from '@/config/mongodb';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';
// import type { NextApiRequest, NextApiResponse } from 'next'
let ShortUniqueId = require("short-unique-id");

const EVENT_COLLECTION = 'mapping';
const DATABASE = 'inshorts_url';
export async function POST(req: Request) {
    try {
        const body = await req.json(); // Parse the JSON body
        const { url } = body; // Proper destructuring

        if (!url) {
            return NextResponse.json(
                { data: null, success: false, message: "URL is required" },
                { status: 400 } // Return a 400 Bad Request status code
            );
        }

        const uid = new ShortUniqueId({ length: 6 });
        let obj: Record<string, any> = {
            url,
            code: uid.rnd()
        };

        // connect to DB
        const client = await clientPromise;
        let document = await client.db(DATABASE).collection(EVENT_COLLECTION).insertOne(obj);

        if (document.acknowledged) {
            return NextResponse.json({ data: obj, success: true }, { status: 201 }); // Return a 201 Created status code
        } else {
            return NextResponse.json(
                { data: null, success: false, message: "Failed to insert document" },
                { status: 500 } // Return a 500 Internal Server Error status code
            );
        }
    } catch (e) {
        console.log(e);
        return NextResponse.json(
            { data: null, success: false, message: "An error occurred" },
            { status: 500 } // Return a 500 status code on error
        );
    }
}