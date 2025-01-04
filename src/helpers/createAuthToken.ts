import * as jose from "jose";

const createAuthToken = async (user: any) => {
  const alg: string = "HS256";
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const jwtExpiry: string = process.env.JWT_EXPIRY || "2d";

  const jwt = await new jose.SignJWT({ "urn:example:claim": true })
    .setProtectedHeader({ alg })
    .setExpirationTime(jwtExpiry)
    .setSubject(user)
    .sign(secret);

  return jwt;
};

export default createAuthToken;
