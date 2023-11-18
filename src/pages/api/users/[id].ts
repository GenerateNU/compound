// GET, PUT, DELETE operations for a specific user by ID
import type { NextApiRequest, NextApiResponse } from "next";
import persistentUserInstance from "../../../../lib/persistentUserInstance";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { PrismaClient, User } from "@prisma/client";
import prisma from "../../../../lib/client";
import { InsensitiveUserInformation } from "@/models/users";

type Message = {
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Message>
) {
  const session = await getServerSession(req, res, authOptions);
  const supportedRequestMethods: { [key: string]: Function } = {
    GET: getUser,
    DELETE: deleteUser,
    // these two below are currently seperated with differnet functions in case there is any
    // edits needed to be made to a patch or put to ensure
    // a more secure and validated request other than the built in prisma checks
    PUT: updateUser,
    PATCH: updateUserPatch,
  };
  if (req.method) {
    return supportedRequestMethods[req.method](req, res, session);
  }
  return res.status(405).send({ message: "request method not supported" });
}

//updating user with a PULL request this will check if the user exits attempts to get the user
// as a double confimration that there is data for this user then it will pass to a method in ../models/users.ts
// then comes back adn prints if it was succesful update or not
async function updateUser(req: NextApiRequest, res: NextApiResponse) {
  let id: number;

  try {
    id = Number(req.query.id);
    if (typeof id !== "number") {
      throw Error("please input number");
    }
  } catch (error) {
    return res.status(403).send({ message: String(error) });
  }

  const reqProp = [
    "firstName",
    "lastName",
    "dob",
    "phoneNumber",
    "email",
    "householdIncome",
  ];
  const missProp = [];

  // this chunk ensures that the needed items for a put requests are there and if not lets the user know what is missing
  for (const prop of reqProp) {
    if (req.body[prop] === undefined) {
      missProp.push(prop);
    }
  }

  if (missProp.length > 0) {
    return res
      .status(400)
      .json({ error: `Missing required properties: ${missProp.join(", ")}` });
  }

  try {
    const user = await persistentUserInstance.getUserById(id);
  } catch (err) {
    return res.status(404).send({ message: "User not found" });
  }

  try {
    const updateUser = await persistentUserInstance.updateUserById(
      id,
      req.body
    );
    return res.status(200).send({ message: "updated user" });
  } catch (error) {
    return res.status(403).send({ message: "user was not properly updated" });
  }
}

//updating user with a PATCH request this will check if the user exits attempts to get the user
// as a double confimration that there is data for this user then it will pass to a method in ../models/users.ts
// which is give the query body then comes back and prints if it was succesful update or not
async function updateUserPatch(req: NextApiRequest, res: NextApiResponse) {
  let id: number;

  try {
    id = Number(req.query.id);
    if (typeof id !== "number") {
      throw Error("plesae input number");
    }
  } catch (error) {
    throw res.status(403).send({ message: String(error) });
  }
  try {
    const user = await persistentUserInstance.getUserById(id);
  } catch (err) {
    throw res.status(404).send({ message: "User not found" });
  }

  try {
    const updateUser = await persistentUserInstance.updateUserById(
      id,
      req.body
    );
    throw res.status(200).send({ message: "updated user thank you" });
  } catch (error) {
    throw res
      .status(403)
      .send({ message: "user was not properly updated in patch" });
  }
}

async function getUser(
  req: NextApiRequest,
  res: NextApiResponse<Message | InsensitiveUserInformation>
) {
  const id = Number(req.query.id);

  try {
    const userInfo = await persistentUserInstance.getUserById(id);
    if (!userInfo || Object.keys(userInfo).length === 0) {
      return res.status(404).send({ message: "User not found" });
    }
    return res.status(200).send(userInfo);
  } catch (error) {
    return res.status(403).send({ message: String(error) });
  }
}

async function deleteUser(
  req: NextApiRequest,
  res: NextApiResponse<Message | InsensitiveUserInformation>,
  session: any
) {
  const id  = Number(req.query.id)
  await persistentUserInstance.deleteUser(id)
}
