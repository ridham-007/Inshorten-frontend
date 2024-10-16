import clientPromise from "@/config/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
// import type { NextApiRequest, NextApiResponse } from 'next'
let ShortUniqueId = require("short-unique-id");

const EVENT_COLLECTION = "mapping";
const DATABASE = "inshorts_url";
export async function GET(req: Request, data: any) {
  try {
    const code = data?.params?.code ?? "";

    if (!code) {
      return NextResponse.json(
        { data: null, success: false, message: "Code is required" },
        { status: 400 } // Return a 400 Bad Request status code
      );
    }

    // connect to DB
    const client = await clientPromise;
    let document = await client
      .db(DATABASE)
      .collection(EVENT_COLLECTION)
      .findOne({ code: code });

    if (document) {
        return NextResponse.redirect(document.url);
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
