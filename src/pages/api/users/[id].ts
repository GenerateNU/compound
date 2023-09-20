// GET, PUT, DELETE operations for a specific user by ID

import type { NextApiRequest, NextApiResponse } from "next";
import persistentUserInstance from "../../../../prisma/persistentUserInstance";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import Users from "@/models/users";
import { error } from "console";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

type Message = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Message>
) {
  const session = await getServerSession(req, res, authOptions);
    console.log("hello")
  const supportedRequestMethods: { [key: string]: Function } = {
    GET: getUser,
    // these two below are currently seperated with differnet functions in case there is any 
    // edits needed to be made to a patch or put to ensure
    // a more secure and validated request other than the built in prisma checks
    PUT: updateUser,
    PATCH: updateUserPatch,
  };
  console.log(req.body)
  if (req.method) {
    return supportedRequestMethods[req.method](req, res, session);
  }
  return res.status(405).send({ message: "request method not supported" });
}

//this is the get function which simply takes in the id given fro mthe request query and then checks to see if that number 
// is a valid id to then is confirming that the user exists
async function getUser(
    req: NextApiRequest,
    res: NextApiResponse
) {
    
    let id: number;

    try { 
        id = Number(req.query.id)
    if(typeof id !== 'number') {
        throw Error ("plesae input number")
    }
    } catch (error) {
        return res.status(403).send({ message: String(error) });

    }
    try {
       const userInfo = await persistentUserInstance.getUserById(id);
       return res.status(200).send({ message: userInfo })
    } catch(error) {
        return res.status(403).send({ message: String(error) });
    }
    
}



//updating user with a PULL request this will check if the user exits attempts to get the user 
// as a double confimration that there is data for this user then it will pass to a method in ../models/users.ts
// then comes back adn prints if it was succesful update or not
async function updateUser(
    req: NextApiRequest,
    res: NextApiResponse
) {

    let id: number;

    try { 
        id = Number(req.query.id)
    if(typeof id !== 'number') {
        throw Error ("plesae input number")
    } } catch (error) {
    return res.status(403).send({ message: String(error) });

    }

    try {
    const user = await persistentUserInstance.getUserById(id);
    } catch (err) {
        return res.status(404).send({ message: "User not found" });
    }

    try {
        const updateUser = await persistentUserInstance.updateUserById(id,req.body);
        return res.status(200).send({ message: "updated user"})
    } catch(error) {
        return res.status(403).send({ message: "user was not properly updated" });
    }

}

//updating user with a PATCH request this will check if the user exits attempts to get the user 
// as a double confimration that there is data for this user then it will pass to a method in ../models/users.ts
// which is give the query body then comes back and prints if it was succesful update or not
async function updateUserPatch(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let id: number;

    try { 
        id = Number(req.query.id)
    if(typeof id !== 'number') {
        throw Error ("plesae input number")
    } } catch (error) {
    throw res.status(403).send({ message: String(error) });

    }
    try {
    const user = await persistentUserInstance.getUserById(id);
    } catch (err) {
        throw res.status(404).send({ message: "User not found" });
    }

    try {
        const updateUser = await persistentUserInstance.updateUserById(id, req.body);
        throw res.status(200).send({ message: "updated user thank you" })
    } catch(error) {
        throw res.status(403).send({ message: "user was not properly updated in patch" });
    }
}
