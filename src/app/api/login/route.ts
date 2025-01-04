import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import messages from "@/messages.json";

export async function POST(req: NextRequest) {
  try {
    // Read the data from the request body
    const body = await req.json();

    // Ensure the body is an object and not null
    if (!body || typeof body !== "object") {
      throw new TypeError(
        'The "payload" argument must be of type object. Received null'
      );
    }

    // Extracting data from the body
    const { name, email, password } = body;

    // Hashing the password
    const hashedPassword = await bcrypt.hash(password, 8);

    // Create a user in db
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return NextResponse.json({
      message: messages.USER.USER_CREATED,
      statusCode: 201,
      data: {
        user: newUser,
      },
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "An error occurred",
      statusCode: 500,
      error: error.message,
    });
  }
}
