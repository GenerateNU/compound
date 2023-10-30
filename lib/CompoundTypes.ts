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

export type Message = {
    message: string;
  };

export type Quizzes = {
    id : number;
    questions : string;
    passed : boolean;
    score : number;
}

export type AnswersType = string[] | null;

export type ExamSubmissionResponse = {
  moduleID: number;
  score: number;
}