import { PrismaClient, User } from "@prisma/client";

import isEmail from "isemail";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { UserData, UserReturnType } from "../../lib/CompoundTypes";
import prisma from "../../lib/client";

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
  public async updateUserById(id: number, updatedData: UserData) {
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

  public async updateUserModuleExam(userId: number, moduleId: number, moduleExamId: number, results: boolean[], score: number) {
    let user: User;

    try {
      const user = await this.usersDB.findUnique({
        where: { id: userId },
      });
      if (!user) {
        throw "User Not Found"
      }

      user.moduleExamScores[moduleId] = {"moduleExamId": moduleExamId, "results":results, "score": score}
      await this.usersDB.update({
        where: { id: userId },
        data: {
          moduleExamScores: user?.moduleExamScores,
        },
      });

    } catch (Error) {
      throw "User Not Found"
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

  public async signUp(data: UserData) {
    try {
      this.validateInputData(data);
      const extendedData = this.setDefaultAttributes(data);
      await this.usersDB.create({ data: extendedData });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === UNIQUE_CONSTRAINT_ERROR_CODE) {
          const parseErrorMessage = error.message.split("`");
          const failedOn = parseErrorMessage[parseErrorMessage.length - 2];
          throw new Error("Unique Constraint Violation Failed on " + failedOn);
        }
      } else {
        throw error;
      }
    }
  }

  public async signUpProviderDetails(userData: UserData) {
    const defaultData = this.setDefaultAttributes(userData);
    await this.usersDB.create({ data: defaultData });
  }

  private setDefaultAttributes(data: UserData): UserData {
    return {
      ...data,
      //   verified: true, // TODO: change this and add admin page
      registered: false,
      isAdmin: false,
      subModuleQuizScores: [],
      moduleExamScores: [],
    };
  }

  public async deleteUser(id: number) {
    await this.usersDB.delete({
      where: {
        id: id,
      },
    });
  }

  private validateEmail(email: string) {
    if (!isEmail.validate(email)) {
      throw new Error("email must be in the proper format");
    }
  }

  private validatePhoneNumber(phone_number: string) {
    if (!/^2\d{9}$/.test(phone_number)) {
      throw new Error("phone number must be in the proper format");
    }
  }

  private validateInputData(data: UserData) {
    this.validateEmail(data.email);
    // this.validatePhoneNumber(data.phone_number); // TODO: uncomment this
  }

  public async getUser(email: string) {
    const user = await this.usersDB.findUnique({
      where: { email: email },
    });

    if (user === null) {
      throw new Error("user not found");
    }

    const userDetails: UserReturnType = {
      email: user.email as string,
      id: user.id as number,
      firstName: user.firstName,
      lastName: user.lastName,
    };

    return userDetails;
  }

  public async isUserInDatabase(email: string): Promise<boolean> {
    const userExists = await this.usersDB.findUnique({
      where: {
        email: email,
      },
    });
    return userExists !== null;
  }
}