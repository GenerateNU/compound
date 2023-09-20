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
    PUT: updateUser,
    PATCH: updateUserPatch,
  };
  console.log(req.body)
  if (req.method) {
    return supportedRequestMethods[req.method](req, res, session);
  }
  return res.status(405).send({ message: "request method not supported" });
}

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
        return res.status(200).send({ message: updateUser })
    } catch(error) {
        return res.status(403).send({ message: String(error) });
    }

}

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
    return res.status(403).send({ message: String(error) });


    }
    

    // const updatedData = {'email': String, 'phoneNumber': String, 'firstName': String, 
    //                        'lastName': String, 'dob': Date, 'password': String};
    //const {firstName} = req.body;

    
    try {
    const user = await persistentUserInstance.getUserById(id);
    } catch (err) {
        return res.status(404).send({ message: "User not found" });
    }

    try {
        const updateUser = await persistentUserInstance.updateUserById(id, req.body);
        return res.status(200).send({ message: updateUser })
    } catch(error) {
        return res.status(403).send({ message: String(error) });
    }
}
