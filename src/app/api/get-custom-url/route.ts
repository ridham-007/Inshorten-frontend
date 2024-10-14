import clientPromise from "@/config/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
let ShortUniqueId = require("short-unique-id");

const EVENT_COLLECTION = "mapping";
const DATABASE = "inshorts_url";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { url, code } = body;

    if (!url) {
      return NextResponse.json(
        { data: null, success: false, message: "URL is required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const collection = client.db(DATABASE).collection(EVENT_COLLECTION);

    // Check if a custom code is provided
    let customCode = code;
    if (!customCode) {
      const uid = new ShortUniqueId({ length: 6 });
      customCode = uid.rnd();
    } else {
      // Check if the custom code already exists
      const existingDoc = await collection.findOne({ code: customCode });
      if (existingDoc) {
        return NextResponse.json(
          { data: null, success: false, message: "Custom code already exists" },
          { status: 400 }
        );
      }
    }

    const obj = { url, code: customCode };
    const document = await collection.insertOne(obj);

    if (document.acknowledged) {
      return NextResponse.json({ data: obj, success: true }, { status: 201 });
    } else {
      return NextResponse.json(
        { data: null, success: false, message: "Failed to insert document" },
        { status: 500 }
      );
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { data: null, success: false, message: "An error occurred" },
      { status: 500 }
    );
  }
}
