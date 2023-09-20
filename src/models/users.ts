import { PrismaClient } from "@prisma/client";
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
    data = this.setFinancialDefaultsBasedOnDemographics(data);
    return {
      ...data,
      //   verified: true, // TODO: change this and add admin page
      createdAt: new Date(),
    };
  }

  private setFinancialDefaultsBasedOnDemographics(data: UserData): UserData {
    if (!data.employmentStatus || !data.householdIncome || !data.livingStatus) {
      // Set defaults based on age https://www.capitalone.com/learn-grow/money-management/what-is-the-average-salary-in-the-us-by-age/
      if (data.age) {
        if (data.age < 25) {
          data.employmentStatus = data.employmentStatus || "Student";
          data.householdIncome = data.householdIncome || 30000;
          data.livingStatus = data.livingStatus || "With parents";
        } else if (data.age >= 25 && data.age < 35) {
          data.employmentStatus = data.employmentStatus || "Entry Level Job";
          data.householdIncome = data.householdIncome || 54184;
          data.livingStatus = data.livingStatus || "Renting";
        } else if (data.age >= 35) {
          data.employmentStatus = data.employmentStatus || "Mid-Level Job";
          data.householdIncome = data.householdIncome || 64116;
          data.livingStatus = data.livingStatus || "Own Home";
        }
      }

      // Set defaults based on ethnicity from 2021 US Census https://www.pgpf.org/blog/2023/02/income-and-wealth-in-the-united-states-an-overview-of-recent-data
      if (data.ethnicity) {
        if (data.ethnicity === "White") {
          data.householdIncome = data.householdIncome || 77999;
        } else if (data.ethnicity === "Black") {
          data.householdIncome = data.householdIncome || 48297;
        } else if (data.ethnicity === "Asian") {
          data.householdIncome = data.householdIncome || 101418;
        } else if (data.ethnicity === "Hispanic") {
          data.householdIncome = data.householdIncome || 57981;
        }
      }

      // Set defaults based on education https://www.capitalone.com/learn-grow/money-management/what-is-the-average-salary-in-the-us-by-age/
      if (data.education) {
        if (data.education === "High School") {
          data.employmentStatus = data.employmentStatus || "???";
          data.householdIncome = data.householdIncome || 46228;
        } else if (data.education === "Bachelor's Degree") {
          data.employmentStatus = data.employmentStatus || "???";
          data.householdIncome = data.householdIncome || 82576;
        } else if (data.education === "Some college or associate degree") {
          data.employmentStatus = data.employmentStatus || "???";
          data.householdIncome = data.householdIncome || 52520;
        } else if (data.education === "No highschool diploma") {
          data.employmentStatus = data.employmentStatus || "???";
          data.householdIncome = data.householdIncome || 37076;
        } else if (data.education === "Master's Degree") {
          data.employmentStatus = data.employmentStatus || "???";
          data.householdIncome = data.householdIncome || 115000;
        }
      }

      //https://www.pewresearch.org/short-reads/2023/03/01/gender-pay-gap-facts/#:~:text=The%20gender%20gap%20in%20pay,%2D%20and%20part%2Dtime%20workers.
      if (data.gender) {
        if (data.gender === "Male") {
          data.householdIncome =
            data.householdIncome || data.householdIncome * 1.17;
        } else if (data.gender === "Female") {
          data.householdIncome =
            data.householdIncome || data.householdIncome * 0.83;
        }
      }
    }
    return data;
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
