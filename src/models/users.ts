import { User, PrismaClient } from "@prisma/client";
import isEmail from "isemail";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

interface UserData {
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  dob: Date;
  password: string;
  [key: string]: any;
}

const UNIQUE_CONSTRAINT_ERROR_CODE = "P2002";

export default class Users {
  constructor(private readonly usersDB: PrismaClient["user"]) {}

  public async getUserById(id: number) {

    try {
      const UserInformation: User | null = await this.usersDB.findUnique({
        where: {
          id
        },
      })

      return UserInformation
    }
    catch (Error) {
      throw Error
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

  private setDefaultAttributes(data: UserData): UserData {
    return {
      ...data,
      //   verified: true, // TODO: change this and add admin page
      createdAt: new Date(),
    };
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
}
