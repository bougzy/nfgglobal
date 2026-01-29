import { SignJWT, jwtVerify, JWTPayload } from "jose";

const JWT_SECRET =
  process.env.JWT_SECRET || "nfgglobal-default-secret-change-in-production";
const secret = new TextEncoder().encode(JWT_SECRET);

export interface AdminJWTPayload extends JWTPayload {
  sub: string;
  role: "admin";
}

export async function signToken(adminId: string): Promise<string> {
  return new SignJWT({ sub: adminId, role: "admin" } as AdminJWTPayload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(secret);
}

export async function verifyToken(token: string): Promise<AdminJWTPayload> {
  const { payload } = await jwtVerify(token, secret, {
    algorithms: ["HS256"],
  });
  return payload as AdminJWTPayload;
}
