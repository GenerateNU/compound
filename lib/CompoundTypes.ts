export interface UserData {
    email: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    dob: Date;
    [key: string]: any;
  }


export type UserReturnType = {
    email: string;
    id: number;
    firstName?: string;
    lastName?: string;
    isAdmin?: string;
  };