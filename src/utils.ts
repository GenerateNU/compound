import jwt, { JwtPayload } from "jsonwebtoken";
import prisma from "../lib/client";
// import { authOptions } from "@auth/[...nextauth]";
import { getServerSession, Session } from "next-auth";
import { User } from "@prisma/client";

export default class Utils {
  public static computeXpFromProgress(progress: boolean[]) {
    let xp = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 4; j++) {
        // lessons
        if (j === 0 || j === 1 || j === 2) {
          if (progress[i * 4 + j] === true) {
            xp += 30;
          }
        } else {
          // exam
          if (progress[i * 4 + j] === true) {
            xp += 10;
          }
        }
      }
    }

    return xp;
  }

  public static decodeToken(token: string) {
    return jwt.verify(
      token,
      "secret_key_change_later",
      (err: any, decoded: any) => {
        return decoded;
      }
    );
  }

  public static verifyToken(token: string): JwtPayload {
    return jwt.verify(token, "secret_key_change_later") as JwtPayload;
  }

  public static encodeValue(value: JwtPayload) {
    return jwt.sign(value, "secret_key_change_later");
  }

  public static async checkForUser(email: any) {
    let exists = false;
    let verified = false;

    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (user) {
      exists = true;
    }

    const response: User[] = await prisma.user.findMany({
      where: {
        email: email,
        // verified: true,
      },
    });

    if (response.length > 0) {
      verified = true;
    }

    return { exists: exists, verified: verified };
  }

  // Returns id given decoded payload from token
  public static async getUserId(email: any) {
    // Find user info based on username
    const userInfo = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    // If user doesn't exists
    if (!userInfo) {
      throw new Error("User does not exists");
    }

    return userInfo["id"];
  }
}
