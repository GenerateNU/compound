import { PrismaClient, User } from "@prisma/client";

import isEmail from "isemail";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { UserData, UserReturnType } from "../../lib/CompoundTypes";
import { data } from "autoprefixer";

// Uer Information that is Insensitive
export interface InsensitiveUserInformation {
  email?: string | null;
  phoneNumber?: string | null;
  firstName?: string | null;
  lastName?: string | null;
}
const UNIQUE_CONSTRAINT_ERROR_CODE = "P2002";

export default class Users {
  constructor(private readonly usersDB: PrismaClient["user"]) {}

  //updates the user of the given id with the given data given of type object and returns the userinformation
  // which is shown nowhere or returns an err
  public async updateUserById(id: number, updatedData: object) {
    try {
      const UserInformation: User | null = await this.usersDB.update({
        where: { id: id },
        data: updatedData,
      });
      return UserInformation;
    } catch (err) {
      throw "Error: there is not proper data that was given";
    }
  }

  // Get Insensitive User Information By ID
  public async getUserById(id: number) {
    try {
      // Select Insensitive User Information from Database based on ID
      const UserInformation: InsensitiveUserInformation | null =
        await this.usersDB.findUnique({
          where: {
            id,
          },
          select: {
            id: true,
            email: true,
            phoneNumber: true,
            firstName: true,
            lastName: true,
          },
        });

      return UserInformation;
    } catch (Error) {
      throw "Error: User ID is not an Number";
    }
  }
}
