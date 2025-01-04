import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import messages from "@/messages.json";
import createAuthToken from "@/helpers/createAuthToken";

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
    const { email, password } = body;

    // Check the email exists or not.
    const existingUser: any = await User.findOne({
      where: {
        email,
      },
    });

    if (!existingUser) {
      return Response.json(
        {
          error: messages.USER.INVALID_CREDENTIALS,
        },
        { status: 400 }
      );
    }

    // Compare password.
    const checkPassword = await bcrypt.compare(password, existingUser.password);

    if (!checkPassword) {
      return Response.json(
        {
          error: messages.USER.INVALID_CREDENTIALS,
        },
        { status: 400 }
      );
    }

    // Create a jwt token.
    const jwtToken = await createAuthToken(existingUser);

    return NextResponse.json({
      message: messages.USER.LOGIN_SUCCESS,
      statusCode: 200,
      data: {
        user: existingUser,
        authToken: jwtToken,
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
